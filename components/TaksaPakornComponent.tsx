// src/components/TaksaPakornComponent.tsx
import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';
import { taksaPakornData } from '../data/mahataksaData';

const TaksaPakornComponent: React.FC = () => {
    // กำหนดตำแหน่งของข้อมูลในตาราง 3x3
    const gridItems = (animalname: string[], symbol: string[]) => [
        { name: animalname[0], sym: symbol[0] }, { name: animalname[1], sym: symbol[1] }, { name: animalname[2], sym: symbol[2] },
        { name: animalname[7], sym: symbol[7] }, { name: null, sym: null }, { name: animalname[3], sym: symbol[3] },
        { name: animalname[6], sym: symbol[6] }, { name: animalname[5], sym: symbol[5] }, { name: animalname[4], sym: symbol[4] },
    ];

    return (
        <ThemedSection title={taksaPakornData.name} gridColsClassName="grid-cols-1">
            <ThemedCard className="flex flex-col items-center justify-center p-4">
                <div className="grid grid-cols-3 gap-0 w-full max-w-xs overflow-hidden rounded-md">
                    {gridItems(taksaPakornData.animalname, taksaPakornData.symbol).map((item, itemIndex) => (
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
                            {item.name !== null ? (
                                <>
                                    <div className="text-xs font-normal text-secondary-gold">{item.name}</div>
                                    <div className="text-[0.65rem] font-normal mt-1 text-gray-400">{item.sym}</div>
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

export default TaksaPakornComponent;