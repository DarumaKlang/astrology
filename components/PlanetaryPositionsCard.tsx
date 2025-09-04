'use client';

import React from 'react';

// ตัวอย่างข้อมูลตำแหน่งดาวเคราะห์
// คุณสามารถเชื่อมต่อกับ API หรือโค้ดคำนวณจริงในภายหลังได้
const planetaryData = [
    { planet: 'Sun', longitude: '272.2792', latitude: '117.9983' },
    { planet: 'Moon', longitude: '54.0847', latitude: '66.0835' },
    { planet: 'Mercury', longitude: '233.6006', latitude: '32.3640' },
    { planet: 'Venus', longitude: '333.2811', latitude: '114.6128' },
    { planet: 'Mars', longitude: '280.8316', latitude: '95.2853' },
];

const PlanetaryPositionsCard: React.FC = () => {
    // วันที่และเวลาปัจจุบัน (ในอนาคตสามารถรับ props เข้ามาได้)
    const currentDate = new Date().toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' });
    const currentTime = new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="w-full max-w-xl p-8 bg-white/10 backdrop-blur-md rounded-lg shadow-xl border border-secondary-gold/30">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
                Planetary Positions
            </h2>
            <div className="text-white/80 text-center mb-6">
                <p className="font-semibold">ข้อมูล ณ วันที่:</p>
                <p>{currentDate} เวลา {currentTime}น.</p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left table-auto border-collapse">
                    <thead>
                        <tr className="bg-white/10">
                            <th className="px-4 py-2 border border-secondary-gold/30 font-bold text-secondary-gold">Planet</th>
                            <th className="px-4 py-2 border border-secondary-gold/30 font-bold text-secondary-gold">Ecliptic Longitude</th>
                            <th className="px-4 py-2 border border-secondary-gold/30 font-bold text-secondary-gold">Ecliptic Latitude</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planetaryData.map((data, index) => (
                            <tr key={index} className="hover:bg-white/10 transition-colors duration-200">
                                <td className="px-4 py-2 border border-white/10">{data.planet}</td>
                                <td className="px-4 py-2 border border-white/10">{data.longitude}</td>
                                <td className="px-4 py-2 border border-white/10">{data.latitude}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PlanetaryPositionsCard;