import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary-purple': '#4B0082', // ม่วงเข้ม
                'secondary-gold': '#FFD700', // สีทอง
                'warm-tone': '#C08127', // สีโทนอบอุ่น
                'text-light': '#F5F5DC', // สีขาวนวล
            },
        },
    },
    plugins: [],
};

export default config;