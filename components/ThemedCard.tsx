// components/ThemedCard.tsx
import React from 'react';

interface ThemedCardProps {
    children: React.ReactNode;
    className?: string;
}

export default function ThemedCard({ children, className }: ThemedCardProps) {
    return (
        <div
            className={`bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white
                 flex flex-col items-center justify-center text-center
                 hover:bg-white/15 transition-all duration-300
                 ${className || ''}`}
        >
            {children}
        </div>
    );
}