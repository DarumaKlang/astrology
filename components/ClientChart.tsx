// components/ClientChart.tsx
"use client";

import { useState } from "react";
import ChartView from "@/components/Chart";
import { DateTime } from "luxon";
import { calculateChart } from "@/lib/astrology";

export default function ClientChart() {
    const [date, setDate] = useState("2016-11-01T00:15");
    const [lat, setLat] = useState("13.7563");
    const [lon, setLon] = useState("100.5018");
    const [chart, setChart] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const parsedLat = parseFloat(lat);
            const parsedLon = parseFloat(lon);

            if (isNaN(parsedLat) || isNaN(parsedLon)) {
                alert("กรุณากรอกค่า Latitude และ Longitude ที่เป็นตัวเลข");
                setLoading(false);
                return;
            }

            const birthDateTime = DateTime.fromISO(date, { zone: "utc" });
            if (!birthDateTime.isValid) {
                alert("กรุณากรอกวันที่และเวลาที่ถูกต้อง");
                setLoading(false);
                return;
            }

            const birthDate = birthDateTime.toJSDate();

            // เรียกใช้ Server Action โดยตรง
            const c = await calculateChart(birthDate, parsedLat, parsedLon);
            setChart(c);
        } catch (error) {
            console.error(error);
            alert("เกิดข้อผิดพลาดในการคำนวณ");
        }
        setLoading(false);
    };

    return (
        <div className="w-full max-w-lg space-y-8 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl transition-colors duration-500">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-2">
                ดูดวงโหราศาสตร์ไทย 🔮
            </h1>
            <div className="space-y-4">
                <label className="block">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">วันเวลาเกิด (UTC):</span>
                    <input
                        type="datetime-local"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Latitude:</span>
                    <input
                        type="text"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                </label>
                <label className="block">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Longitude:</span>
                    <input
                        type="text"
                        value={lon}
                        onChange={(e) => setLon(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:border-blue-500 focus:ring-blue-500 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                </label>
            </div>
            <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-300 disabled:opacity-50"
            >
                {loading ? "กำลังคำนวณ..." : "คำนวณดวง"}
            </button>
            {chart && <ChartView chart={chart} reading={"คำนวณดวงเรียบร้อยแล้ว"} />}
        </div>
    );
}