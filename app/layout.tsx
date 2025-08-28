import './globals.css';
import type { Metadata } from 'next';
import { Charm } from 'next/font/google';

const charm = Charm({
    subsets: ['thai'],
    weight: ['400', '700'],
});

export const metadata: Metadata = {
    title: 'Astrology - โหราศาสตร์และไพ่ยิปซี',
    description: 'เว็บไซต์ดูดวง โหราศาสตร์ไทย ไพ่ยิปซี และศาสตร์ตัวเลข',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="th">
            <body className={charm.className}>{children}</body>
        </html>
    );
}