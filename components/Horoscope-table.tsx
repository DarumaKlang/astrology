// src/components/horoscope-table.tsx

import React from 'react';

// ฟังก์ชันสำหรับแปลงตัวเลขอารบิกเป็นเลขไทย
const toThaiNumber = (num: number): string => {
    const thaiNumerals = ['๐', '๑', '๒', '๓', '๔', '๕', '๖', '๗', '๘', '๙'];
    return num.toString().split('').map(digit => thaiNumerals[parseInt(digit, 10)]).join('');
};

// กำหนด type สำหรับ props ที่ component จะรับเข้ามา
interface HoroscopeTableProps {
    row1: number[];
    row2: number[];
    row3: number[];
}

const tableHeaders = [
    ['อัตตะ', 'หินะ', 'ธะนัง', 'ปิตา', 'มาตา', 'โภคา', 'มัชฌิมา'],
    ['ตนุ', 'กดุมภะ', 'สหัชชะ', 'พันธุ', 'ปุตตะ', 'อริ', 'ปัตนิ'],
    ['มรณะ', 'ศุภภะ', 'กำมะ', 'ลาภะ', 'พญาจะ', 'ทาสี', 'ทาสา']
];

const staticValues = [
    [],
    [3, 6, 4, 2, 1, 4, 6],
    [3, 5, 7, 7, 5, 7, 7]
];

export function HoroscopeTable({ row1, row2, row3 }: HoroscopeTableProps) {
    const cellClasses = "px-2 py-2 border border-gray-200 dark:border-gray-600 font-medium text-center first:border-l first:border-t";

    return (
        <div className="overflow-x-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <table className="w-full table-fixed text-xs lg:text-sm text-gray-500 dark:text-gray-400 border-collapse">
                <tbody>
                    {/* แถวชื่อเรือนชุดแรก */}
                    <tr className="bg-white dark:bg-gray-800">
                        {tableHeaders[0].map((header, index) => (
                            <td
                                key={index}
                                className={`${cellClasses} text-gray-400 dark:text-gray-500`}
                            >
                                {header}
                            </td>
                        ))}
                    </tr>
                    {/* แถวแสดงผลลัพธ์จากการคำนวณ (N/A) */}
                    <tr className="bg-white dark:bg-gray-800">
                        {row1.map((value, index) => (
                            <td
                                key={index}
                                className={`${cellClasses} font-bold text-base lg:text-xl text-gray-900 dark:text-white`}
                            >
                                {toThaiNumber(value)}
                            </td>
                        ))}
                    </tr>
                    {/* แถวชื่อเรือนชุดที่ 2 */}
                    <tr className="bg-white dark:bg-gray-800">
                        {tableHeaders[1].map((header, index) => (
                            <td
                                key={index}
                                className={`${cellClasses} text-gray-400 dark:text-gray-500`}
                            >
                                {header}
                            </td>
                        ))}
                    </tr>
                    {/* แถวตัวเลขคงที่ชุดที่ 2 */}
                    <tr className="bg-white dark:bg-gray-800">
                        {row2.map((value, index) => (
                            <td
                                key={index}
                                className={`${cellClasses} font-bold text-base lg:text-xl text-gray-900 dark:text-white`}
                            >
                                {toThaiNumber(value)}
                            </td>
                        ))}
                    </tr>
                    {/* แถวชื่อเรือนชุดที่ 3 */}
                    <tr className="bg-white dark:bg-gray-800">
                        {tableHeaders[2].map((header, index) => (
                            <td
                                key={index}
                                className={`${cellClasses} text-gray-400 dark:text-gray-500`}
                            >
                                {header}
                            </td>
                        ))}
                    </tr>
                    {/* แถวตัวเลขคงที่ชุดที่ 3 */}
                    <tr className="bg-white dark:bg-gray-800">
                        {row3.map((value, index) => (
                            <td
                                key={index}
                                className={`${cellClasses} font-bold text-base lg:text-xl text-gray-900 dark:text-white`}
                            >
                                {toThaiNumber(value)}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}