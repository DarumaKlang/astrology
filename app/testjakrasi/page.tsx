// app/page.tsx
"use client";

import { useState } from "react";
import { calculateChart } from "@/lib/astrology";   // ✅ ใช้ calculateChart
import ChartView from "@/components/Chart";

export default function Home() {
    // ตัวอย่างเรียกใช้งาน
    const [chart, setChart] = useState<any>(null);

    const handleSubmit = () => {
        const date = new Date("2025-01-01T12:00:00Z");
        const lat = 13.7563;  // Bangkok
        const lon = 100.5018;
        const result = calculateChart(date, lat, lon);
        setChart(result);
    };

    return (
        <div>
            <button onClick={handleSubmit}>คำนวณดวง</button>
            {chart && <ChartView chart={chart} reading={chart.reading || ""} />}
        </div>
    );
}
