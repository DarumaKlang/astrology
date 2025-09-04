"use client";

import React, { useState, useEffect } from 'react';
import { astrologicalRules } from '@/data/astrologicalRules';
import { AstrologicalSign } from '@/types/astrology';

const BlankCard: React.FC = () => {
    const [birthDate, setBirthDate] = useState<string>('');
    const [birthTime, setBirthTime] = useState<string>('');
    const [lukkanaSign, setLukkanaSign] = useState<string>('กรุณากรอกข้อมูล...');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const calculateLukkana = (date: string, time: string): string => {
        if (!date || !time) {
            return 'กรุณากรอกข้อมูลวันและเวลาเกิด';
        }

        const birthDateTime = new Date(`${date}T${time}`);
        const birthMonth = birthDateTime.getMonth() + 1; // getMonth() is 0-indexed
        const birthDay = birthDateTime.getDate();
        const birthHour = birthDateTime.getHours();
        const birthMinute = birthDateTime.getMinutes();

        // Convert birth time to minutes for easier comparison
        const birthTimeInMinutes = birthHour * 60 + birthMinute;

        for (const sign of astrologicalRules) {
            for (const rule of sign.rules) {
                const monthMatch = (birthMonth >= rule.month[0] && birthMonth <= rule.month[1]) ||
                                  (rule.month[0] > rule.month[1] && (birthMonth >= rule.month[0] || birthMonth <= rule.month[1]));
                
                const dateMatch = (birthDay >= rule.dateRange[0] && birthDay <= rule.dateRange[1]) ||
                                  (rule.dateRange[0] > rule.dateRange[1] && (birthDay >= rule.dateRange[0] || birthDay <= rule.dateRange[1]));
                
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

    // กำหนด min-height เพื่อให้ Card มีขนาดคงที่
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
            return (
                <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-4">
                    {isDataValid ? (
                        <>
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-gold drop-shadow-lg mb-2">
                                ผลลัพธ์ลัคนา
                            </h2>
                            <p className="text-xl font-bold mb-4">
                                ลัคนาของคุณ: <span className="text-secondary-gold text-3xl">{lukkanaSign}</span>
                            </p>
                            <p className="text-base text-gray-300">
                                คุณเกิดวันที่ {birthDate} เวลา {birthTime}
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
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center justify-center max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto my-8">
            <div className="text-center w-full">
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-gold mb-2 drop-shadow-lg">
                    เช็กลัคนา
                </h2>
                <p className="text-6xl font-bold mb-4 drop-shadow-lg text-white">
                    คำนวณลัคนา
                </p>
                <p className="text-lg text-gray-400">
                    กรุณากรอกข้อมูลวันและเวลาเกิด
                </p>

                <div className={`bg-white/20 p-6 sm:p-8 rounded-md mt-6 flex flex-col items-start w-full transition-all duration-500 ${cardContentMinHeight}`}>
                    {renderCardContent()}
                </div>
            </div>
        </div>
    );
};

export default BlankCard;
