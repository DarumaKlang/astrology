// app/apipages/horodata/page.tsx
import React from "react";
import { horoscopeData } from "@/data/horoscopeData";
import DayDataComponent from "@/components/DayDataComponent";
import ZodiacDataComponent from "@/components/ZodiacDataComponent";
import ZodiacSignsDataComponent from "@/components/ZodiacSignsDataComponent";
import HomeDataComponent from "@/components/HomeDataComponent";
import SquareBaseMeaningComponent from "@/components/SquareBaseMeaningComponent";
import { squareBaseMeanings } from "@/data/squarebaseData"; // สังเกตว่าผมเปลี่ยน path เป็น "@/data/squarebaseData" ตามที่คุณระบุ

export default function HomePage() {
    return (
        <main className="relative min-h-screen bg-gray-900 text-gray-100"> {/* ปรับพื้นหลังและสีข้อความหลัก */}
            <div className="relative z-10 p-8 max-w-7xl mx-auto"> {/* div นี้จะครอบ content ทั้งหมด */}
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center"> {/* ปรับ h1 ให้เหมือน YamaAthaganPage */}
                    ข้อมูลโหราศาสตร์ไทย
                </h1>
                <SquareBaseMeaningComponent data={squareBaseMeanings} />
                <HomeDataComponent data={horoscopeData.home} />
                <DayDataComponent data={horoscopeData.day} />
                <ZodiacSignsDataComponent data={horoscopeData.zodiacSigns} />
                <ZodiacDataComponent data={horoscopeData.zodiac} />
            </div>
        </main>
    );
}