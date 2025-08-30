import Navbar from '@/components/Navbar';
import YamaAthaganClock from '@/components/YamaAthaganClock';
import CurrentDayCard from '@/components/CurrentDayCard';
import DynamicHoroscope from '@/components/DynamicHoroscope';
import PlanetaryPositions from '@/components/PlanetaryPositions';
import AstroDataDisplay from '@/components/AstroDataDisplay';

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <Navbar />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] text-center text-white p-8">
                <h1 className="text-4xl md:text-6xl font-bold text-secondary-gold drop-shadow-lg">THAI ASTROLOGY</h1>
                <p className="mt-2 text-md md:text-xl text-white drop-shadow">โหราศาสตร์ไทย</p>

                <YamaAthaganClock />
                <CurrentDayCard />

                <AstroDataDisplay />
            </div>
        </main>
    );
}
