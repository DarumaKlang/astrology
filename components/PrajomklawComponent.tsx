"use client";

import React, { useState } from 'react';
import { prajomklawData } from '@/data/prajomklawData';

const PrajomklawComponent: React.FC = () => {
    const [birthDayOfWeek, setBirthDayOfWeek] = useState<string>('');
    const [birthMonth, setBirthMonth] = useState<string>('');
    const [birthYear, setBirthYear] = useState<string>('');
    const [zodiacSign, setZodiacSign] = useState<string>('');
    const [result, setResult] = useState<{ remainder: number | null; verse: string }>({ remainder: null, verse: '' });
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    // Mappings for calculations
    const dayMapping: { [key: string]: number } = {
        'อาทิตย์': 1,
        'จันทร์': 2,
        'อังคาร': 3,
        'พุธ': 4,
        'พฤหัสบดี': 5,
        'ศุกร์': 6,
        'เสาร์': 7,
    };

    const zodiacSigns: string[] = ['ชวด', 'ฉลู', 'ขาล', 'เถาะ', 'มะโรง', 'มะเส็ง', 'มะเมีย', 'มะแม', 'วอก', 'ระกา', 'จอ', 'กุล'];

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        
        const dayNumber = dayMapping[birthDayOfWeek];
        const yearNumber = parseInt(birthYear);
        const monthNumber = parseInt(birthMonth);

        // Calculate zodiac number from B.E. year. Year 2515 B.E. (1972 C.E.) is the start of the 12-year cycle (Year of the Rat/ชวด)
        const zodiacIndex = (yearNumber - 2515) % 12;
        const normalizedIndex = zodiacIndex >= 0 ? zodiacIndex : zodiacIndex + 12;
        const calculatedZodiacSign = zodiacSigns[normalizedIndex];
        
        // Use zodiac number for calculation. 
        const zodiacNumber = normalizedIndex + 1;

        if (isNaN(yearNumber) || isNaN(monthNumber) || isNaN(dayNumber)) {
            setResult({ remainder: null, verse: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
        } else {
            const sum = zodiacNumber + monthNumber + dayNumber;
            const remainder = sum % 10;
            const foundVerse = prajomklawData.find(item => item.remainder === remainder)?.verse || 'ไม่พบคำทำนาย';
            
            setZodiacSign(calculatedZodiacSign);
            setResult({ remainder, verse: foundVerse });
        }
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        setBirthDayOfWeek('');
        setBirthMonth('');
        setBirthYear('');
        setZodiacSign('');
        setResult({ remainder: null, verse: '' });
    };

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center justify-center max-w-sm mx-auto my-8">
            <h1 className="text-3xl font-bold mb-2 drop-shadow-lg text-amber-400">
                คำทำนายจากปฏิทินหลวง
            </h1>
            <p className="text-center text-md mb-6 text-gray-200">
                โปรดกรอกข้อมูลวัน/เดือน/ปีเกิด เพื่อรับคำทำนาย
            </p>

            <div className="bg-white/20 p-6 sm:p-8 rounded-md mt-6 flex flex-col items-start w-full transition-all duration-500 min-h-[400px]">
                {isSubmitted ? (
                    <div className="w-full h-full flex flex-col items-center text-center space-y-4">
                        <h2 className="text-xl sm:text-xl font-bold text-secondary-gold drop-shadow-lg mb-2">
                            ผลลัพธ์การคำนวณ
                        </h2>
                        <p className="text-base text-gray-300">
                            ปีนักษัตร: <span className="text-secondary-gold font-bold">{zodiacSign}</span>
                        </p>
                        <p className="text-xl font-bold mb-4">
                            <span className="text-secondary-gold">เศษที่ได้: {result.remainder}</span>
                        </p>
                        <p className="text-base text-gray-300 whitespace-pre-line">
                            {result.verse}
                        </p>
                        <button
                            onClick={handleReset}
                            className="w-full py-2 px-6 border border-secondary-gold rounded-md shadow-sm text-sm font-medium text-secondary-gold bg-transparent hover:bg-secondary-gold hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-gold"
                        >
                            ย้อนกลับ
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleCalculate} className="space-y-4 w-full">
                        <div>
                            <label htmlFor="birthYear" className="block text-sm font-medium text-white/70">
                                ปีเกิด (พ.ศ.)
                            </label>
                            <input
                                type="number"
                                id="birthYear"
                                value={birthYear}
                                onChange={(e) => setBirthYear(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-secondary-gold/30 shadow-sm bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-secondary-gold/80 focus:border-secondary-gold/80"
                                placeholder="เช่น 2540"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="birthMonth" className="block text-sm font-medium text-white/70">
                                เดือนเกิด (เดือนไทย 1-12)
                            </label>
                            <input
                                type="number"
                                id="birthMonth"
                                value={birthMonth}
                                onChange={(e) => setBirthMonth(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-secondary-gold/30 shadow-sm bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-secondary-gold/80 focus:border-secondary-gold/80"
                                min="1"
                                max="12"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="birthDayOfWeek" className="block text-sm font-medium text-white/70">
                                วันเกิด
                            </label>
                            <select
                                id="birthDayOfWeek"
                                value={birthDayOfWeek}
                                onChange={(e) => setBirthDayOfWeek(e.target.value)}
                                className="mt-1 block w-full rounded-md border border-secondary-gold/30 shadow-sm bg-white/5 text-white focus:outline-none focus:ring-1 focus:ring-secondary-gold/80 focus:border-secondary-gold/80"
                                required
                            >
                                <option value="" disabled hidden>เลือกวันในสัปดาห์</option>
                                {Object.keys(dayMapping).map((day, index) => (
                                    <option key={index} value={day} className="bg-gray-800 text-white">
                                        {day}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-6 border border-secondary-gold rounded-md shadow-sm text-sm font-medium text-secondary-gold bg-transparent hover:bg-secondary-gold hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-gold"
                        >
                            คำนวณเศษ
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default PrajomklawComponent;
