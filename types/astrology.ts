// เพิ่มชื่อภาษาไทย
export interface AstrologicalSign {
    nameThai: string; 
    sign: string;
    rules: AstrologicalRule[];
}

export interface AstrologicalRule {
    month: [number, number];
    dateRange: [number, number];
    timeRange: [number, number];
}
