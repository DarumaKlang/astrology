## Getting Started

First, run the development server:

```bash
# First
npm install
# And
npm install astronomy-engine luxon
# So
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## For Tailwind CSS

```bash
# For Tailwind CSS
npm install postcss-cli postcss
# And
npm install autoprefixer
```

สร้างไฟล์ postcss.config.js ใน root directory

```java
// postcss.config.js

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {}, // Optional: Add autoprefixer for better browser compatibility
    },
};
```

แก้ไขไฟล์ `package.json`

เพิ่มบันทัดนี้ `"css": "postcss ./app/globals.css -o ./public/build.css --watch"` เข้าไป

```json
{
  "name": "nextjs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build --turbopack",
    "start": "next start",
    "css": "postcss ./app/globals.css -o ./public/build.css --watch"
  },
  "dependencies": {
    "astronomy-engine": "^3.0.0",
    "autoprefixer": "^10.4.21",
    "luxon": "^3.7.1",
    "next": "^15.5.2",
    "postcss": "^8.5.6",
    "postcss-cli": "^11.0.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/luxon": "^3.7.1",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4.0.0",
    "typescript": "^5"
  }
}
```

รัน `npm run css` เพื่อทดสอบ

ผลลัพธ์ควรเป็นเช่นนี้

```bash
npm run css

> nextjs@0.1.0 css
> postcss ./app/globals.css -o ./public/build.css --watch

```

จากนั้นรัน `npm run dev` ได้เลย

## เพื่อเพิ่มการคำนวนหาวันเดือนปีเกิดจากปฏิทินจันทรคติ

รัน `npm install thai-calendar` ไลบรารี : thai-calendar

---

**เหตุผลที่แนะนำ thai-calendar** :

- **ความแม่นยำ** : ถูกพัฒนาขึ้นมาเพื่อการคำนวณปฏิทินไทยโดยเฉพาะ จึงให้ผลลัพธ์ที่ถูกต้องตามหลักโหราศาสตร์และปฏิทินหลวงของไทย
- **ใช้งานง่าย** : มี API ที่เข้าใจง่ายและตรงไปตรงมา สามารถเรียกใช้ฟังก์ชันเพื่อแปลงวันที่ได้อย่างรวดเร็ว
- **ครอบคลุมข้อมูล** : ไม่เพียงแค่บอกวันขึ้น/แรมและเดือนไทย แต่ยังสามารถคำนวณปีนักษัตร, วันสำคัญทางพุทธศาสนา, และอื่นๆ ได้ด้วย

ตัวอย่างการใช้งาน

```tsx
// script.ts

import { lunar } from "thai-calendar";

// กำหนดวันที่คริสตศักราช (ค.ศ.)
// เนื่องจากปี พ.ศ. = ค.ศ. + 543
// พ.ศ. 2518 = 1975 + 543
const date = new Date("1975-08-29T12:00:00Z");

// ใช้ฟังก์ชัน lunar เพื่อคำนวณข้อมูลปฏิทินจันทรคติ
const lunarInfo = lunar(date);

// แสดงผลลัพธ์
console.log(`วันที่: ${date.toLocaleDateString('th-TH')}`);
console.log(`วันขึ้น/แรม: ${lunarInfo.phase === "waxing" ? "ขึ้น" : "แรม"}`);
console.log(`กี่ค่ำ: ${lunarInfo.day}`);
console.log(`เดือนไทย: ${lunarInfo.month_name}`);
console.log(`ปีนักษัตร: ${lunarInfo.animal_thai}`);

/*
ผลลัพธ์ที่ได้จากการรันโค้ด:
*/
```
