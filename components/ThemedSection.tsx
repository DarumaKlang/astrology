// components/ThemedSection.tsx
import React from 'react';

interface ThemedSectionProps {
    title: string;
    children: React.ReactNode;
    className?: string;
    // เพิ่ม prop สำหรับคอลัมน์ grid ถ้าต้องการให้ยืดหยุ่นกว่า default (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
    gridColsClassName?: string;
}

export default function ThemedSection({ title, children, className, gridColsClassName }: ThemedSectionProps) {
    const defaultGridCols = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    return (
        <section className={`my-12 ${className || ''}`}>
            <h2 className="text-4xl font-bold text-secondary-gold mb-8 drop-shadow-lg text-center">
                {title}
            </h2>
            <div className={`grid ${gridColsClassName || defaultGridCols} gap-6`}>
                {children}
            </div>
        </section>
    );
}