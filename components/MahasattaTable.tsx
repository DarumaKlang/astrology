// src/components/MahasattaTable.tsx

import React from 'react';

// กำหนด type สำหรับข้อมูลแต่ละช่องในตาราง
interface CellData {
    title: string;
    value: number;
}

// กำหนด type สำหรับข้อมูลแต่ละแถวในตาราง
interface RowData {
    cells: CellData[];
}

// สร้าง Mapping สำหรับตัวเลขและสี
const valueToColorMap: { [key: number]: string } = {
    1: 'bg-red-300',
    2: 'bg-yellow-200',
    3: 'bg-pink-200',
    4: 'bg-green-300',
    5: 'bg-orange-400',
    6: 'bg-sky-400',
    7: 'bg-indigo-300',
};

// ฟังก์ชันสำหรับแปลงตัวเลขเป็นเลขไทย
const toThaiNumeral = (num: number): string => {
    const thaiNumerals = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
    return num.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');
};

// ข้อมูลตัวอย่างที่ใช้ในการแสดงผล โดยไม่ต้องระบุ bgColor
const tableData: RowData[] = [
    {
        cells: [
            { title: 'อัตตะ', value: 6 },
            { title: 'หินะ', value: 7 },
            { title: 'ธนัง', value: 1 },
            { title: 'ปิตา', value: 2 },
            { title: 'มาตา', value: 3 },
            { title: 'โภคา', value: 4 },
            { title: 'มัชฌิมา', value: 5 },
        ],
    },
    {
        cells: [
            { title: 'ตนุ', value: 2 },
            { title: 'กดุมภะ', value: 3 },
            { title: 'สหัชชะ', value: 4 },
            { title: 'พันธุ', value: 5 },
            { title: 'ปุตตะ', value: 6 },
            { title: 'อริ', value: 7 },
            { title: 'ปัตนิ', value: 1 },
        ],
    },
    {
        cells: [
            { title: 'มรณะ', value: 1 },
            { title: 'ศุภะ', value: 2 },
            { title: 'กัมมะ', value: 3 },
            { title: 'ลาภะ', value: 4 },
            { title: 'พยายะ', value: 5 },
            { title: 'ทาสี', value: 6 },
            { title: 'ทาสา', value: 7 },
        ],
    },
    {
        cells: [
            { title: 'อาตมะ', value: 2 },
            { title: 'ทาสา', value: 7 },
            { title: 'สิทธิโชค', value: 5 },
            { title: 'โภคทรัพย์', value: 3 },
            { title: 'มหาโจร', value: 1 },
            { title: 'มหาอุบาทว์', value: 6 },
            { title: 'มหาอุปถัมภ์', value: 4 },
        ],
    },
    {
        cells: [
            { title: 'อัตตะ', value: 5 },
            { title: 'สักกะ', value: 7 },
            { title: 'ญาติ', value: 2 },
            { title: 'ลาภัง', value: 4 },
            { title: 'เคหัง', value: 6 },
            { title: 'นาวัง', value: 1 },
            { title: 'ภริยัง', value: 3 },
        ],
    },
];

const sumData = [9, 12, 8, 11, 14, 17, 13];

const MahasattaTable: React.FC = () => {
    return (
        <div className="flex flex-col items-center font-sans bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white">
            <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">
                ตารางมหาสัตตเลข ๗ ตัว ๙ ฐาน
            </h1>
            <div className="grid grid-cols-7 gap-1 w-full max-w-4xl">
                {tableData.map((row, rowIndex) => (
                    row.cells.map((cell, cellIndex) => (
                        <div
                            key={`${rowIndex}-${cellIndex}`}
                            className={`p-2 text-center border border-gray-300 rounded-md ${valueToColorMap[cell.value]}`}
                        >
                            <div className="text-gray-600 text-sm">{cell.title}</div>
                            <div className="font-bold text-lg mt-1">{toThaiNumeral(cell.value)}</div>
                        </div>
                    ))
                ))}
            </div>
            <div className="grid grid-cols-7 gap-1 w-full max-w-4xl mt-2">
                {sumData.map((sum, index) => (
                    <div
                        key={index}
                        className={`flex items-center justify-center w-8 h-8 rounded-full text-white font-bold text-sm ${valueToColorMap[sum] || 'bg-gray-500'}`}
                    >
                        {toThaiNumeral(sum)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MahasattaTable;