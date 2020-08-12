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