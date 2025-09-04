"use client";

import React, { useState, useEffect } from 'react';
import { astrologicalRules } from '@/data/astrologicalRules';
import { AstrologicalSign } from '@/types/astrology';

const LukkanaChecker: React.FC = () => {
    const [birthDate, setBirthDate] = useState<string>('');
    const [birthTime, setBirthTime] = useState<string>('');
    const [lukkanaSign, setLukkanaSign] = useState<string>('กรุณากรอกข้อมูล...');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    // เพิ่มฟังก์ชันนี้สำหรับจัดรูปแบบวันที่
    const formatDate = (dateString: string): string => {
        if (!dateString) return '';
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    };

    const calculateLukkana = (date: string, time: string): string => {
        if (!date || !time) {
            return 'ไม่พบข้อมูลลัคนา';
        }

        const [year, month, day] = date.split('-').map(Number);
        const [hours, minutes] = time.split(':').map(Number);
        const birthTimeInMinutes = hours * 60 + minutes;

        for (const sign of astrologicalRules) {
            for (const rule of sign.rules) {
                const monthMatch = (month >= rule.month[0] && month <= rule.month[1]) ||
                    (rule.month[0] > rule.month[1] && (month >= rule.month[0] || month <= rule.month[1]));

                const dateMatch = (day >= rule.dateRange[0] && day <= rule.dateRange[1]) ||
                    (rule.dateRange[0] > rule.dateRange[1] && (day >= rule.dateRange[0] || day <= rule.dateRange[1]));

                const timeMatch = birthTimeInMinutes >= rule.timeRange[0] && birthTimeInMinutes <= rule.timeRange[1];

                if (monthMatch && dateMatch && timeMatch) {
                    return sign.nameThai;
                }
            }
        }

        return 'ไม่พบข้อมูลลัคนา';
    };

    const handleCheckLukkana = (e: React.FormEvent) => {
        e.preventDefault();
        const calculatedLukkana = calculateLukkana(birthDate, birthTime);
        setLukkanaSign(calculatedLukkana);
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setBirthDate('');
        setBirthTime('');
        setLukkanaSign('กรุณากรอกข้อมูล...');
    };

    const cardContentMinHeight = "min-h-[250px] sm:min-h-[280px]";

    const renderCardContent = () => {
        if (!isSubmitted) {
            return (
                <form onSubmit={handleCheckLukkana} className="space-y-4 w-full">
                    <div>
                        <label htmlFor="birthDate" className="block text-sm font-medium text-white/70">
                            วันเกิด
                        </label>
                        <input
                            type="date"
                            id="birthDate"
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-secondary-gold/30 shadow-sm bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-secondary-gold/80 focus:border-secondary-gold/80"
                        />
                    </div>
                    <div>
                        <label htmlFor="birthTime" className="block text-sm font-medium text-white/70">
                            เวลาเกิด
                        </label>
                        <input
                            type="time"
                            id="birthTime"
                            value={birthTime}
                            onChange={(e) => setBirthTime(e.target.value)}
                            className="mt-1 block w-full rounded-md border border-secondary-gold/30 shadow-sm bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-secondary-gold/80 focus:border-secondary-gold/80"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-6 border border-secondary-gold rounded-md shadow-sm text-sm font-medium text-secondary-gold bg-transparent hover:bg-secondary-gold hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-gold"
                    >
                        เช็กลัคนา
                    </button>
                </form>
            );
        } else {
            const isDataValid = birthDate && birthTime;
            // ใช้ formattedDate เพื่อแสดงผลในรูปแบบ dd/mm/yyyy
            const formattedDate = formatDate(birthDate); 
            return (
                <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-4">
                    {isDataValid ? (
                        <>
                            <h2 className="text-xl sm:text-xl font-bold text-secondary-gold drop-shadow-lg mb-2">
                                ผลลัพธ์การคำนวณลัคนาของคุณ
                            </h2>
                            <p className="text-2xl font-bold mb-4">
                                <span className="text-secondary-gold text-2xl">{lukkanaSign}</span>
                            </p>
                            <p className="text-base text-gray-300">
                                คุณเกิดวันที่ {formattedDate} เวลา {birthTime}
                            </p>
                        </>
                    ) : (
                        <p className="text-white text-center text-sm xs:text-lg">กรุณากรอกข้อมูลวันเดือนปี และ เวลาตกฟาก</p>
                    )}
                    <button
                        onClick={handleReset}
                        className="w-full py-2 px-6 border border-secondary-gold rounded-md shadow-sm text-sm font-medium text-secondary-gold bg-transparent hover:bg-secondary-gold hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-gold"
                    >
                        ย้อนกลับ
                    </button>
                </div>
            );
        }
    };

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center justify-center max-w-sm mx-auto my-8">

            <h1 className="text-3xl font-bold mb-2 drop-shadow-lg text-amber-400">
                เครื่องมือคำนวณลัคนาราศี
            </h1>

            <p className="text-center text-md mb-6 text-gray-200">
                โปรดกรอกข้อมูลวัน/เดือน/ปีเกิด และเวลาเกิดของคุณ
            </p>

            <div className={`bg-white/20 p-6 sm:p-8 rounded-md mt-6 flex flex-col items-start w-full transition-all duration-500 ${cardContentMinHeight}`}>
                {renderCardContent()}
            </div>
        </div>

    );
};

export default LukkanaChecker;