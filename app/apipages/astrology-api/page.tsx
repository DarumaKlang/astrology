"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { DateTime } from 'luxon';

interface AstrologyApiResponse {
    dayOfWeek: string;
    waxingWaning: string;
    dithi: string;
    thaiMonth: string;
    animalYear: string;
    buddhistYear: number;
    time: string;
    yam: string;
    dayOfWeekIndex: number;
    lunarDayThai: string;
    thaiLunarMonthThai: string;
    error?: string;
}

export default function ApiDocumentationPage() {
    const [birthDate, setBirthDate] = useState("");
    const [apiResponse, setApiResponse] = useState<AstrologyApiResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFetchApi = async () => {
        setLoading(true);
        setError(null);
        setApiResponse(null);

        if (!birthDate) {
            setError("กรุณากรอกวันและเวลาเกิด");
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('/api/astrology', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ birthDate }),
            });

            const data: AstrologyApiResponse = await response.json();

            if (!response.ok) {
                setError(data.error || 'เกิดข้อผิดพลาดในการเรียก API');
            } else {
                setApiResponse(data);
            }
        } catch (err) {
            setError('ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้');
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="relative min-h-screen">
            <Navbar />
            <div className="relative z-10 flex flex-col items-center min-h-[calc(100vh-100px)] text-white p-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col w-full max-w-2xl mt-12">
                    <h1 className="text-3xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                        เอกสารประกอบการใช้งาน API โหราศาสตร์ไทย
                    </h1>
                    <p className="text-gray-400 mb-8 text-center">
                        API นี้ถูกสร้างขึ้นเพื่อให้การคำนวณข้อมูลทางโหราศาสตร์ไทยง่ายขึ้น เพียงแค่ส่งวันและเวลาเกิดไป ก็จะได้ข้อมูลต่างๆ ที่จำเป็นกลับมา
                    </p>

                    {/* API Details Section */}
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">Endpoint</h2>
                        <code className="bg-gray-800 text-yellow-300 p-2 rounded-md block w-full overflow-x-auto">
                            POST /api/astrology
                        </code>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">Request Body (JSON)</h2>
                        <pre className="bg-gray-800 text-yellow-300 p-4 rounded-md overflow-x-auto">
                            {`{
  "birthDate": "YYYY-MM-DDTHH:mm:ss"
}`}
                        </pre>
                        <p className="text-gray-400 mt-2">
                            เช่น: "2025-08-29T10:30:00"
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-2">Response Body (JSON)</h2>
                        <pre className="bg-gray-800 text-yellow-300 p-4 rounded-md overflow-x-auto">
                            {`{
  "dayOfWeek": "ศุกร์",
  "waxingWaning": "แรม ๒ ค่ำ",
  "dithi": "ฟังธรรมกลางป่าช้า",
  "thaiMonth": "สิงหาคม",
  "animalYear": "มะเส็ง",
  "buddhistYear": 2568,
  "time": "10:30",
  "yam": "ยาม ๒ กลางวัน",
  "dayOfWeekIndex": 5,
  "lunarDayThai": "๒",
  "thaiLunarMonthThai": "๙"
}`}
                        </pre>
                    </div>

                    {/* Live Example Section */}
                    <hr className="my-8 border-gray-600" />
                    <h2 className="text-xl font-bold mb-4 text-center">ตัวอย่างการใช้งาน (Code Example)</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">ลองทดสอบ API</h3>
                            <input
                                type="datetime-local"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                className="w-full p-2 rounded-md bg-gray-800 text-white border border-gray-600 mb-4"
                            />
                            <button
                                onClick={handleFetchApi}
                                disabled={loading}
                                className="w-full bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-md disabled:opacity-50"
                            >
                                {loading ? 'กำลังโหลด...' : 'ส่งข้อมูล API'}
                            </button>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">ผลลัพธ์ (JSON)</h3>
                            <pre className="bg-gray-800 text-green-300 p-4 rounded-md w-full overflow-x-auto min-h-[200px]">
                                {error ? (
                                    <span className="text-red-400">Error: {error}</span>
                                ) : (
                                    JSON.stringify(apiResponse, null, 2)
                                )}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}