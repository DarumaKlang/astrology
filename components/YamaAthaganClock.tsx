'use client';

import React, { useState, useEffect } from 'react';
import { yamAthagranData, DayType, YamaType } from '../data/data';
import { getThaiAstrologyInfo } from '@/lib/thai-astrology';

// Interface สำหรับข้อมูลที่คืนค่าจาก Server Action.
interface AstrologyResult {
    html: string;
    dayOfWeekIndex: number;
    yamNumber: number;
    yamPeriod: "กลางวัน" | "กลางคืน";
}

// ฟังก์ชันสำหรับแปลงเลขอะราบิกเป็นเลขไทย
const toThaiNumerals = (num: number): string => {
    const thaiNumerals = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
    return num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');
};

const YamaAthaganClock: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    // กำหนดประเภทให้กับ state อย่างชัดเจนเพื่อแก้ปัญหา TypeScript Error
    const [astrologyData, setAstrologyData] = useState<AstrologyResult | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    // Initial mount and time update
    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Fetch astrology data from server action every minute
    useEffect(() => {
        if (!isMounted) return;

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const now = new Date();
                const result = await getThaiAstrologyInfo(now.toISOString());
                if (typeof result === 'string') {
                    console.error("Error fetching astrology data:", result);
                } else {
                    // สร้าง copy ของ object เพื่อแก้ไข html string
                    const modifiedResult = { ...result };
                    // แก้ไขข้อความ "เกิดวันที่" เป็น "วันนี้วันที่" และลบส่วนของ "เวลาเกิด" ออก
                    if (modifiedResult.html) {
                        modifiedResult.html = modifiedResult.html
                            .replace(/เกิดวันที่/g, 'วันนี้วันที่')
                            .replace(/<p><b>เวลาเกิด:<\/b>.*?<\/p>/, '');
                    }
                    setAstrologyData(modifiedResult);
                }
            } catch (error) {
                console.error("Failed to fetch astrology data:", error);
            } finally {
                setIsLoading(false);
            }
        };

        // Fetch data initially
        fetchData();

        // Set up interval to fetch data every minute
        const fetchInterval = setInterval(() => {
            fetchData();
        }, 60000);

        return () => clearInterval(fetchInterval);
    }, [isMounted]);

    // คำนวณเวลาที่เหลือในยามปัจจุบัน (ในฝั่ง client)
    const calculateRemainingTime = (date: Date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const oneYamaSeconds = 1.5 * 3600;

        const DAY_START_SECONDS = 6 * 3600;
        const DAY_END_SECONDS = 18 * 3600;

        let remainingSeconds = 0;
        if (totalSeconds >= DAY_START_SECONDS && totalSeconds < DAY_END_SECONDS) {
            const daySeconds = totalSeconds - DAY_START_SECONDS;
            remainingSeconds = oneYamaSeconds - (daySeconds % oneYamaSeconds);
        } else {
            let nightSeconds;
            if (totalSeconds >= DAY_END_SECONDS) {
                nightSeconds = totalSeconds - DAY_END_SECONDS;
            } else {
                nightSeconds = (24 * 3600 - DAY_END_SECONDS) + totalSeconds;
            }
            remainingSeconds = oneYamaSeconds - (nightSeconds % oneYamaSeconds);
        }

        const remainingMinutes = Math.floor(remainingSeconds / 60);
        const remainingSecs = Math.floor(remainingSeconds % 60);
        return `${toThaiNumerals(remainingMinutes)} นาที ${toThaiNumerals(remainingSecs)} วินาที`;
    };

    const remainingTime = calculateRemainingTime(currentTime);

    if (!isMounted) {
        return null;
    }

    const yamaInfo = astrologyData;
    // แก้ไขการเข้าถึงข้อมูลเพื่อให้ TypeScript ตรวจสอบประเภทได้
    const dayOfWeekNames = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
    const dayOfWeekName = yamaInfo?.dayOfWeekIndex != null ? dayOfWeekNames[yamaInfo.dayOfWeekIndex] as DayType : null;
    const yamaData = dayOfWeekName && yamaInfo?.yamPeriod && yamaInfo.yamNumber ?
        yamAthagranData[dayOfWeekName]?.[yamaInfo.yamPeriod]?.[yamaInfo.yamNumber - 1] :
        null;

    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col items-center justify-center max-w-sm mx-auto my-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-2 drop-shadow-lg text-amber-400">
                    นาฬิกายามอัฐกาล
                </h2>
                <p className="text-6xl font-bold mb-4 drop-shadow-lg text-white">
                    {currentTime.toLocaleTimeString('th-TH', { hour12: false })}
                </p>
                {isLoading ? (
                    <p className="text-lg text-gray-400">กำลังคำนวณข้อมูล...</p>
                ) : (
                    <>
                        {yamaInfo?.html && (
                            <div dangerouslySetInnerHTML={{ __html: yamaInfo.html }} />
                        )}
                        <div className="bg-white/20 p-4 rounded-md mt-4">
                            <p className="text-xl font-bold">
                                ยามที่: <span className="text-secondary-gold text-3xl">{toThaiNumerals(yamaInfo?.yamNumber || 0)}</span>
                                {' '}
                                {yamaInfo?.yamPeriod}
                            </p>
                            <p className="text-sm font-light mt-2">
                                เวลาที่เหลือในยามนี้
                            </p>
                            <p className="text-2xl font-bold text-secondary-gold drop-shadow-lg">
                                {remainingTime}
                            </p>
                        </div>
                        {yamaData && (
                            <div className="bg-white/10 p-4 rounded-md mt-4">
                                <h3 className="text-lg font-bold text-secondary-gold drop-shadow-lg">
                                    {yamaData.ชื่อ}
                                </h3>
                                <p className="text-sm text-gray-200 mt-2">
                                    {yamaData.คำทำนาย}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default YamaAthaganClock;
