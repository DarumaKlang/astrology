import { NextRequest, NextResponse } from "next/server";
import { getHoroscope, createHouses, defaultThaiZodiac } from "@/lib/horoscope-data";
import { DateTime } from "luxon";

export async function GET(req: NextRequest) {
    try {
        const url = new URL(req.url);
        const dateParam = url.searchParams.get("date") || new Date().toISOString();
        const date = DateTime.fromISO(dateParam);

        // เพิ่มการ log เพื่อตรวจสอบข้อมูล
        console.log("Date received:", date.toISO());
        
        const houses = createHouses(defaultThaiZodiac);
        console.log("Houses created:", houses);

        const horoscope = getHoroscope(date, houses);
        console.log("Horoscope data:", horoscope);  // ตรวจสอบข้อมูลดาว

        return NextResponse.json({ success: true, data: horoscope });
    } catch (err) {
        console.error("Error:", err);
        return NextResponse.json({ success: false, error: (err as Error).message });
    }
}
