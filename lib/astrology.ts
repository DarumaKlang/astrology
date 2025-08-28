// lib/astrology.ts
"use server";

import { DateTime } from "luxon";

export async function getThaiAstrologyInfo(birthDate: string): Promise<string> {
    const luxonDate = DateTime.fromISO(birthDate, { zone: "utc" });

    if (!luxonDate.isValid) {
        return `<p class="text-red-500">กรุณากรอกวันที่และเวลาที่ถูกต้อง</p>`;
    }

    // Convert to a valid Date object
    const birthTime = luxonDate.toJSDate();

    // วันในสัปดาห์
    const daysOfWeek = ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"];
    const dayOfWeek = daysOfWeek[birthTime.getDay()]; 

    // คำนวณข้างขึ้น/ข้างแรม
    const year = birthTime.getFullYear();
    const month = birthTime.getMonth() + 1; // getMonth() returns 0-11
    const day = birthTime.getDate();
    const hours = birthTime.getHours();
    const minutes = birthTime.getMinutes();
    const seconds = birthTime.getSeconds();
    
    // Calculate Julian Day (JD)
    let jd = 367 * year - Math.floor(7 * (year + Math.floor((month + 9) / 12)) / 4) + Math.floor(275 * month / 9) + day + 1721013.5 + (hours / 24) + (minutes / 1440) + (seconds / 86400);

    // Calculate age of the moon in days
    const lunarAgeDays = (jd - 2451550.09765) % 29.530588853;
    
    let lunarPhase = "";
    let lunarDay = 0;
    if (lunarAgeDays < 15) {
        lunarPhase = "ขึ้น";
        lunarDay = Math.floor(lunarAgeDays) + 1;
    } else {
        lunarPhase = "แรม";
        lunarDay = Math.floor(lunarAgeDays - 15) + 1;
    }
    const waxingWaning = `${lunarPhase} ${lunarDay} ค่ำ`;

    // เดือน
    const thaiMonths = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    const thaiMonth = thaiMonths[birthTime.getMonth()];

    // ปีนักษัตร
    const buddhistYear = birthTime.getFullYear() + 543;
    const animalYears = ["กุน", "ชวด", "ฉลู", "ขาล", "เถาะ", "มะโรง", "มะเส็ง", "มะเมีย", "มะแม", "วอก", "ระกา", "จอ"];
    const animalYear = animalYears[(buddhistYear - 8) % 12];
    
    const displayYear = buddhistYear;
    
    // Format time to 24-hour format
    const timeString = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    return `
        <div class="space-y-4 font-normal text-gray-300">
            <p>คุณเกิดวัน <b class="font-bold text-yellow-400">${dayOfWeek}</b></p>
            <p>ตรงกับ <b class="font-bold text-yellow-400">${waxingWaning}</b></p>
            <p>เดือน <b class="font-bold text-yellow-400">${thaiMonth}</b></p>
            <p>ปีนักษัตร <b class="font-bold text-yellow-400">ปี${animalYear}</b></p>
            <p>ปี พ.ศ. <b class="font-bold text-yellow-400">${displayYear}</b></p>
            <p>เวลาเกิด <b class="font-bold text-yellow-400">${timeString} น.</b></p>
        </div>
    `;
}