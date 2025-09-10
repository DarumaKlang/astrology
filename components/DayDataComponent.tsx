// components/DayDataComponent.tsx

import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';

interface DayData {
    day: string;
    th: string;
    character: string | { day: string; night: string; };
    strengths: string;
    weaknesses: string;
}

interface DayDataComponentProps {
    data: DayData[];
}

export default function DayDataComponent({ data }: DayDataComponentProps) {
    return (
        <ThemedSection title="ลักษณะนิสัยของคนเกิดแต่ละวัน">
            {data.map((item, index) => (
                <ThemedCard key={index}>
                    <h3 className="text-2xl font-semibold text-secondary-gold mb-2 drop-shadow-md">{item.th}</h3>
                    {typeof item.character === 'string' ? (
                        <p className="text-lg text-gray-300 leading-relaxed">{item.character}</p>
                    ) : (
                        <div className="space-y-2 text-lg text-gray-300 leading-relaxed">
                            <p><strong>กลางวัน:</strong> {item.character.day}</p>
                            <p><strong>กลางคืน:</strong> {item.character.night}</p>
                        </div>
                    )}
                    <p className="text-lg text-gray-300 mt-4 leading-relaxed"><strong>จุดแข็ง:</strong> {item.strengths}</p>
                    <p className="text-lg text-gray-300 leading-relaxed"><strong>จุดอ่อน:</strong> {item.weaknesses}</p>
                </ThemedCard>
            ))}
        </ThemedSection>
    );
}