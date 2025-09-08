// app/horoscope7num/page.tsx

import { HoroscopeTable } from '@/components/Horoscope-table';

export default function HomePage() {
    // สมมติว่านี่คือค่าที่ได้จากการคำนวณ
    const calculatedRow1 = [1, 2, 3, 4, 5, 6, 7];
    const calculatedRow2 = [1, 2, 3, 4, 5, 6, 7];
    const calculatedRow3 = [1, 2, 3, 4, 5, 6, 7];

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold mb-8">ตารางโหราศาสตร์</h1>
            <HoroscopeTable
                row1={calculatedRow1}
                row2={calculatedRow2}
                row3={calculatedRow3}
            />
        </main>
    );
}