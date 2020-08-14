import {Dimensions } from "react-native";

export const standardFontSize = 10;
export const screenHeight = Math.round(Dimensions.get('window').height);
export const screenWidth = Math.round(Dimensions.get('window').width);

export const FONT_ORANGE = { color : '#f89009' }
export const FONT_ORANGE2 = { color : '#ffbb33' }
export const FONT_GREEN = { color : '#009a87' }
export const FONT_RED = { color : '#ee2323' }
export const FONT_BLUE = { color : '#5f76e8' }
export const FONT_BLUE2 = { color : '#006dd7' }
export const FONT_GRAY = { color : '#7c8798' }


export const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const koreaDropdownItems = [
    { label: '부산', value: 'busan', },
    { label: '충북', value: 'chungbuk', },
    { label: '충남', value: 'chungnam', },
    { label: '대구', value: 'daegu', },
    { label: '대전', value: 'daejeon', },
    { label: '강원', value: 'gangwon', },
    { label: '광주', value: 'gwangju', },
    { label: '경북', value: 'gyeongbuk', },
    { label: '경기', value: 'gyeonggi', },
    { label: '경남', value: 'gyeongnam', },
    { label: '인천', value: 'incheon', },
    { label: '제주', value: 'jeju', },
    { label: '전북', value: 'jeonbuk', },
    { label: '전남', value: 'jeonnam', },
    { label: '세종', value: 'sejong', },
    { label: '서울', value: 'seoul', },
    { label: '울산', value: 'ulsan', },
]