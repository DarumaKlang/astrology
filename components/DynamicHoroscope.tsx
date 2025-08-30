"use client";

import React, { useState, useEffect } from "react";
import HoroscopeCard from "./HoroscopeCard";

const DynamicHoroscope: React.FC = () => {
    const [horoscope, setHoroscope] = useState<{ planet: string; house: string }[]>([]);

    useEffect(() => {
        const fetchHoroscope = async () => {
            try {
                const response = await fetch("/api/horoscope?date=2025-08-30T10:40");
                const data = await response.json();
                console.log("Fetched horoscope data:", data);  // Log ข้อมูลที่ได้รับจาก API

                // ตรวจสอบข้อมูลก่อนตั้งค่า state
                if (Array.isArray(data.data) && data.data.length > 0) {
                    setHoroscope(data.data);
                } else {
                    console.error("Invalid horoscope data from API:", data);
                }
            } catch (error) {
                console.error("Error fetching horoscope data:", error);
            }
        };

        fetchHoroscope();
    }, []);

    return (
        <div>
            <h1>Horoscope for 2025-08-30</h1>
            <HoroscopeCard horoscope={horoscope} />
        </div>
    );
};

export default DynamicHoroscope;
