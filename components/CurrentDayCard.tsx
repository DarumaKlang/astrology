'use client';

import React from 'react';
import { DateTime } from 'luxon';
import { dayOfWeekData, starPower } from '@/data/data';

import '../public/build.css';

const CurrentDayCard: React.FC = () => {
    const today = DateTime.local().setZone('Asia/Bangkok');
    const weekday = today.weekday;
    let dayIndex = weekday % 7;

    let currentDayData;
    let starSymbol = null;

    if (weekday === 3 && today.hour >= 18) {
        currentDayData = dayOfWeekData.find(item => item.day.includes('วันพุธกลางคืน'));
        const starSymbolMatch = currentDayData?.day.match(/\(.*\)/);
        starSymbol = starSymbolMatch ? starSymbolMatch[0].replace(/[\(\)]/g, '') : null;
    } else {
        currentDayData = dayOfWeekData[dayIndex];
        const starSymbolMatch = currentDayData?.day.match(/\(.*\)/);
        starSymbol = starSymbolMatch ? starSymbolMatch[0].replace(/[\(\)]/g, '') : null;
    }

    if (!currentDayData) {
        return (
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white text-center max-w-sm mx-auto my-8">
                <p className="text-lg text-gray-400">ไม่พบข้อมูลสำหรับวันนี้</p>
            </div>
        );
    }

    const displayOrder = [
        'บริวาร',
        'อายุ',
        'เดช',
        'ศรี',
        'มูละ',
        'อุตสาหะ',
        'มนตรี',
        'กาลกิณี',
    ];

    const power = starSymbol ? starPower[starSymbol as keyof typeof starPower] : 'N/A';

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center justify-center max-w-sm mx-auto my-8">
            <div className="text-center">
                <p className="text-5xl font-bold mb-4 drop-shadow-lg text-white">
                    {currentDayData.day}
                </p>
                <div className="bg-white/20 p-4 rounded-md mt-4 mb-4">
                    <p className="text-xl font-bold">
                        ธาตุประจำวัน: <span className="text-secondary-gold text-xl">{currentDayData.element}</span>
                    </p>
                </div>
                <div className="bg-white/20 p-4 rounded-md mb-4">
                    <p className="text-xl font-bold">
                        กำลังของดาว: <span className="text-secondary-gold text-xl">{power}</span>
                    </p>
                </div>
                <div className="bg-white/20 p-4 rounded-md mb-4">
                    <p className="text-xl font-bold">
                        ทิศ: <span className="text-secondary-gold text-xl">{currentDayData.direction}</span>
                    </p>
                </div>
                {/* เพิ่มส่วนแสดงผลชื่อคาถา */}
                <div className="bg-white/20 p-4 rounded-md mb-4">
                    <p className="text-xl font-bold">
                        คาถา: <span className="text-secondary-gold text-xl">{currentDayData.mantraName}</span>
                    </p>
                    <p className="text-md font-medium text-gray-300">
                        ({currentDayData.mantra})
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 bg-white/10 p-4 rounded-md">
                    {displayOrder.map((key) => {
                        const value = currentDayData.luckyColors[key as keyof typeof currentDayData.luckyColors];
                        return (
                            <div key={key} className="flex flex-col items-center text-center p-2">
                                <span
                                    className="w-10 h-10 rounded-full border-2 border-secondary-gold/50"
                                    style={{ backgroundColor: value }}
                                ></span>
                                <span className="mt-2 text-sm font-medium">{key}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CurrentDayCard;
