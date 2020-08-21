import {Dimensions } from "react-native";
import KoreaRegions from "./Component/KoreaRegions";

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
export const yearItems = [
    { label: 2020, value: 2020, id: 'year'},
]

export const monthItems = [
    { label: 2, value: 2, id: 'month'},
    { label: 3, value: 3, id: 'month'},
    { label: 4, value: 4, id: 'month'},
    { label: 5, value: 5, id: 'month'},
    { label: 6, value: 6, id: 'month'},
    { label: 7, value: 7, id: 'month'},
    { label: 8, value: 8, id: 'month'},
]
export const dayItems = [
    { label: 1, value: 1, id: 'day' },
    { label: 2, value: 2, id: 'day' },
    { label: 3, value: 3, id: 'day' },
    { label: 4, value: 4, id: 'day' },
    { label: 5, value: 5, id: 'day' },
    { label: 6, value: 6, id: 'day' },
    { label: 7, value: 7, id: 'day' },
    { label: 8, value: 8, id: 'day' },
    { label: 9, value: 9, id: 'day' },
    { label: 10, value: 10, id: 'day' },
    { label: 11, value: 11, id: 'day' },
    { label: 12, value: 12, id: 'day' },
    { label: 13, value: 13, id: 'day' },
    { label: 14, value: 14, id: 'day' },
    { label: 15, value: 15, id: 'day' },
    { label: 16, value: 16, id: 'day' },
    { label: 17, value: 17, id: 'day' },
    { label: 18, value: 18, id: 'day' },
    { label: 19, value: 19, id: 'day' },
    { label: 20, value: 20, id: 'day' },
    { label: 21, value: 21, id: 'day' },
    { label: 22, value: 22, id: 'day' },
    { label: 23, value: 23, id: 'day' },
    { label: 24, value: 24, id: 'day' },
    { label: 25, value: 25, id: 'day' },
    { label: 26, value: 26, id: 'day' },
    { label: 27, value: 27, id: 'day' },
    { label: 28, value: 28, id: 'day' },
    { label: 29, value: 29, id: 'day' },
    { label: 30, value: 30, id: 'day' },
    { label: 31, value: 31, id: 'day' },
]

export const koreaRegionsPopulation = {
    "gyeonggi":13351891,
    "jeonbuk":1808044,
    "gangwon":1540094,
    "gwangju":1454709,
    "ulsan":1141362,
    "sejong":346217,
    "chungbuk":1597936,
    "seoul":9715429,
    "gyeongnam":3347637,
    "chungnam":2120692,
    "daejeon":1470225,
    "busan":3402776,
    "gyeongbuk":2644001,
    "jeju":671913,
    "incheon":2945565,
    "jeonnam":1853339,
    "deagu":2428022
}

export const coronaSourceInfo = [
    {name: 'livecode API', url: 'https://github.com/LiveCoronaDetector/livecod'},
    {name: 'coronaboard API', url: 'https://github.com/jooeungen/coronaboard_kr'},   
    {name: 'api.corona-19', url: 'http://api.corona-19.kr/'},
    {name: 'worldometers', url: 'https://www.worldometers.info/coronavirus/'}
]

export const coronaReferenceInfo = [
    {name: 'google chart', url: 'https://developers.google.com/chart'},
    {name: 'google datastudio', url: 'https://datastudio.google.com/'},
    {name: 'livecorona', url: 'https://livecorona.co.kr/'},
    {name: 'coronaboard', url: 'https://coronaboard.kr/'}, 
]