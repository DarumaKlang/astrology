"use client";

import React from 'react';

interface LukkanaCardProps {
    birthDate: string;
    birthTime: string;
}

const LukkanaCard: React.FC<LukkanaCardProps> = ({ birthDate, birthTime }) => {
    // Placeholder logic for future lukkana calculation
    const isDataValid = birthDate && birthTime;

    return (
        <div className="w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col justify-center items-center h-full min-h-[200px] text-center">
            {isDataValid ? (
                <>
                    <h2 className="text-2xl sm:text-3xl font-bold text-secondary-gold drop-shadow-lg mb-2">
                        ผลลัพธ์ลัคนา
                    </h2>
                    <p className="text-xl font-bold mb-4">
                        ลัคนาของคุณ: <span className="text-secondary-gold text-3xl">เมษ</span>
                    </p>
                    <p className="text-base text-gray-300">
                        คุณเกิดวันที่ {birthDate} เวลา {birthTime}
                    </p>
                </>
            ) : (
                <p className="text-white text-center text-lg sm:text-xl">กรุณากรอกข้อมูลวันและเวลาเกิดเพื่อคำนวณลัคนา</p>
            )}
        </div>
    );
};

export default LukkanaCard;
