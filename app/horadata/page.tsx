// app/horodata/page.tsx
import Navbar from '@/components/Navbar';
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
import MahasattaTable from '@/components/MahasattaTable';
import ThemedCardList from '@/components/ThemedCardList';
import TaksaSundayComponent from '@/components/TaksaSundayComponent';

export default function HomePage() {
    return (
        <main className="container mx-auto relative min-h-screen">
            <Navbar />
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <div className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">
                    <h1 className="text-4xl font-bold mb-4">ฐานข้อมูลโหราศาสตร์ไทย</h1>
                    <p className="text-lg text-gray-600">ข้อมูลโหราศาสตร์ไทยตามตำราต่างๆ</p>
                </div>
                {/* ส่วนข้อมูลทักษา */}
                <h2 className="text-3xl font-bold mb-8 text-center">ข้อมูลวิชา มหาทักษา</h2>
                <ThemedCardList />
                <TaksaSundayComponent />
                

                {/* ส่วนข้อมูลเลข 7 ตัว 9 ฐาน */}
                <h2 className="text-3xl font-bold mb-8 text-center">ข้อมูลวิชา ๗ ตัว ๙ ฐาน</h2>
                <MahasattaTable />
                <DayBaseDataComponent />
                <MonthBaseDataComponent />
                <YearbaseDataComponent />
                <SquareBaseMeaningComponent data={squareBaseMeanings} />
                <EightbaseDataComponent />
                <NinebaseDataComponent />

                {/* ส่วนข้อมูลจักราศี */}
                <h2 className="text-3xl font-bold mb-8 text-center">ข้อมูลวิชา จักราศี</h2>
                {/* ส่งข้อมูลวัน (day) ให้กับ Component ที่แสดงวัน (DayBaseDataComponent) */}
                <DayDataComponent data={horoscopeData.day} />
                {/* ส่งข้อมูลราศี (zodiac) ให้กับ Component ที่แสดงราศี (ZodiacDataComponent) */}
                <ZodiacDataComponent data={horoscopeData.zodiac} />
                <HomeDataComponent data={horoscopeData.home} />
                {/* ส่งข้อมูลปีนักษัตร (zodiacSigns) ให้กับ Component ที่แสดงปีนักษัตร (ZodiacSignsDataComponent) */}
                <ZodiacSignsDataComponent data={horoscopeData.zodiacSigns} />

            </div>
        </main>
    );
}