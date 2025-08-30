// src/app/lib/astrology.ts
"use server";

import { DateTime } from "luxon";

// กำหนด Interface สำหรับข้อมูลที่คืนค่า
interface AstrologyResult {
    html: string;
    dayOfWeekIndex: number; // 0=อาทิตย์, 1=จันทร์, ..., 6=เสาร์
}

/**
 * Calculates Thai astrology information for a given birth date.
 * This is a Server Action that returns a structured HTML string and dayOfWeekIndex.
 * @param birthDate The ISO 8601 formatted date string.
 * @returns A promise that resolves to an AstrologyResult object or an error message string.
 */
export async function getThaiAstrologyInfo(birthDate: string): Promise<AstrologyResult | string> {
    const luxonDate = DateTime.fromISO(birthDate, { zone: "Asia/Bangkok" });

    console.log("-------------------");
    console.log("Raw Input:", birthDate);
    console.log("Luxon Date Object:", luxonDate.toObject());
    console.log("Day of Week (Luxon):", luxonDate.weekday);
    console.log("Timezone:", luxonDate.zoneName);
    console.log("-------------------");

    if (!luxonDate.isValid) {
        return "กรุณากรอกวันที่และเวลาที่ถูกต้อง";
    }

    // วันในสัปดาห์
    const daysOfWeek = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
    // weekday ของ Luxon คือ 1=จันทร์, 7=อาทิตย์. เราต้องการ 0=อาทิตย์, 6=เสาร์
    const dayOfWeekIndex = luxonDate.weekday === 7 ? 0 : luxonDate.weekday; // 0=อาทิตย์, 1=จันทร์, ..., 6=เสาร์
    const dayOfWeek = daysOfWeek[dayOfWeekIndex];

    const hours = luxonDate.hour;
    const minutes = luxonDate.minute;
    const seconds = luxonDate.second;

    const totalMinutes = hours * 60 + minutes + seconds / 60;
    const minutesInAYam = 90; // 1.5 hours
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
    const jdEpoch = 2440587.5; // Julian Day for Unix Epoch (1970-01-01T00:00:00Z)
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
    const monthThaiNumerals = ["", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙", "๑๐", "๑๑", "๑๒"]; // Mapping for Thai month numbers

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

    const htmlResult = `
        <div class="text-left space-y-2 text-white">
            <p><b>เกิดวันที่:</b> ${luxonDate.day} ${thaiMonth} ${buddhistYear}</p>
            <p><b>เวลาเกิด:</b> ${timeString} น. (${yamString})</p>
            <p><b>ตรงกับ:</b> ${dayOfWeek} ขึ้น ${lunarDayThai} ค่ำ เดือน ${thaiLunarMonthThai} ปี${animalYear}</p>
            <p><b>ดิถีฤกษ์ไชย:</b> ${dithi}</p>
        </div>
    `;

    console.log("--- Calculation Results ---");
    console.log("Day of Week Index:", dayOfWeekIndex);
    console.log("Final HTML:", htmlResult);
    console.log("-------------------");

    return { html: htmlResult, dayOfWeekIndex: dayOfWeekIndex };
}

// Simplified mapping for Gregorian month to approximate Thai lunar month number
const thaiLunarMonthNumbers: { [key: number]: number } = {
    1: 2,  // มกราคม -> เดือน ๒
    2: 3,  // กุมภาพันธ์ -> เดือน ๓
    3: 4,  // มีนาคม -> เดือน ๔
    4: 5,  // เมษายน -> เดือน ๕
    5: 6,  // พฤษภาคม -> เดือน ๖
    6: 7,  // มิถุนายน -> เดือน ๗
    7: 8,  // กรกฎาคม -> เดือน ๘
    8: 9,  // สิงหาคม -> เดือน ๙ (โดยประมาณ)
    9: 10, // กันยายน -> เดือน ๑๐ (โดยประมาณ)
    10: 11, // ตุลาคม -> เดือน ๑๑ (โดยประมาณ)
    11: 12, // พฤศจิกายน -> เดือน ๑๒ (โดยประมาณ)
    12: 1,  // ธันวาคม -> เดือน ๑ (โดยประมาณ)
};