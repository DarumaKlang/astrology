"use client";

import React, { useState } from 'react';

// Interfaces for Astrological Signs and Rules
export interface AstrologicalSign {
    nameThai: string;
    sign: string;
    rules: AstrologicalRule[];
}

export interface AstrologicalRule {
    month: [number, number];
    dateRange: [number, number];
    timeRange: [number, number];
}

// Data for Astrological Rules (Thai Astrology)
export const astrologicalRules: AstrologicalSign[] = [
    {
        nameThai: 'ลัคนาราศีเมษ',
        sign: 'เมษ',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [781, 900] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [661, 780] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [541, 660] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [421, 540] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [301, 420] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [181, 300] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [61, 180] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [1381, 1440] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [0, 60] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [1261, 1380] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [1141, 1260] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [1021, 1140] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [901, 1020] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [781, 900] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีพฤษภ',
        sign: 'พฤษภ',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [901, 1020] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [781, 900] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [661, 780] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [541, 660] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [421, 540] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [301, 420] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [181, 300] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [61, 180] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [1381, 1440] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [0, 60] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [1261, 1380] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [1141, 1260] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [1021, 1140] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [901, 1020] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีเมถุน',
        sign: 'เมถุน',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [1021, 1140] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [901, 1020] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [781, 900] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [661, 780] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [541, 660] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [421, 540] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [301, 420] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [181, 300] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [61, 180] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [1381, 1440] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [0, 60] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [1261, 1380] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [1141, 1260] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [1021, 1140] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีกรกฎ',
        sign: 'กรกฎ',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [1141, 1260] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [1021, 1140] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [901, 1020] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [781, 900] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [661, 780] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [541, 660] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [421, 540] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [301, 420] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [181, 300] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [61, 180] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [1381, 1440] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [0, 60] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [1261, 1380] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [1141, 1260] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีสิงห์',
        sign: 'สิงห์',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [1261, 1380] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [1141, 1260] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [1021, 1140] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [901, 1020] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [781, 900] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [661, 780] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [541, 660] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [421, 540] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [301, 420] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [181, 300] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [61, 180] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [1381, 1440] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [0, 60] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [1261, 1380] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีกันย์',
        sign: 'กันย์',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [1381, 1440] },
            { month: [1, 2], dateRange: [15, 12], timeRange: [0, 60] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [1261, 1380] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [1141, 1260] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [1021, 1140] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [901, 1020] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [781, 900] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [661, 780] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [541, 660] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [421, 540] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [301, 420] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [181, 300] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [61, 180] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [1381, 1440] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [0, 60] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีตุลย์',
        sign: 'ตุลย์',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [61, 180] },
            { month: [1, 2], dateRange: [15, 12], timeRange: [1381, 1440] },
            { month: [1, 2], dateRange: [15, 12], timeRange: [0, 60] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [181, 300] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [1261, 1380] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [1141, 1260] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [1021, 1140] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [901, 1020] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [781, 900] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [661, 780] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [541, 660] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [421, 540] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [301, 420] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [181, 300] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีพิจิก',
        sign: 'พิจิก',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [181, 300] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [61, 180] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [1381, 1440] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [0, 60] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [1261, 1380] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [1141, 1260] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [1021, 1140] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [901, 1020] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [781, 900] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [661, 780] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [541, 660] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [421, 540] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [301, 420] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [181, 300] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีธนู',
        sign: 'ธนู',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [301, 420] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [181, 300] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [61, 180] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [1381, 1440] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [0, 60] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [1261, 1380] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [1141, 1260] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [1021, 1140] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [901, 1020] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [781, 900] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [661, 780] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [541, 660] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [421, 540] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [301, 420] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีมังกร',
        sign: 'มังกร',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [421, 540] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [301, 420] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [181, 300] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [61, 180] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [1381, 1440] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [0, 60] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [1261, 1380] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [1141, 1260] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [1021, 1140] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [901, 1020] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [781, 900] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [661, 780] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [541, 660] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [421, 540] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีกุมภ์',
        sign: 'กุมภ์',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [541, 660] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [421, 540] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [301, 420] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [181, 300] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [61, 180] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [1381, 1440] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [0, 60] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [1261, 1380] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [1141, 1260] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [1021, 1140] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [901, 1020] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [781, 900] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [661, 780] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [541, 660] },
        ],
    },
    {
        nameThai: 'ลัคนาราศีมีน',
        sign: 'มีน',
        rules: [
            { month: [1, 2], dateRange: [15, 12], timeRange: [661, 780] },
            { month: [2, 3], dateRange: [13, 13], timeRange: [541, 660] },
            { month: [3, 4], dateRange: [14, 12], timeRange: [421, 540] },
            { month: [4, 5], dateRange: [13, 13], timeRange: [301, 420] },
            { month: [5, 6], dateRange: [14, 13], timeRange: [181, 300] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [61, 180] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [1381, 1440] },
            { month: [6, 7], dateRange: [14, 14], timeRange: [0, 60] },
            { month: [7, 8], dateRange: [15, 16], timeRange: [1261, 1380] },
            { month: [8, 9], dateRange: [17, 16], timeRange: [1141, 1260] },
            { month: [9, 10], dateRange: [17, 16], timeRange: [1021, 1140] },
            { month: [10, 11], dateRange: [17, 15], timeRange: [901, 1020] },
            { month: [11, 12], dateRange: [16, 15], timeRange: [781, 900] },
            { month: [12, 1], dateRange: [16, 14], timeRange: [661, 780] },
        ],
    },
];

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

    const getDayOfWeek = (date: string): string => {
        const days = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
        const dayIndex = new Date(date).getDay();
        return days[dayIndex];
    };

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
            const dayOfWeek = isDataValid ? getDayOfWeek(birthDate) : '';
            return (
                <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-4">
                    {isDataValid ? (
                        <>
                            <h2 className="text-2xl sm:text-3xl font-bold text-secondary-gold drop-shadow-lg mb-2 py-4">
                                ผลลัพธ์การตรวจสอบลัคนา
                            </h2>

                            <p className="text-base text-gray-300">
                                คุณเกิดวัน{dayOfWeek} ที่ {birthDate} เวลา {birthTime}
                            </p>

                            <p className="text-2xl font-bold mb-4">
                                คุณเกิดใน <span className="text-secondary-gold text-2xl">{lukkanaSign}</span>
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
                    ตรวจสอบลัคนาออนไลน์
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
