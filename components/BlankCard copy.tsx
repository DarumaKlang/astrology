"use client";

import React from 'react';

interface BlankCardProps {
    title: string;
    content: string;
}

const BlankCard: React.FC = () => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center justify-center max-w-sm mx-auto my-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow-lg">
                    BlankCard
                </h2>

                <p className="text-6xl font-bold mb-4 drop-shadow-lg text-white">
                    Discription
                </p>

                <p className="text-lg text-gray-400">
                    กำลังคำนวณข้อมูล...
                </p>

                <div className="bg-white/20 p-4 rounded-md mt-4">

                </div>

                <div className="bg-white/20 p-4 rounded-md mt-4 flex flex-col items-start">
                    <p className="text-xl font-bold">
                        ยามที่: <span className="text-secondary-gold text-3xl">ตัวเลข</span>
                        ตัวหนังสือ
                    </p>
                    <p className="text-sm font-light mt-2">
                        เวลาที่เหลือในยามนี้
                    </p>
                    <p className="text-2xl font-bold text-secondary-gold drop-shadow-lg">
                        คำแนะนำ
                    </p>
                </div>

            </div>
        </div>
    );
};

export default BlankCard;