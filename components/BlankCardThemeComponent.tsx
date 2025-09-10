// components/BlankCardThemeComponent.tsx

// เพิ่ม import
import React from 'react';
import ThemedSection from './ThemedSection'; // Import ThemedSection
import ThemedCard from './ThemedCard'; // Import ThemedCard

interface BlankCardProps {
    title: string;
    discriiption: string;
}

interface BlankCardThemeComponent {
    data: BlankData[];
}

export default function BlankCardThemeComponent({ data }: BlankCardProps) {
    return (
        <ThemedSection title="title (หัวข้อ)"> {/* ใช้ ThemedSection */}
            {data.map((item, index) => (
                <ThemedCard key={index}> {/* ใช้ ThemedCard */}
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 mt-1">{item.discriiption}</p>
                </ThemedCard>
            ))}
        </ThemedSection>
    );
};