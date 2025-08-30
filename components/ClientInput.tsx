// components/ClientInput.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { getThaiAstrologyInfo } from "@/lib/astrology";
import { DateTime } from "luxon";

export default function ClientInput() {
    const [birthDate, setBirthDate] = useState("");
    const [resultHtml, setResultHtml] = useState("กรุณากรอกข้อมูลวันเกิดเพื่อคำนวณ");
    const [loading, setLoading] = useState(false);
    const [displayDate, setDisplayDate] = useState("");
    const [highlightDayIndex, setHighlightDayIndex] = useState<number | null>(null); // State ใหม่สำหรับเก็บ index วันที่จะเน้น

    useEffect(() => {
        if (birthDate) {
            const luxonDate = DateTime.fromISO(birthDate);
            if (luxonDate.isValid) {
                const buddhistYear = luxonDate.year + 543;
                const formattedDate = luxonDate.toFormat(`dd/MM/${buddhistYear}, HH:mm น.`);
                setDisplayDate(formattedDate);
            }
        } else {
            setDisplayDate("เลือกวันและเวลา");
        }
    }, [birthDate]);

    const handleCalculate = async () => {
        setLoading(true);
        setResultHtml("กำลังคำนวณ...");
        setHighlightDayIndex(null); // Reset highlight เมื่อเริ่มคำนวณใหม่
        try {
            const astrologyResult = await getThaiAstrologyInfo(birthDate);

            if (typeof astrologyResult === 'string') {
                // ถ้าเป็น string แสดงว่าเกิดข้อผิดพลาด
                setResultHtml(astrologyResult);
                setHighlightDayIndex(null);
            } else {
                // ถ้าเป็น object แสดงว่าคำนวณสำเร็จ
                setResultHtml(astrologyResult.html);
                setHighlightDayIndex(astrologyResult.dayOfWeekIndex);
            }
        } catch (error) {
            console.error("Error during calculation:", error);
            setResultHtml("เกิดข้อผิดพลาดในการคำนวณ กรุณาตรวจสอบข้อมูล");
            setHighlightDayIndex(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        // div นี้เป็นกรอบ Card โดยมีเส้นขอบภายนอกที่ชัดเจน (จาก ClientInput เดิม)
        <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-xl border border-secondary-gold/30 flex justify-center items-center w-full max-w-md mx-auto my-4 sm:my-8">
            <div className="bg-gray-800 p-10 rounded-2xl shadow-2xl max-w-lg w-full transition-all duration-300">
                <h1 className="text-3xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                    คำนวณข้อมูลเกิดแบบไทย 🔮
                </h1>
                <p className="text-center text-gray-400 mb-8 text-lg">
                    กรอกวันและเวลาเกิดเพื่อดูข้อมูลทางโหราศาสตร์เบื้องต้น
                </p>
                <div className="mb-6 space-y-4">
                    <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="birthDate">
                        วันเดือนปีและเวลาเกิด
                    </label>
                    <input
                        id="birthDate"
                        type="datetime-local"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        className="shadow appearance-none border-none rounded-xl w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 placeholder-gray-400 transition-colors duration-200"
                    />
                    <div className="mt-2 text-center text-gray-400">
                        {displayDate}
                    </div>
                </div>
                <button
                    onClick={handleCalculate}
                    disabled={loading || !birthDate}
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold py-3 px-4 rounded-xl w-full focus:outline-none focus:shadow-outline transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                    {loading ? "กำลังคำนวณ..." : "คำนวณ"}
                </button>
                <div
                    className="mt-8 p-6 bg-gray-700 rounded-xl shadow-inner text-center"
                    dangerouslySetInnerHTML={{ __html: resultHtml }}
                ></div>
                
            </div>
        </div>
    );
}