// components/ZodiacSignsDataComponent.tsx
import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';

// แก้ไข interface ให้ตรงกับข้อมูลปีนักษัตรในไฟล์ zodiacSignsData.ts
interface ZodiacData {
    year: string;
    animal: string;
    character: string;
}

interface ZodiacSignsDataComponentProps {
    data: ZodiacData[];
}

export default function ZodiacSignsDataComponent({ data }: ZodiacSignsDataComponentProps) {
    return (
        <ThemedSection title="ปีนักษัตร 12 ปี">
            {data.map((item, index) => (
                <ThemedCard key={index}> {/* ใช้ ThemedCard */}
                    <h3 className="text-2xl font-semibold mb-2">ปี{item.year} ({item.animal})</h3>
                    <p className="text-gray-300">{item.character}</p>
                </ThemedCard>
            ))}
        </ThemedSection>
    );
}