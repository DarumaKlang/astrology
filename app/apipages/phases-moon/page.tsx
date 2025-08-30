"use client";

import React from 'react';
import Image from "next/image";
import Navbar from '@/components/Navbar';
import ClientInput from "@/components/ClientInput";
import Link from 'next/link';

export default function PhasesMoonPage() {
    return (
        <main className="relative min-h-screen">
            {/* Header and Navigation */}
            <Navbar />

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center min-h-[calc(100vh-100px)] text-white p-4 sm:p-8">

                {/* Client Input Component */}
                <ClientInput />

                {/* API Documentation Card */}
                <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col w-full max-w-2xl my-8 sm:my-12">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                        เอกสารประกอบการใช้งาน API โหราศาสตร์ไทย
                    </h1>
                    <p className="text-gray-400 mb-6 text-center text-sm sm:text-base">
                        API นี้ถูกสร้างขึ้นเพื่อให้การคำนวณข้อมูลทางโหราศาสตร์ไทยง่ายขึ้น เพียงแค่ส่งวันและเวลาเกิดไป ก็จะได้ข้อมูลต่างๆ ที่จำเป็นกลับมา
                    </p>

                    {/* ใช้ flex-col สำหรับมือถือ และเปลี่ยนเป็น grid md:grid-cols-3 สำหรับหน้าจอขนาดกลางขึ้นไป */}
                    <div className="flex flex-col md:grid md:grid-cols-3 gap-4 sm:gap-6">
                        {/* Endpoint Card */}
                        <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700">
                            <h2 className="text-lg font-bold mb-2 text-yellow-300">Endpoint</h2>
                            <code className="bg-gray-800 text-yellow-300 p-2 rounded-md block w-full overflow-x-auto text-xs sm:text-sm">
                                POST /api/astrology
                            </code>
                        </div>

                        {/* Request Card */}
                        <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700">
                            <h2 className="text-lg font-bold mb-2 text-yellow-300">Request Body</h2>
                            <pre className="bg-gray-800 text-yellow-300 p-2 rounded-md overflow-x-auto text-xs sm:text-sm">
                                {`{
"birthDate": "YYYY-MM-DDTHH:mm:ss"
}`}
                            </pre>
                            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
                                ตัวอย่าง: "2025-08-29T10:30:00"
                            </p>
                        </div>

                        {/* Response Card */}
                        <div className="bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700">
                            <h2 className="text-lg font-bold mb-2 text-yellow-300">Response Body</h2>
                            <pre className="bg-gray-800 text-yellow-300 p-2 rounded-md overflow-x-auto text-xs sm:text-sm">
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
                    </div>
                </div>

                {/* Footer */}
                <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center mt-auto">
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/file.svg"
                            alt="File icon"
                            width={16}
                            height={16}
                        />
                        Learn
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/window.svg"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Examples
                    </a>
                    <a
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            aria-hidden
                            src="/globe.svg"
                            alt="Globe icon"
                            width={16}
                            height={16}
                        />
                        Go to nextjs.org →
                    </a>
                </footer>
            </div>
        </main>
    );
}
