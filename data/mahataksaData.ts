// data/mahataksaData.ts
const defaultNumbers = [1, 2, 3, 4, 7, 5, 8, 6];

export const mahataksaData = [
    {
        day: 'อาทิตย์',
        numbers: defaultNumbers,
        taksa: ['บริวาร', 'อายุ', 'เดช', 'ศรี', 'อุตสาหะ', 'กาลกิณี', 'มูลละ', 'มนตรี']
    },
    {
        day: 'จันทร์',
        numbers: defaultNumbers,
        taksa: ['กาลกิณี', 'บริวาร', 'อายุ', 'เดช', 'มูลละ', 'มนตรี', 'ศรี', 'อุตสาหะ']
    },
    {   
        day: 'อังคาร',
        numbers: defaultNumbers,
        taksa: ['มนตรี', 'กาลกิณี', 'บริวาร', 'อายุ', 'ศรี', 'อุตสาหะ', 'เดช', 'มูลละ']
    },
    {
        day: 'พุธ',
        numbers: defaultNumbers,
        taksa: ['อุตสาหะ', 'มนตรี', 'กาลกิณี', 'บริวาร', 'เดช', 'มูลละ', 'อายุ', 'ศรี']
    },
    {
        day: 'พฤหัสบดี',
        numbers: defaultNumbers,
        taksa: ['ศรี', 'มูลละ', 'อุตสาหะ', 'มนตรี', 'บริวาร', 'เดช', 'กาลกิณี', 'อายุ']
    },
    {
        day: 'ศุกร์',
        numbers: defaultNumbers,
        taksa: ['อายุ', 'เดช', 'ศรี', 'มูลละ', 'มนตรี', 'บริวาร', 'อุตสาหะ', 'กาลกิณี']
    },
    {
        day: 'เสาร์',
        numbers: defaultNumbers,
        taksa: ['มูลละ', 'อุตสาหะ', 'มนตรี', 'กาลกิณี', 'อายุ', 'ศรี', 'บริวาร', 'เดช']
    },
    {
        day: 'พุธ(กลางคืน) ดาวราหู',
        numbers: defaultNumbers,
        taksa: ['เดช', 'ศรี', 'มูลละ', 'อุตสาหะ', 'กาลกิณี', 'อายุ', 'มนตรี', 'บริวาร']
    }  
];

// เพิ่มข้อมูลใหม่ที่แยกออกมา
export const taksaPakornData = {
    name: 'ทักษาปกรณ์',
    animalname: ['ครุฑนาม', 'พยัคนาม', 'ราชสีนาม', 'โสณนาม', 'นาคนาม', 'มุสิกนาม', 'คชนาม', 'อัชชนาม'],
    symbol: ['อ และ สระ', 'ก,ข,ค,ฆ,ง', 'จ,ฉ,ช,ซ,ฌ,ญ', 'ฎ,ฏ,ฐ,ฑ,ฒ,ณ', 'ด,ต,ถ,ท,ธ,น', 'บ,ป,ผ,ฝ,พ,ฟ,ภ,ม', 'ย,ร,ล,ว', 'ศ,ษ,ส,ห,ฬ,ฮ']
};

export const dailyColorData = {
    name: 'สีประจำวัน',
    numbers: defaultNumbers,
    color: ['แดง', 'เหลือง', 'ชมพู', 'เขียว', 'ม่วง', 'ส้ม', 'เทา', 'ฟ้า']
};

export const taksaElementsData = {
    name: 'ทักษาธาตุ',
    numbers: defaultNumbers,
    elements: ['ไฟ', 'ดิน', 'ลม', 'น้ำ', 'ไฟ', 'ดิน', 'ลม', 'น้ำ']
};

export const chaiyapumeTaksaData = {
    name: 'ชัยภูมิทักษา',
    numbers: defaultNumbers,
    chaiyapume: ['อีสาน', 'บูรพา', 'อาคเนย์', 'ทักษิน', 'หรดี', 'ประจิม', 'พายับ', 'อุดร']
};

export const taksaPowerData = {
    name: 'กำลังดาวทักษา',
    numbers: defaultNumbers,
    power: ['กำลัง ๖', 'กำลัง ๑๕', 'กำลัง ๘', 'กำลัง ๑๗', 'กำลัง ๑๐', 'กำลัง ๑๙', 'กำลัง ๑๒', 'กำลัง ๒๑']
};