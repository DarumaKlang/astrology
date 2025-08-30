'use client';

import React, { useEffect, useState } from 'react';
import { getPlanetaryData, getObserverAndDateTime } from '@/lib/astroCalculations';
import { DateTime } from 'luxon';

interface PlanetaryData {
    name: string;
    eclipticLongitude: number;
    eclipticLatitude: number;
}

const AstroDataDisplay: React.FC = () => {
    const [data, setData] = useState<PlanetaryData[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentDateTime, setCurrentDateTime] = useState<string>('');

    useEffect(() => {
        // Current location is Bangkok, Bangkok, Thailand.
        const latitude = 13.7563; // Bangkok latitude
        const longitude = 100.5018; // Bangkok longitude

        try {
            const { observer, jd, dt } = getObserverAndDateTime(latitude, longitude);
            const planetaryData = getPlanetaryData(observer, jd);
            setData(planetaryData);

            // จัดรูปแบบการแสดงผลวันที่และเวลา
            setCurrentDateTime(dt.toFormat("d MMMM yyyy เวลา HH:mm'น.'"));
        } catch (error) {
            console.error("Failed to calculate astronomical data:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white text-center max-w-sm mx-auto my-8">
                <p className="text-lg text-gray-400">Loading astronomical data...</p>
            </div>
        );
    }

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center justify-center max-w-2xl mx-auto my-8">
            <div className="text-center w-full">
                {/* หัวข้อและวันที่ */}
                <p className="text-4xl mb-2 drop-shadow-lg" style={{ color: '#ffffff' }}>
                    Planetary Positions
                </p>
                <div className="bg-gray-700 p-4 rounded-md mt-4 mb-4">
                    <p className="text-xl font-bold" style={{ color: '#ffffff' }}>
                        ข้อมูล ณ วันที่:
                    </p>
                    <p className="text-lg mt-1" style={{ color: '#ffffff' }}>{currentDateTime}</p>
                </div>

                {/* ตารางแสดงข้อมูล */}
                <div className="overflow-x-auto mt-6">
                    <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-600">
                                <th className="py-3 px-4 text-left font-semibold text-gray-900">Planet</th>
                                <th className="py-3 px-4 text-left font-semibold text-gray-900">Ecliptic Longitude</th>
                                <th className="py-3 px-4 text-left font-semibold text-gray-900">Ecliptic Latitude</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className="border-b border-gray-600 hover:bg-gray-600 transition-colors duration-200">
                                    <td className="py-3 px-4 text-xs font-medium" style={{ color: '#ffffff' }}>{item.name}</td>
                                    <td className="py-3 px-4 text-xs" style={{ color: '#ffffff' }}>{item.eclipticLongitude.toFixed(4)}</td>
                                    <td className="py-3 px-4 text-xs" style={{ color: '#ffffff' }}>{item.eclipticLatitude.toFixed(4)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AstroDataDisplay;