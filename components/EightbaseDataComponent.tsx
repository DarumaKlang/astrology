// src/components/EightbaseDataComponent.tsx

import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';
import { eightbaseData } from '@/data/eightbaseData'; // นำเข้าข้อมูลจาก eightbaseData.ts

// กำหนด Interface สำหรับข้อมูล
interface EightbaseDataItem {
    house: string;
    thai_name: string;
    description: string;
    base: number; // เพิ่ม base เข้ามา
}

export default function EightbaseDataComponent() {
    return (
        <ThemedSection title="ภพในฐานที่ 8">
            {eightbaseData.map((item: EightbaseDataItem, index: number) => (
                <ThemedCard key={index}>
                    <h3 className="text-2xl font-semibold mb-2">{item.thai_name} ({item.house})</h3>
                    <p className="text-gray-300 mt-1">{item.description}</p>
                </ThemedCard>
            ))}
        </ThemedSection>
    );
}