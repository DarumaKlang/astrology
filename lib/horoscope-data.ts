import { DateTime } from "luxon";
import { Planet } from "astronomia/planetposition";

// VSOP87 dataset
import * as mercuryData from "astronomia/data/vsop87Bmercury";
import * as venusData from "astronomia/data/vsop87Bvenus";
import * as marsData from "astronomia/data/vsop87Bmars";
import * as jupiterData from "astronomia/data/vsop87Bjupiter";
import * as saturnData from "astronomia/data/vsop87Bsaturn";
import * as uranusData from "astronomia/data/vsop87Buranus";
import * as neptuneData from "astronomia/data/vsop87Bneptune";

import { julian } from "astronomia";
import { position as moonPosition } from "astronomia/moonposition";
import { apparentLongitude as sunLongitude } from "astronomia/solar";

// Mapping planet → Planet instance
const planetMap: Record<string, Planet> = {
    Mercury: new Planet(mercuryData),
    Venus: new Planet(venusData),
    Mars: new Planet(marsData),
    Jupiter: new Planet(jupiterData),
    Saturn: new Planet(saturnData),
    Uranus: new Planet(uranusData),
    Neptune: new Planet(neptuneData),
};

// Mapping ชื่อดาวไทย + emoji
export const planetNameTH: Record<string, string> = {
    Sun: "🌞 สุริย์",
    Moon: "🌙 จันทร์",
    Mercury: "☿️ พุธ",
    Venus: "♀️ ศุกร์",
    Mars: "♂️ อังคาร",
    Jupiter: "♃ พฤหัส",
    Saturn: "♄ เสาร์",
    Uranus: "⛢ ยูเรนัส",
    Neptune: "♆ เนปจูน",
};

// House interface
export interface House {
    name: string;
    start: number; // degree
    end: number;   // degree
}

// สร้าง houses dynamic
export function createHouses(names: string[]): House[] {
    const step = 360 / names.length;
    return names.map((name, i) => ({
        name,
        start: i * step,
        end: (i + 1) * step,
    }));
}

// คำนวณ Julian Day
function getJulianDay(date: DateTime): number {
    return julian.CalendarGregorianToJD(
        date.year,
        date.month,
        date.day + date.hour / 24 + date.minute / 1440 + date.second / 86400
    );
}

// Planet longitude
function getPlanetLongitude(planet: Planet | undefined, date: DateTime): number | null {
    if (!planet) return null;
    const jd = getJulianDay(date);
    try {
        const pos = planet.position(jd);
        if (!pos || typeof pos.lon !== "number") return null;
        return (pos.lon * 180) / Math.PI;
    } catch {
        return null;
    }
}

// Moon longitude
function getMoonLongitude(date: DateTime): number | null {
    const jd = getJulianDay(date);
    try {
        const pos = moonPosition(jd);
        return (pos.lon * 180) / Math.PI;
    } catch {
        return null;
    }
}

// Sun longitude
function getSunLongitude(date: DateTime): number | null {
    const jd = getJulianDay(date);
    try {
        return (sunLongitude(jd) * 180) / Math.PI;
    } catch {
        return null;
    }
}

// Default Thai Zodiac
export const defaultThaiZodiac = [
    "ราศีเมษ", "ราศีพฤษภ", "ราศีเมถุน", "ราศีกรกฎ",
    "ราศีสิงห์", "ราศีกันย์", "ราศีตุล", "ราศีพิจิก",
    "ราศีธนู", "ราศีมังกร", "ราศีกุมภ์", "ราศีมีน"
];

// Main function
export function getHoroscope(date: DateTime, houses?: House[]) {
    const zodiacHouses = houses && houses.length > 0
        ? houses
        : createHouses(defaultThaiZodiac);

    const bodies: { name: string; lon: number | null }[] = [
        { name: "Sun", lon: getSunLongitude(date) },
        { name: "Moon", lon: getMoonLongitude(date) },
        ...Object.entries(planetMap).map(([name, planet]) => ({
            name,
            lon: getPlanetLongitude(planet, date),
        })),
    ];

    return bodies.map((body) => {
        const planetName = planetNameTH[body.name] || body.name;
        if (body.lon === null || isNaN(body.lon)) {
            return { planet: planetName, house: "Unknown" };
        }
        const deg = ((body.lon % 360) + 360) % 360;
        const house = zodiacHouses.find((h) => deg >= h.start && deg < h.end);
        return {
            planet: planetName,
            house: house?.name ?? "Unknown",
        };
    });
}
