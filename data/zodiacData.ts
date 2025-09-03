// src/data/zodiacData.ts
import { DateTime } from 'luxon';

export const zodiacData = [
    { name: 'ราศีเมษ (Aries)', start: [4, 13], end: [5, 13], element: 'ไฟ', ruler: 'ดาวอังคาร', rulerNumber: '๓', feature: 'เป็นคนใจร้อน กล้าหาญ มั่นใจในตัวเองสูง มีความเป็นผู้นำ แต่บางครั้งก็ขาดความรอบคอบ', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่มีการแข่งขันและท้าทาย เพราะจะช่วยกระตุ้นพลังงานและความเป็นผู้นำให้โดดเด่น' },
    { name: 'ราศีพฤษภ (Taurus)', start: [5, 14], end: [6, 13], element: 'ดิน', ruler: 'ดาวศุกร์', rulerNumber: '๖', feature: 'มีความหนักแน่น อดทน มุ่งมั่น มีรสนิยมดี ชอบความสุขสบาย รักสงบ แต่บางครั้งก็ค่อนข้างดื้อรั้น', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่มีความมั่นคง สบายกายสบายใจ หรือสถานที่ที่เกี่ยวกับธรรมชาติ ศิลปะ และความงาม' },
    { name: 'ราศีเมถุน (Gemini)', start: [6, 14], end: [7, 14], element: 'ลม', ruler: 'ดาวพุธ', rulerNumber: '๔', feature: 'เป็นคนมีไหวพริบดี ช่างพูดช่างเจรจา ปรับตัวเก่ง มีความคิดสร้างสรรค์ แต่บางครั้งก็ตัดสินใจไม่เด็ดขาด', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่มีการเปลี่ยนแปลงอยู่เสมอ หรือเป็นสังคมที่ได้พบปะผู้คนหลากหลาย และมีโอกาสแลกเปลี่ยนข้อมูลข่าวสาร' },
    { name: 'ราศีกรกฎ (Cancer)', start: [7, 15], end: [8, 16], element: 'น้ำ', ruler: 'ดาวจันทร์', rulerNumber: '๒', feature: 'มีความอ่อนโยน อ่อนไหว รักครอบครัว รักพวกพ้อง มีสัญชาตญาณดี แต่ก็มีความขี้กังวลสูง', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่ให้ความรู้สึกอบอุ่น ปลอดภัย และเต็มไปด้วยความสัมพันธ์ที่ใกล้ชิด เช่น บ้านหรือครอบครัว' },
    { name: 'ราศีสิงห์ (Leo)', start: [8, 17], end: [9, 16], element: 'ไฟ', ruler: 'ดาวอาทิตย์', rulerNumber: '๑', feature: 'เป็นคนมีสง่าราศี ชอบความโดดเด่น มีความเป็นผู้นำสูง มีน้ำใจ แต่ก็ชอบให้คนอื่นสนใจ', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่ได้รับความสนใจและเป็นจุดศูนย์กลาง เพราะจะช่วยส่งเสริมความสามารถในการเป็นผู้นำและการแสดงออก' },
    { name: 'ราศีกันย์ (Virgo)', start: [9, 17], end: [10, 16], element: 'ดิน', ruler: 'ดาวพุธ', rulerNumber: '๔', feature: 'เป็นคนช่างสังเกต มีระเบียบแบบแผน รอบคอบ ชอบช่วยเหลือผู้อื่น แต่บางครั้งก็คิดมากและจุกจิก', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่เป็นระเบียบเรียบร้อย มีการวางแผนและจัดการอย่างดี เหมาะกับการวิเคราะห์และทำงานที่ต้องการความละเอียด' },
    { name: 'ราศีตุลย์ (Libra)', start: [10, 17], end: [11, 15], element: 'ลม', ruler: 'ดาวศุกร์', rulerNumber: '๖', feature: 'มีความยุติธรรม ชอบความสมดุล มีเสน่ห์ ชอบศิลปะ แต่ก็ลังเลและตัดสินใจยาก', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สังคมที่สงบสุข ปราศจากความขัดแย้ง และมีบรรยากาศที่สวยงามน่ารื่นรมย์' },
    { name: 'ราศีพิจิก (Scorpio)', start: [11, 16], end: [12, 15], element: 'น้ำ', ruler: 'ดาวอังคาร', rulerNumber: '๓', feature: 'มีความลึกลับ มีเสน่ห์น่าค้นหา มุ่งมั่นและทะเยอทะยานสูง แต่ก็มีความหึงหวงและเจ้าคิดเจ้าแค้น', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่เงียบสงบและเป็นส่วนตัว เหมาะกับการใคร่ครวญและทำความเข้าใจเรื่องที่ซับซ้อน' },
    { name: 'ราศีธนู (Sagittarius)', start: [12, 16], end: [1, 14], element: 'ไฟ', ruler: 'ดาวพฤหัสบดี', rulerNumber: '๕', feature: 'เป็นคนรักอิสระ ชอบการผจญภัย มีอารมณ์ขัน มองโลกในแง่ดี แต่ก็เบื่ออะไรง่ายๆ', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่เปิดกว้างและอิสระ หรือสถานที่ที่เกี่ยวข้องกับการเดินทาง การเรียนรู้ และการผจญภัย' },
    { name: 'ราศีมังกร (Capricorn)', start: [1, 15], end: [2, 12], element: 'ดิน', ruler: 'ดาวเสาร์', rulerNumber: '๗', feature: 'มีความอดทนสูง ขยันขันแข็ง มุ่งมั่นสู่ความสำเร็จ มีความรับผิดชอบ แต่ก็ค่อนข้างเครียดง่าย', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่ส่งเสริมความก้าวหน้าในอาชีพการงาน มีความรับผิดชอบ และมีเป้าหมายที่ชัดเจน' },
    { name: 'ราศีกุมภ์ (Aquarius)', start: [2, 13], end: [3, 13], element: 'ลม', ruler: 'ดาวราหู', rulerNumber: '๘', feature: 'เป็นคนรักความยุติธรรม มีความคิดก้าวหน้า เป็นมิตร ชอบช่วยเหลือผู้อื่น แต่บางครั้งก็มีโลกส่วนตัวสูง', environment: 'สภาพแวดล้อมที่เหมาะสมคือ ชุมชนหรือกลุ่มคนที่ให้ความสำคัญกับความเท่าเทียม ความคิดสร้างสรรค์ และการแลกเปลี่ยนแนวคิดใหม่ๆ' },
    { name: 'ราศีมีน (Pisces)', start: [3, 14], end: [4, 12], element: 'น้ำ', ruler: 'ดาวพฤหัสบดี', rulerNumber: '๕', feature: 'มีความอ่อนโยน มีจินตนาการสูง ชอบช่วยเหลือผู้อื่น มีความเมตตา แต่ก็ค่อนข้างอ่อนไหวและขี้สงสาร', environment: 'สภาพแวดล้อมที่เหมาะสมคือ สถานที่ที่เงียบสงบและสร้างแรงบันดาลใจ เหมาะกับการทำสมาธิ หรือกิจกรรมที่เกี่ยวกับศิลปะและจิตวิญญาณ' },
];

export const findCurrentZodiac = () => {
    const now = DateTime.local().setZone('Asia/Bangkok');
    const currentMonth = now.month;
    const currentDay = now.day;

    for (const zodiac of zodiacData) {
        const [startMonth, startDay] = zodiac.start;
        const [endMonth, endDay] = zodiac.end;

        if (startMonth < endMonth) { // Case where the zodiac period is within a single year (e.g., Apr-May)
            if ((currentMonth === startMonth && currentDay >= startDay) || (currentMonth === endMonth && currentDay <= endDay) || (currentMonth > startMonth && currentMonth < endMonth)) {
                return zodiac;
            }
        } else { // Case where the zodiac period crosses over into the next year (e.g., Dec-Jan)
            if ((currentMonth === startMonth && currentDay >= startDay) || (currentMonth === endMonth && currentDay <= endDay) || (currentMonth > startMonth || currentMonth < endMonth)) {
                return zodiac;
            }
        }
    }
    return null; // Return null if no zodiac sign is found
};