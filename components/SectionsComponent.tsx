// src/components/SectionsComponent.tsx

interface House {
    house: string;
    meaning: string;
}

interface Section {
    id: string;
    title: string;
    content: string;
    houses?: House[];
}

interface SectionsComponentProps {
    data: Section[];
}

export default function SectionsComponent({ data }: SectionsComponentProps) {
    if (!data || data.length === 0 || !data[0].houses) {
        return null; // ถ้าไม่มีข้อมูล จะไม่แสดงผลอะไรเลย
    }

    const housesData = data[0].houses;

    return (
        <section className="my-8">
            <h2 className="text-3xl font-bold mb-4">ภพชะตา 12 เรือน</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {housesData.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-2xl font-semibold mb-2">{item.house}</h3>
                        <p className="text-gray-700 mt-1">{item.meaning}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}