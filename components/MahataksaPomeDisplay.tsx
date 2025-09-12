// src/components/mahataksaPomeDisplay.tsx

import { mahataksaPomeData } from '../data/mahataksaPomeData';

const MahataksaPomeDisplay: React.FC = () => {
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">ข้อมูลทักษา 9 ภูมิ</h2>
            <div className="space-y-6">
                {mahataksaPomeData.map((taksa, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{index + 1}. ภูมิ{taksa.name}</h3>
                        <p className="text-gray-700 mb-2">
                            <strong className="font-medium">ความหมาย:</strong> {taksa.meaning}
                        </p>
                        <p className="text-gray-700">
                            <strong className="font-medium">คำพยากรณ์:</strong> {taksa.prediction}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MahataksaPomeDisplay;