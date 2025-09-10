// src/components/HomeDataComponent.tsx
import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';

interface HouseData {
    house: string;
    meaning: string;
}

interface HomeDataComponentProps {
    data: HouseData[];
}

export default function HomeDataComponent({ data }: HomeDataComponentProps) {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <ThemedSection title="ภพชะตา 12 เรือน">
            {data.map((item, index) => (
                <ThemedCard key={index}> {/* ใช้ ThemedCard */}
                    <h3 className="text-2xl font-semibold mb-2">{item.house}</h3>
                    <p className="text-gray-300 mt-1">{item.meaning}</p>
                </ThemedCard>
            ))}
        </ThemedSection>
    );
}