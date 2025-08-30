"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Mercury, Venus, Mars, Saturn } from "astronomia"; // ไม่ใช้ Jupiter, เพราะไม่ได้รับการส่งออกจาก astronomia

// ประกาศประเภทของ position
interface Position {
    longitude: number;
    latitude: number;
    distance: number;
}

// ประกาศประเภท PlanetPosition สำหรับข้อมูลแต่ละดาว
interface PlanetPosition {
    name: string;
    position: Position;
}

const PlanetaryPositions: React.FC = () => {
    const [planetaryData, setPlanetaryData] = useState<PlanetPosition[]>([]);
    const [date, setDate] = useState<string>("2025-08-30T10:40:00");

    useEffect(() => {
        const fetchPlanetaryPositions = () => {
            const dateObj = new Date(date);

            // คำนวณตำแหน่งของดาวแต่ละดวงโดยไม่ใช้การเรียกฟังก์ชัน Jupiter
            const sun = Sun(dateObj);
            const moon = Moon(dateObj);
            const mercury = Mercury(dateObj);
            const venus = Venus(dateObj);
            const mars = Mars(dateObj);
            const saturn = Saturn(dateObj);

            // สร้างข้อมูลสำหรับแสดงผล
            const data: PlanetPosition[] = [
                { name: "🌞 สุริย์", position: sun },
                { name: "🌙 จันทร์", position: moon },
                { name: "☿️ พุธ", position: mercury },
                { name: "♀️ ศุกร์", position: venus },
                { name: "♂️ อังคาร", position: mars },
                { name: "♄ เสาร์", position: saturn },
            ];

            // ตั้งค่าข้อมูลใน state
            setPlanetaryData(data);
        };

        fetchPlanetaryPositions();
    }, [date]);

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-semibold mb-4">ตำแหน่งของดาวในวันที่ {date}</h2>

            <table className="table-auto w-full border-collapse text-center">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">ดาว</th>
                        <th className="border px-4 py-2">Longitude (องศา)</th>
                        <th className="border px-4 py-2">Latitude (องศา)</th>
                        <th className="border px-4 py-2">Distance (AU)</th>
                    </tr>
                </thead>
                <tbody>
                    {planetaryData.map((planet, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{planet.name}</td>
                            <td className="border px-4 py-2">{planet.position.longitude.toFixed(2)}</td>
                            <td className="border px-4 py-2">{planet.position.latitude.toFixed(2)}</td>
                            <td className="border px-4 py-2">{planet.position.distance.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* สามารถเพิ่มฟังก์ชันการเปลี่ยนวันที่ได้ */}
            <div className="mt-4">
                <label className="block text-sm font-medium mb-2">เลือกวันที่:</label>
                <input
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="p-2 border rounded-md"
                />
            </div>
        </div>
    );
};

export default PlanetaryPositions;
