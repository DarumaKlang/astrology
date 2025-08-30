// app/yamathagran/page.tsx
'use client';

import Navbar from '@/components/Navbar';
import YamaAthaganClock from '@/components/YamaAthaganClock';

export default function YamaAthaganPage() {
    return (
        <main className="relative min-h-screen bg-gray-900">
            <Navbar />
            <div className="relative z-10 p-8 text-white max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg">
                    นาฬิกายามอัฐกาล
                </h1>
                <YamaAthaganClock />
            </div>
        </main>
    );
}