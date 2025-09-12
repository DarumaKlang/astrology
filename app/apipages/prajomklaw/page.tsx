"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PrajomklawComponent from '@/components/PrajomklawComponent';

const PrajomklawPage: React.FC = () => {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <div className="relative z-10 flex flex-col items-center min-h-[calc(100vh-100px)] text-white p-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col w-full max-w-2xl mt-12">
                    <article className="prose prose-lg mx-auto text-gray-800">
                        <h1 className="text-3xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400">
                            คำทำนายเศษพระจอมเกล้า
                        </h1>
                        <p className="text-lg md:text-xl text-center mb-8 text-gray-400">
                            หลักการพยากรณ์ที่สืบทอดจากพระปรีชาสามารถของพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว
                        </p>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                **เศษพระจอมเกล้า** เป็นแขนงหนึ่งของวิชาโหราศาสตร์ไทย ซึ่งพระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัวทรงคิดขึ้น
                                และนักโหราศาสตร์ได้ใช้ในการพยากรณ์เรื่อยมาจนถึงปัจจุบันเพราะมีความแม่นยำและเป็นที่ยอมรับของผู้รับการพยากรณ์
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg shadow-inner mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-blue-700">หลักการคำนวณ</h2>
                            <p className="text-gray-700 leading-relaxed">
                                รวมฐานวัน ฐานเดือน ฐานปีเข้าด้วยกันได้เท่าไหร่เอา 10 หารได้เศษเท่าไหร่ให้เก็บไว้
                                เช่น เกิดวันศุกร์ เดือนยี่ ปีมะเมีย จะได้ = 6 (วันศุกร์) + 2 (เดือนยี่) + 7 (ปีมะเมีย) = 15
                                หารด้วย 10 จะได้ 15/10 เหลือเศษเท่ากับห้า เปรียบเทียบกับคำพยากรณ์ได้ดังนี้
                            </p>
                        </div>
                    </article>
                    <div className="my-8">
                        <PrajomklawComponent />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PrajomklawPage;
