import WheelChart from "@/components/WheelChart";
import { Chart } from "@/lib/astrology";

export default function ChartView({ chart, reading }: { chart: Chart; reading: string }) {
    return (
        <div className="p-4 bg-white text-gray-600 rounded-2xl shadow space-y-4">
            <h2 className="text-xl font-bold">ผลการคำนวณดวง</h2>
            <p>{reading}</p>

            <WheelChart chart={chart} />

            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-1">ดาว</th>
                        <th className="border p-1">องศา</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(chart.planets).map(([name, lon]) => (
                        <tr key={name}>
                            <td className="border p-1">{name}</td>
                            <td className="border p-1">{(lon as number).toFixed(2)}°</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-2 text-sm text-gray-600">
                ลัคนา: {chart.ascendant.toFixed(2)}°
            </div>
        </div>
    );
}