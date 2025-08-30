// src/components/Card3x3.tsx
import React from 'react';

// กำหนด props ที่ Card3x3 จะได้รับ ซึ่งเป็น Array ของตัวเลข
interface Card3x3Props {
    // numbers: (string | number)[]; // ไม่ต้องรับ prop นี้แล้ว
}

const Card3x3: React.FC<Card3x3Props> = () => {
    // กำหนดตัวเลขคงที่และแปลงเป็นเลขไทย
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const thaiNumerals = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
    const thaiNumbers = numbers.map(num => num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join(''));
    
    // กำหนดตำแหน่งของตัวเลขในตาราง 3x3 โดยช่องว่างจะถูกเว้นไว้
    // numbers[0] -> ช่อง 1, numbers[1] -> ช่อง 2, ...
    const gridItems = [
        thaiNumbers[0], thaiNumbers[1], thaiNumbers[2],
        thaiNumbers[5], ' ', thaiNumbers[3],
        thaiNumbers[7], thaiNumbers[4], thaiNumbers[6],
    ];

    return (
        // div นี้เป็นกรอบ Card โดยมีเส้นขอบภายนอกที่ชัดเจน
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-xl border border-secondary-gold/30 flex justify-center items-center max-w-sm mx-auto my-8">
            <div className="grid grid-cols-3 gap-0 w-full max-w-xs overflow-hidden rounded-md">
                {gridItems.map((item, index) => (
                    <div
                        key={index}
                        // เพิ่ม border เฉพาะด้านขวาและด้านล่างเพื่อสร้างเส้นแบ่งภายใน
                        // ยกเว้นแถวสุดท้ายและคอลัมน์สุดท้ายเพื่อไม่ให้มีขอบนอก
                        className={`
                            bg-primary-purple bg-opacity-70 text-secondary-gold font-bold p-4 w-full h-16 
                            flex items-center justify-center text-3xl
                            ${(index + 1) % 3 !== 0 ? 'border-r border-secondary-gold/50' : ''}
                            ${index < 6 ? 'border-b border-secondary-gold/50' : ''}
                            transition-transform duration-200 ease-in-out
                        `}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card3x3;