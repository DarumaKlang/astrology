"use client";

import React from "react";

interface HoroscopeCardProps {
    horoscope: { planet: string; house: string }[];
}

const thaiZodiacNames = [
    "ราศีเมษ", "ราศีพฤษภ", "ราศีเมถุน", "ราศีกรกฎ",
    "ราศีสิงห์", "ราศีกันย์", "ราศีตุล", "ราศีพิจิก",
    "ราศีธนู", "ราศีมังกร", "ราศีกุมภ์", "ราศีมีน"
];

const HoroscopeCard: React.FC<HoroscopeCardProps> = ({ horoscope }) => {
    console.log("Received horoscope data:", horoscope); // Log ข้อมูล horoscope ที่รับเข้ามา

    if (!Array.isArray(horoscope)) {
        console.error("Invalid horoscope data: ", horoscope);
        return null;
    }

    const zodiacMap: Record<string, string[]> = {};
    thaiZodiacNames.forEach((name) => (zodiacMap[name] = [])); // สร้าง map ของราศีทั้งหมด

    horoscope.forEach((h) => {
        // ตรวจสอบว่า house ไม่ใช่ "Unknown" และตรงกับราศีใน zodiacMap
        if (h.house !== "Unknown" && zodiacMap.hasOwnProperty(h.house)) {
            zodiacMap[h.house].push(h.planet);
        } else {
            console.log(`Skipping planet ${h.planet} as house is ${h.house}`);
        }
    });

    console.log("zodiacMap:", zodiacMap); // Log ค่า zodiacMap

    const maxCols = Math.max(...Object.values(zodiacMap).map(arr => arr.length));
    console.log("maxCols:", maxCols);

    return (
        <div className="overflow-x-auto border rounded-lg shadow p-4 bg-white">
            <table className="table-auto w-full border-collapse text-center">
                <thead>
                    <tr>
                        <th className="border px-2 py-1 bg-gray-100 text-sm font-semibold">ราศี</th>
                        {Array.from({ length: maxCols }).map((_, colIndex) => (
                            <th key={colIndex} className="border px-2 py-1 bg-gray-100 text-sm font-semibold">
                                ดาว {colIndex + 1}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {thaiZodiacNames.map((zodiac) => (
                        <tr key={zodiac}>
                            <td className="border px-2 py-1 font-semibold">{zodiac}</td>
                            {Array.from({ length: maxCols }).map((_, colIndex) => (
                                <td key={zodiac + colIndex} className="border px-2 py-1 min-h-[30px]">
                                    {zodiacMap[zodiac][colIndex] || ""}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default HoroscopeCard;
