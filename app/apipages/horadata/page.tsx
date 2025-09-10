// app/apipages/horodata/page.tsx
import React from "react";
import { horoscopeData } from "@/data/horoscopeData";
import DayDataComponent from "@/components/DayDataComponent";
import ZodiacDataComponent from "@/components/ZodiacDataComponent";
import ZodiacSignsDataComponent from "@/components/ZodiacSignsDataComponent";
import HomeDataComponent from "@/components/HomeDataComponent";
import SquareBaseMeaningComponent from "@/components/SquareBaseMeaningComponent";
import { squareBaseMeanings } from "@/data/squarebaseData";
import DayBaseDataComponent from '@/components/DayBaseDataComponent';
import MonthBaseDataComponent from "@/components/MonthBaseDataComponent";
import YearbaseDataComponent from '@/components/YearbaseDataComponent';
import EightbaseDataComponent from "@/components/EightbaseDataComponent";
import NinebaseDataComponent from "@/components/NinebaseDataComponent";

export default function HomePage() {
    return (
        <main className="container mx-auto p-4">
            {/* ส่วนข้อมูลเลข 7 ตัว 9 ฐาน */}
            <DayBaseDataComponent />
            <MonthBaseDataComponent />
            <YearbaseDataComponent />
            <SquareBaseMeaningComponent data={squareBaseMeanings} />
            <EightbaseDataComponent />
            <NinebaseDataComponent />

            {/* ส่วนข้อมูลจักราศี */}
            {/* ส่งข้อมูลวัน (day) ให้กับ Component ที่แสดงวัน (DayBaseDataComponent) */}
            <DayDataComponent data={horoscopeData.day} />
            {/* ส่งข้อมูลราศี (zodiac) ให้กับ Component ที่แสดงราศี (ZodiacDataComponent) */}
            <ZodiacDataComponent data={horoscopeData.zodiac} />
            <HomeDataComponent data={horoscopeData.home} />
            {/* ส่งข้อมูลปีนักษัตร (zodiacSigns) ให้กับ Component ที่แสดงปีนักษัตร (ZodiacSignsDataComponent) */}
            <ZodiacSignsDataComponent data={horoscopeData.zodiacSigns} />
        </main>
    );
}