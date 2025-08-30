import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Thai Astrology - โหราศาสตร์ไทย',
    description: 'เว็บไซต์ดูดวง โหราศาสตร์ไทย ไพ่ยิปซี และศาสตร์ตัวเลข',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="th">
            <body>{children}</body>
        </html>
    );
}