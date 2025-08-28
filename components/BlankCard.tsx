import React from 'react';

interface BlankCardProps {
    title: string;
    content: string;
}

const BlankCard: React.FC<BlankCardProps> = ({ title, content }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-secondary-gold/30 text-white flex flex-col">
            <h2 className="text-2xl font-bold text-secondary-gold mb-2">{title}</h2>
            <p className="text-lg">
                {content}
            </p>
        </div>
    );
};

export default BlankCard;