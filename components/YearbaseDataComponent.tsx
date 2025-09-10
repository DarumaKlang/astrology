// src/components/YearbaseDataComponent.tsx

import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';
import { yearbaseData } from '@/data/yearbaseData'; // นำเข้าข้อมูลจาก daybaseData.ts

// กำหนด Interface สำหรับข้อมูล
interface YearbaseDataItem {
    house: string;
    thai_name: string;
    description: string;
    base: number; // เพิ่ม base เข้ามา
}

export default function YearbaseDataComponent() {
    return (
        <ThemedSection title="ภพในฐานที่ 3">
            {yearbaseData.map((item: YearbaseDataItem, index: number) => (
                <ThemedCard key={index}>
                    <h3 className="text-2xl font-semibold mb-2">{item.thai_name} ({item.house})</h3>
                    <p className="text-gray-300 mt-1">{item.description}</p>
                </ThemedCard>
            ))}
        </ThemedSection>
    );
}