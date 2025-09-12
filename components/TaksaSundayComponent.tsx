// src/components/TaksaSundayComponent.tsx
import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';
import { mahataksaData } from '../data/mahataksaData';

const TaksaSundayComponent: React.FC = () => {
    // กรองเอาข้อมูลเฉพาะของ 'อาทิตย์' เท่านั้น
    const sundayData = mahataksaData.find(item => item.day === 'อาทิตย์');

    if (!sundayData) {
        return <p className="text-white text-center">ไม่พบข้อมูลสำหรับวันอาทิตย์</p>;
    }

    const gridItems = (numbers: number[], taksa: string[]) => [
        { num: numbers[0], taksa: taksa[0] }, { num: numbers[1], taksa: taksa[1] }, { num: numbers[2], taksa: taksa[2] },
        { num: numbers[7], taksa: taksa[7] }, { num: null, taksa: null }, { num: numbers[3], taksa: taksa[3] },
        { num: numbers[6], taksa: taksa[6] }, { num: numbers[5], taksa: taksa[5] }, { num: numbers[4], taksa: taksa[4] },
    ];

    const thaiNumerals = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
    const toThaiNumerals = (num: number) => num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');

    return (
        <ThemedSection title="ดวงมหาทักษาประจำวันอาทิตย์" gridColsClassName="grid-cols-1">
            <ThemedCard className="flex flex-col items-center justify-center p-4">
                <h3 className="text-xl font-semibold mb-4 text-secondary-gold">
                    วัน{sundayData.day}
                </h3>
                <div className="grid grid-cols-3 gap-0 w-full max-w-xs overflow-hidden rounded-md">
                    {gridItems(sundayData.numbers, sundayData.taksa).map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className={`
                                bg-primary-purple bg-opacity-70 text-secondary-gold font-bold p-4 w-full h-16 
                                flex flex-col items-center justify-center text-3xl
                                ${(itemIndex + 1) % 3 !== 0 ? 'border-r border-secondary-gold/50' : ''}
                                ${itemIndex < 6 ? 'border-b border-secondary-gold/50' : ''}
                                transition-transform duration-200 ease-in-out
                            `}
                        >
                            {item.num !== null ? (
                                <>
                                    <div className={`text-2xl ${item.taksa === 'บริวาร' ? 'text-red-500' : 'text-secondary-gold'}`}>
                                        {toThaiNumerals(item.num)}
                                    </div>
                                    <div className="text-sm font-normal mt-1 text-gray-400">{item.taksa}</div>
                                </>
                            ) : (
                                ''
                            )}
                        </div>
                    ))}
                </div>
            </ThemedCard>
        </ThemedSection>
    );
};

export default TaksaSundayComponent;