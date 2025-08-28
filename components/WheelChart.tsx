// components/WheelChart.tsx
"use client";

import { Chart } from "@/lib/astrology";

interface Props {
    chart: Chart;
}

export default function WheelChart({ chart }: Props) {
    const viewBoxSize = 400;
    const r = viewBoxSize / 2;
    const cx = r;
    const cy = r;

    const planetColors: Record<string, string> = {
        "อาทิตย์": "orange",
        "จันทร์": "silver",
        "พุธ": "green",
        "ศุกร์": "pink",
        "อังคาร": "red",
        "พฤหัส": "gold",
        "เสาร์": "brown",
        "ยูเรนัส": "cyan",
        "เนปจูน": "blue",
        "พลูโต": "purple",
    };

    const polarToXY = (deg: number, radius: number) => {
        const rad = (deg - 90) * (Math.PI / 180);
        return {
            x: cx + radius * Math.cos(rad),
            y: cy + radius * Math.sin(rad),
        };
    };

    return (
        <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} className="w-full max-w-sm mx-auto block">
            {/* วงกลมหลัก */}
            <circle cx={cx} cy={cy} r={r - 2} fill="white" stroke="black" />

            {/* แบ่ง 12 ราศี */}
            {Array.from({ length: 12 }).map((_, i) => {
                const deg = i * 30;
                const { x, y } = polarToXY(deg, r);
                return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#888" />;
            })}

            {/* วางดาวเคราะห์ */}
            {Object.entries(chart.planets).map(([name, deg]) => {
                const { x, y } = polarToXY(deg, r * 0.8);
                return (
                    <g key={name}>
                        <circle cx={x} cy={y} r={6} fill={planetColors[name] || "black"} />
                        <text
                            x={x + 8}
                            y={y + 4}
                            fontSize={12}
                            textAnchor="start"
                            fill="black"
                        >
                            {name}
                        </text>
                    </g>
                );
            })}

            {/* Ascendant (ลัคนา) */}
            {(() => {
                const { x, y } = polarToXY(chart.ascendant, r);
                return (
                    <line
                        x1={cx}
                        y1={cy}
                        x2={x}
                        y2={y}
                        stroke="red"
                        strokeWidth={2}
                    />
                );
            })()}
        </svg>
    );
}