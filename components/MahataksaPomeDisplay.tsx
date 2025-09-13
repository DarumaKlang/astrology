// src/components/mahataksaPomeDisplay.tsx

import { mahataksaPomeData } from '../data/mahataksaPomeData';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';

const MahataksaPomeDisplay: React.FC = () => {
    return (
        <ThemedSection title="ความหมายภูมิทักษา" gridColsClassName="grid-cols-1">

            <ThemedCard className="flex flex-col items-center justify-center p-4">

                <h2 className="text-2xl font-bold mb-4">ข้อมูลภูมิทักษาทั้ง 9 ภูมิ</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mahataksaPomeData.map((taksa, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-md border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-300 mb-2">{index + 1}. ภูมิ{taksa.name}</h3>
                            <p className="text-gray-300 mb-2">
                                <strong className="font-medium">ความหมาย:</strong> {taksa.meaning}
                            </p>
                            <p className="text-gray-300">
                                <strong className="font-medium">คำพยากรณ์:</strong> {taksa.prediction}
                            </p>
                        </div>
                    ))}
                </div>

            </ThemedCard>

        </ThemedSection>
    );
};

export default MahataksaPomeDisplay;