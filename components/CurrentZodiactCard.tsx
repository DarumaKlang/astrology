'use client';

import React from 'react';
import { DateTime } from 'luxon';
import { findCurrentZodiac } from '@/data/zodiacData';

const CurrentZodiactCard: React.FC = () => {
    const currentZodiac = findCurrentZodiac();

    if (!currentZodiac) {
        return <div className="text-white">ไม่พบข้อมูลราศี</div>;
    }

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center justify-center max-w-sm mx-auto my-8">
            <h2 className="text-2xl font-bold text-secondary-gold mb-4 text-left">
                ข้อมูลประจำราศี
            </h2>
            <div className="flex flex-col space-y-2 w-full text-left">
                <p className="text-md font-bold text-secondary-gold">{currentZodiac.name}</p>
                <p className="text-md font-bold">ช่วงเวลา: <span className="text-md font-light text-secondary-gold">{currentZodiac.start[1]} {DateTime.fromObject({ month: currentZodiac.start[0] }).toFormat('LLL', { locale: 'th' })} - {currentZodiac.end[1]} {DateTime.fromObject({ month: currentZodiac.end[0] }).toFormat('LLL', { locale: 'th' })}</span></p>
                <p className="text-md font-bold">ธาตุ: <span className="text-md font-light text-secondary-gold">{currentZodiac.element}</span></p>
                <p className="text-md font-bold">ดาวเกษตร: <span className="text-md font-light text-secondary-gold">{currentZodiac.ruler} ({currentZodiac.rulerNumber})</span></p>

                {/* ส่วนลักษณะเด่น */}
                <div className="bg-white/10 p-4 rounded-md mt-4 border border-secondary-gold/30 text-center">
                    <p className="text-md font-bold text-secondary-gold">ลักษณะเด่น</p>
                    <p className="text-sm font-light text-white mt-2">{currentZodiac.feature}</p>
                </div>

                {/* สภาพแวดล้อม */}
                <div className="bg-white/10 p-4 rounded-md mt-4 border border-secondary-gold/30 text-center">
                    <p className="text-md font-bold text-secondary-gold">สภาพแวดล้อมที่เหมาะสม</p>
                    <p className="text-sm font-light text-white mt-2">{currentZodiac.environment}</p>
                </div>

            </div>
        </div>
    );
};

export default CurrentZodiactCard;