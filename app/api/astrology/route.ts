"use server";

import { NextResponse } from "next/server";
import { getThaiAstrologyInfo } from "@/lib/thai-astrology";

/**
 * Handles the POST request to the astrology API endpoint.
 * This endpoint calculates Thai astrological information based on a birth date.
 * It uses a single source of truth for the calculation logic to ensure consistency.
 */
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { birthDate } = body;

        // Check for the presence of birthDate in the request body
        if (!birthDate) {
            return NextResponse.json({ error: "Missing birthDate" }, { status: 400 });
        }

        // Use the centralized calculation function from the library.
        const result = await getThaiAstrologyInfo(birthDate);

        // Handle error case from the calculation function
        if (typeof result === 'string') {
            return NextResponse.json({ error: result }, { status: 400 });
        }

        // Extract the required data from the structured result.
        // This is necessary because the original API response structure
        // is different from the server action's return type.
        const responseData = {
            dayOfWeek: result.html.match(/<b>ตรงกับ:<\/b> (.+?) ขึ้น/)?.[1].trim() || '',
            waxingWaning: result.html.match(/(ขึ้น|แรม) ([\d๐-๙]+) ค่ำ/)?.[0].trim() || '',
            dithi: result.html.match(/<b>ดิถีฤกษ์ไชย:<\/b> (.+?)<\/p>/)?.[1].trim() || '',
            thaiMonth: result.html.match(/<b>เกิดวันที่:<\/b> \d+ (.+?) \d+/)?.[1].trim() || '',
            animalYear: result.html.match(/ปี(.+?)<\/p>/)?.[1].trim() || '',
            buddhistYear: parseInt(result.html.match(/<b>เกิดวันที่:<\/b> \d+ .+? (\d+)/)?.[1] || '0'),
            time: result.html.match(/<b>เวลาเกิด:<\/b> (.+?) น/)?.[1].trim() || '',
            yam: result.html.match(/น. \((.+?)\)/)?.[1].trim() || '',
            dayOfWeekIndex: result.dayOfWeekIndex,
            lunarDayThai: result.html.match(/(ขึ้น|แรม) ([\d๐-๙]+) ค่ำ/)?.[2].trim() || '',
            thaiLunarMonthThai: result.html.match(/เดือน ([\d๐-๙]+)/)?.[1].trim() || '',
        };

        return NextResponse.json(responseData, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
