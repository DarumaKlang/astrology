// src/components/MonthBaseDataComponent.tsx

import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';
import { monthbaseData } from '@/data/monthbaseData'; // นำเข้าข้อมูลจาก daybaseData.ts

// กำหนด Interface สำหรับข้อมูล
interface MonthbaseDataItem {
    house: string;
    thai_name: string;
    description: string;
    base: number; // เพิ่ม base เข้ามา
}

export default function MonthBaseDataComponent() {
    return (
        <ThemedSection title="ภพในฐานที่ 2">
            {monthbaseData.map((item: MonthbaseDataItem, index: number) => (
                <ThemedCard key={index}>
                    <h3 className="text-2xl font-semibold mb-2">{item.thai_name} ({item.house})</h3>
                    <p className="text-gray-300 mt-1">{item.description}</p>
                </ThemedCard>
            ))}
        </ThemedSection>
    );
}