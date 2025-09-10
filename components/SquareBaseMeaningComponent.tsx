// components/SquareBaseMeaningComponent.tsx

import React from 'react';
import { SquareBaseMeaning } from '@/data/squarebaseData';
import ThemedSection from './ThemedSection'; // Import ThemedSection
import ThemedCard from './ThemedCard';       // Import ThemedCard

interface SquareBaseMeaningComponentProps {
    data: SquareBaseMeaning[];
}

export default function SquareBaseMeaningComponent({ data }: SquareBaseMeaningComponentProps) {
    return (
        <ThemedSection title="ความหมายผลรวมฐานที่ 4 (ฐานจตุราสี)"> {/* ใช้ ThemedSection */}
            {data.map((item, index) => (
                <ThemedCard key={index}> {/* ใช้ ThemedCard */}
                    <h3 className="text-2xl font-bold text-secondary-gold mb-2 drop-shadow-md">
                        ผลรวม {item.sum}: {item.name} {item.emoji}
                    </h3>
                    <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                        {item.description}
                    </p>
                </ThemedCard>
            ))}
        </ThemedSection>
    );
}