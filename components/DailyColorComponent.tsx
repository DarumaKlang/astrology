// src/components/DailyColorComponent.tsx
import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';
import { dailyColorData } from '../data/mahataksaData';

const DailyColorComponent: React.FC = () => {
    const gridItems = (numbers: number[], data: string[]) => [
        { num: numbers[0], text: data[0] }, { num: numbers[1], text: data[1] }, { num: numbers[2], text: data[2] },
        { num: numbers[7], text: data[7] }, { num: null, text: null }, { num: numbers[3], text: data[3] },
        { num: numbers[6], text: data[6] }, { num: numbers[5], text: data[5] }, { num: numbers[4], text: data[4] },
    ];

    const thaiNumerals = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
    const toThaiNumerals = (num: number) => num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');

    return (
        <ThemedSection title={dailyColorData.name} gridColsClassName="grid-cols-1">
            <ThemedCard className="flex flex-col items-center justify-center p-4">
                <div className="grid grid-cols-3 gap-0 w-full max-w-xs overflow-hidden rounded-md">
                    {gridItems(dailyColorData.numbers, dailyColorData.color).map((item, itemIndex) => (
                        <div
                            key={itemIndex}
                            className={`
                                bg-primary-purple bg-opacity-70 text-secondary-gold font-bold p-4 w-full h-16 
                                flex flex-col items-center justify-center text-center text-sm
                                ${(itemIndex + 1) % 3 !== 0 ? 'border-r border-secondary-gold/50' : ''}
                                ${itemIndex < 6 ? 'border-b border-secondary-gold/50' : ''}
                                transition-transform duration-200 ease-in-out
                            `}
                        >
                            {item.num !== null ? (
                                <>
                                    <div className="text-2xl">{toThaiNumerals(item.num)}</div>
                                    <div className="text-sm font-normal mt-1 text-gray-400">{item.text}</div>
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

export default DailyColorComponent;