// components/ZodiacDataComponent.tsx
import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';

// แก้ไข interface ให้ตรงกับข้อมูลราศีในไฟล์ zodiacData.ts
interface ZodiacSignData {
    name: string;
    start: number[];
    end: number[];
    element: string;
    ruler: string;
    rulerNumber: string;
    feature: string;
    environment: string;
    character_details: string;
}

interface ZodiacDataComponentProps {
    data: ZodiacSignData[];
}

export default function ZodiacDataComponent({ data }: ZodiacDataComponentProps) {
    return (
        <ThemedSection title="จักรราศี (Zodiac)">

            {data.map((item, index) => (
                <ThemedCard key={index}> {/* ใช้ ThemedCard */}
                    <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-300"><strong>ธาตุ:</strong> {item.element}</p>
                    <p className="text-gray-300 mt-1"><strong>ลักษณะเด่น:</strong> {item.feature}</p>
                    <p className="text-gray-300 mt-1"><strong>บุคลิก:</strong> {item.character_details}</p>
                </ThemedCard>
            ))}

        </ThemedSection>
    );
}