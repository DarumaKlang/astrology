// src/components/MahataksaStarDisplay.tsx

import { mahataksaStarData } from '@/data/mahataksaStarData';
import ThemedSection from './ThemedSection';
import ThemedCard from './ThemedCard';

const MahataksaStarDisplay: React.FC = () => {
    return (
        <ThemedSection title="ความหมายดาวในวิชา มหาทักษา" gridColsClassName="grid-cols-1">

            <ThemedCard className="flex flex-col items-center justify-center p-4">

                <h2 className="text-2xl font-bold mb-4">ข้อมูลดาวพระเคราะห์ตามหลักทักษา</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {mahataksaStarData.map((star, index) => (
                        <div key={index} className="p-6 rounded-lg shadow-md border border-gray-200">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl font-bold text-blue-600 mr-4">{star.symbol}</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-300">{star.name}</h3>
                                    <p className="text-sm text-gray-400">กำลังวัน: {star.power}</p>
                                </div>
                            </div>
                            <ul className="list-none space-y-2 text-gray-300 text-left">
                                <li><strong className="font-medium">วันประจำ:</strong> {star.day || 'ไม่มี'}</li>
                                <li><strong className="font-medium">อวัยวะ:</strong> {star.organ || 'ไม่มี'}</li>
                                <li><strong className="font-medium">ความหมาย:</strong> {star.meaning}</li>
                            </ul>
                        </div>
                    ))}
                </div>

            </ThemedCard>

        </ThemedSection>
    );
};

export default MahataksaStarDisplay;