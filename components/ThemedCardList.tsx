// src/components/ThemedCardList.tsx
import React from 'react';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';
import { mahataksaData } from '../data/mahataksaData';
// นำเข้าคอมโพเนนต์ใหม่ที่สร้างขึ้นมา
import TaksaPakornComponent from './TaksaPakornComponent';
import DailyColorComponent from './DailyColorComponent';
import TaksaElementsComponent from './TaksaElementsComponent';
import ChaiyapumeTaksaComponent from './ChaiyapumeTaksaComponent';
import TaksaPowerComponent from './TaksaPowerComponent';

const ThemedCardList: React.FC = () => {
    // กำหนดตำแหน่งของตัวเลขในตาราง 3x3 สำหรับแต่ละวัน พร้อม taksa
    const gridItems = (numbers: number[], taksa: string[]) => [
        { num: numbers[0], taksa: taksa[0] }, { num: numbers[1], taksa: taksa[1] }, { num: numbers[2], taksa: taksa[2] },
        { num: numbers[5], taksa: taksa[5] }, { num: null, taksa: null }, { num: numbers[3], taksa: taksa[3] },
        { num: numbers[7], taksa: taksa[7] }, { num: numbers[4], taksa: taksa[4] }, { num: numbers[6], taksa: taksa[6] },
    ];

    const thaiNumerals = ["๐", "๑", "๒", "๓", "๔", "๖", "๘", "๕", "๗", "๙"];
    const toThaiNumerals = (num: number) => num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');

    return (
        <>
            {/* ส่วนแสดงตารางมหาทักษาหลัก */}
            <ThemedSection title="ตารางมหาทักษา" gridColsClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {mahataksaData.map((data, index) => (
                    <ThemedCard key={index} className="flex flex-col items-center justify-center p-4">
                        <h3 className="text-xl font-semibold mb-4 text-secondary-gold">
                            วัน{data.day}
                        </h3>
                        <div className="grid grid-cols-3 gap-0 w-full max-w-xs overflow-hidden rounded-md">
                            {gridItems(data.numbers, data.taksa).map((item, itemIndex) => (
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
                ))}

                {/* ส่วนแสดงคอมโพเนนต์ข้อมูลอื่นๆ */}
                <DailyColorComponent />
                <TaksaElementsComponent />
                <ChaiyapumeTaksaComponent />
                <TaksaPakornComponent />
                <TaksaPowerComponent />

            </ThemedSection>
        </>
    );
};

export default ThemedCardList;