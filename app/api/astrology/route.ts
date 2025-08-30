// src/app/api/astrology/route.ts
"use server";

import { DateTime } from "luxon";
import { NextResponse } from "next/server";

// Simplified mapping for Gregorian month to approximate Thai lunar month number
const thaiLunarMonthNumbers: { [key: number]: number } = {
    1: 2,  // มกราคม -> เดือน ๒
    2: 3,  // กุมภาพันธ์ -> เดือน ๓
    3: 4,  // มีนาคม -> เดือน ๔
    4: 5,  // พฤษภาคม -> เดือน ๕
    5: 6,  // มิถุนายน -> เดือน ๖
    6: 7,  // กรกฎาคม -> เดือน ๗
    7: 8,  // สิงหาคม -> เดือน ๘ (โดยประมาณ)
    8: 9,  // กันยายน -> เดือน ๙ (โดยประมาณ)
    9: 10, // ตุลาคม -> เดือน ๑๐ (โดยประมาณ)
    10: 11, // พฤศจิกายน -> เดือน ๑๑ (โดยประมาณ)
    11: 12, // ธันวาคม -> เดือน ๑๒ (โดยประมาณ)
    12: 1,  // มกราคม -> เดือน ๑ (โดยประมาณ)
};

// Define the function to calculate Thai astrology info
const getThaiAstrologyInfo = (birthDate: string) => {
    // Parse the input date string and force the timezone to be Asia/Bangkok from the start.
    const luxonDate = DateTime.fromISO(birthDate, { zone: "Asia/Bangkok" });

    if (!luxonDate.isValid) {
        return { error: "Invalid date format" };
    }

    // วันในสัปดาห์
    const daysOfWeek = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
    const dayOfWeek = daysOfWeek[luxonDate.weekday === 7 ? 0 : luxonDate.weekday];

    const hours = luxonDate.hour;
    const minutes = luxonDate.minute;
    const seconds = luxonDate.second;

    const totalMinutes = hours * 60 + minutes + seconds / 60;
    const minutesInAYam = 90;
    let yamNumber = 0;
    let yamPeriod = "";

    if (totalMinutes > 6 * 60 && totalMinutes <= 18 * 60) {
        yamPeriod = "กลางวัน";
        yamNumber = Math.ceil((totalMinutes - 6 * 60) / minutesInAYam);
    } else {
        yamPeriod = "กลางคืน";
        if (totalMinutes > 18 * 60) {
            yamNumber = Math.ceil((totalMinutes - 18 * 60) / minutesInAYam);
        } else {
            yamNumber = Math.ceil((totalMinutes + (24 * 60) - 18 * 60) / minutesInAYam);
        }
    }

    const unixTimestamp = luxonDate.toMillis();
    const jdEpoch = 2440587.5; 
    const jd = jdEpoch + unixTimestamp / 86400000;
    const lunarAgeDays = (jd - 2451550.09765) % 29.530588853;

    let lunarPhase = "";
    let lunarDay = 0;

    if (lunarAgeDays >= 0 && lunarAgeDays < 15) {
        lunarPhase = "ขึ้น";
        lunarDay = Math.floor(lunarAgeDays) + 1;
    } else {
        lunarPhase = "แรม";
        lunarDay = Math.floor(lunarAgeDays - 15) + 1;
    }

    const thaiNumerals = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
    const lunarDayThai = lunarDay.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');
    const yamNumberThai = yamNumber.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');
    
    let thaiLunarMonth = thaiLunarMonthNumbers[luxonDate.month];
    if (luxonDate.month === 8 && luxonDate.day >= 25) { // Simplified rule
         thaiLunarMonth = 10;
    }
    const thaiLunarMonthThai = thaiLunarMonth.toString().split('').map(digit => thaiNumerals[parseInt(digit)]).join('');
    
    const waxingWaning = `${lunarPhase} ${lunarDayThai} ค่ำ`;

    const getDithi = (day: number): string => {
        const dithiMap: { [key: number]: string } = {
            1: "ช้างแก้วสู่โรงธรรม",
            2: "ฟังธรรมกลางป่าช้า",
            3: "ล้างมือคอยท่ากิน",
            4: "ฝ่าตีนตากแดด",
            5: "ผีแวดปองเอา",
            6: "ลงสำเภาไปค้า",
            7: "บ่ายหน้าควายชน",
            8: "ทำวนบ่ทันเมี้ยน",
            9: "ต้องเสี้ยนพระราม",
            10: "หาความบ่ได้",
            11: "ทุกข์ภัยบ่มี",
            12: "บ่ดีแต่สักคาบ",
            13: "ชัยปราบชมภู",
            14: "ศัตรูปองฆ่า",
            15: "วายชีวาบ่คืน",
        };
        return dithiMap[day] || "ไม่พบข้อมูล";
    };

    const dithi = getDithi(lunarDay);

    const thaiMonths = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    const thaiMonth = thaiMonths[luxonDate.month - 1];

    const buddhistYear = luxonDate.year + 543;
    const animalYears = ["ชวด", "ฉลู", "ขาล", "เถาะ", "มะโรง", "มะเส็ง", "มะเมีย", "มะแม", "วอก", "ระกา", "จอ", "กุน"];
    const animalYear = animalYears[(buddhistYear - 2431) % 12];

    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    const yamString = `ยาม ${yamNumberThai} ${yamPeriod}`;

    return {
        dayOfWeek,
        waxingWaning,
        dithi,
        thaiMonth,
        animalYear,
        buddhistYear,
        time: timeString,
        yam: yamString,
        dayOfWeekIndex: luxonDate.weekday === 7 ? 0 : luxonDate.weekday,
        lunarDayThai,
        thaiLunarMonthThai,
    };
};

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { birthDate } = body;

        if (!birthDate) {
            return NextResponse.json({ error: "Missing birthDate" }, { status: 400 });
        }

        const result = getThaiAstrologyInfo(birthDate);

        if ('error' in result) {
            return NextResponse.json(result, { status: 400 });
        }

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
