// src/components/AstrologyChart.tsx
import Image from 'next/image';

const AstrologyChart = () => {
    return (
        <div className="cr-chart">
            {/* ส่วนสำหรับตำแหน่งดาวมาตรฐาน (ซ่อนอยู่) */}
            <div id="cr_std" style={{ display: 'none' }}>
                <div className="cr-std cr-std0" id="cr_std0"></div>
                <div className="cr-std cr-std1" id="cr_std1"></div>
                <div className="cr-std cr-std2" id="cr_std2"></div>
                <div className="cr-std cr-std3" id="cr_std3"></div>
                <div className="cr-std cr-std4" id="cr_std4"></div>
                <div className="cr-std cr-std5" id="cr_std5"></div>
                <div className="cr-std cr-std6" id="cr_std6"></div>
                <div className="cr-std cr-std7" id="cr_std7"></div>
                <div className="cr-std cr-std8" id="cr_std8"></div>
                <div className="cr-std cr-std9" id="cr-std9"></div>
                <div className="cr-std cr-std10" id="cr_std10"></div>
                <div className="cr-std cr-std11" id="cr_std11"></div>
            </div>

            {/* ส่วนสำหรับชื่อเรือนชะตา (ซ่อนอยู่) */}
            <div id="cr_hou_asc" style={{ display: 'none' }}>
                <div className="cr-hou cr-hou0">ปัตนิ</div>
                <div className="cr-hou cr-hou1">มรณะ</div>
                <div className="cr-hou cr-hou2">สุภะ</div>
                <div className="cr-hou cr-hou3">กัมมะ</div>
                <div className="cr-hou cr-hou4">ลาภะ</div>
                <div className="cr-hou cr-hou5">วินาศ</div>
                <div className="cr-hou cr-hou6">ตนุ</div>
                <div className="cr-hou cr-hou7">กดุมภะ</div>
                <div className="cr-hou cr-hou8">สหัชชะ</div>
                <div className="cr-hou cr-hou9">พันธุ</div>
                <div className="cr-hou cr-hou10">ปุตตะ</div>
                <div className="cr-hou cr-hou11">อริ</div>
            </div>
            {/* เพิ่ม div สำหรับเรือนอื่นๆ ที่ถูกซ่อนไว้ที่เหลือ */}
            <div id="cr_hou_tanuset" style={{ display: 'none' }}>
                {/* ... โค้ดส่วนนี้ */}
            </div>
            <div id="cr_hou_tanukaset" style={{ display: 'none' }}>
                {/* ... โค้ดส่วนนี้ */}
            </div>
            <div id="cr_hou_tanuluk" style={{ display: 'none' }}>
                {/* ... โค้ดส่วนนี้ */}
            </div>

            {/* ส่วนสำหรับควบคุมการแสดงผล (ปุ่มและ dropdown) */}
            <div className="cb-cr-hou export-hide ptr">
                <input id="cb_cr_hou" type="checkbox" />
            </div>
            <div className="dd-cr-hou export-hide ptr">
                <select id="dd_cr_hou" style={{ width: '85px' }} title="แสดง ตำแหน่งเริ่มนับเรือน (ไม่มีผลกับผลการคำนวณ)">
                    <option value="lux">เรือนลัคนา (๑) ☆</option>
                </select>
            </div>
            {/* ... โค้ดส่วนปุ่มและ dropdown ที่เหลือทั้งหมด ... */}

            {/* ส่วนสำหรับแสดงตำแหน่งดาวกำเนิด */}
            <div id="cr_nsign" style={{ display: 'block' }}>
                <div className="cr-s1-center ptr" title="องศาอาทิตย์กำเนิด">18°<br />27'</div>
                <div className="cr-nsign cr-nsign0 lix"></div>
                <div className="cr-nsign cr-nsign1 lix">
                    <div className="iax">
                        <Image
                            src="https://www.myhora.net/astrology/thai/images/star/a10.png"
                            title="มฤตยู(๐) กำเนิด 22°พภ33'00&quot; พ. (52.55°)"
                            className="ptr ia10"
                            alt="มฤตยู(๐) กำเนิด"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                {/* ... โค้ดส่วนดาวกำเนิดที่เหลือ ... */}
            </div>

            {/* ส่วนสำหรับแสดงตำแหน่งดาวจร */}
            <div id="cr_tsign">
                <div className="cr-tsign cr-tsign0">
                    <Image
                        src="https://www.myhora.net/astrology/thai/images/star/c2.png"
                        title="จันทร์(2) จร 25°มษ37'00&quot; (25.62°)"
                        className="ptr ic2"
                        alt="จันทร์(2) จร"
                        width={20}
                        height={20}
                    />
                </div>
                {/* ... โค้ดส่วนดาวจรที่เหลือทั้งหมด ... */}
            </div>
        </div>
    );
};

export default AstrologyChart;