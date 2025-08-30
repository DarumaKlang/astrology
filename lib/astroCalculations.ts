// ลบบรรทัด import เดิมออกทั้งหมด
import { DateTime } from 'luxon';

// ใช้ 'require' แทนการ 'import' เพื่อเข้าถึง module
// วิธีนี้มักจะใช้ได้กับไลบรารีที่ใช้ CommonJS
const AE = require('astronomy-engine');

// เพิ่ม export หน้า function เหมือนเดิม
export function getObserverAndDateTime(latitude: number, longitude: number) {
    const dt = DateTime.local().setZone('Asia/Bangkok');
    const observer = new AE.Observer(latitude, longitude, 0);
    const jd = AE.J2000; // เรียกใช้ผ่านตัวแปร AE

    return { dt, observer, jd };
}

export function getPlanetaryData(observer: typeof AE.Observer, jd: number) {
    const planets = ['Sun', 'Moon', 'Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
    return planets.map(planet => {
        const position = { ra: Math.random() * 360, dec: Math.random() * 180 };
        return {
            name: planet,
            position,
            eclipticLongitude: position.ra,
            eclipticLatitude: position.dec,
        };
    });
}