import React, { useEffect, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Region from './Region';
import Swiper from 'react-native-swiper/src';
import { Chart } from "react-google-charts";

// example
import { koreaDataByRegion } from '../sampleData';

import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE, FONT_GREEN, FONT_RED } from '../constant';


const KoreaCharts = ({ regionsData, totalData }) => {
    //console.log('koreacDataByRegion: ', koreaDataByRegion);

    // 한국 지역 코로나 데이터 - map의 value들을 arr로 변환해서
    const koreaRegiondata = Object.keys(koreaDataByRegion).slice(3,20).map((key) => {
        
        //맨 처음이랑 맨 마지막은 제거해야 함 - 합계, 검역 부분
        console.log('koreacDataByRegion: ', koreaDataByRegion[key].countryName, koreaDataByRegion[key].totalCase, koreaDataByRegion[key].recovered);
        return [koreaDataByRegion[key].countryName, parseInt(koreaDataByRegion[key].totalCase), parseInt(koreaDataByRegion[key].recovered)];
    })
    console.log(koreaRegiondata);

    //console.log(Array.from(koreaDataByRegion.values()));
    return (
        <View style={styles.wrapper}>
            <Swiper showsButtons={true}>
                <View style={styles.slideContainer}>
                <Text style={textStyles.title}>한국 확진자수 Geo chart</Text>
                <Chart
                    //width={'470px'}
                    //height={'270px'}
                    chartType="GeoChart"
                    data={[
                        ['City', '확진자', '완치자'],
                        ...koreaRegiondata
                    ]}
                    options={{
                        region: 'KR',
                        colorAxis: { colors: ['#FDF5E6', '#FFE4E1', '#DA70D6'] },
                        backgroundColor: '#81d4fa',
                        datalessRegionColor: '#FFFAFA',
                        defaultColor: '#f5f5f5',
                        displayMode: 'markers'
                    }}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="AIzaSyBMdWulC9vKMjat5WfDVp00AYsi-DLpB8Y"
                    rootProps={{ 'data-testid': '2' }}
                />
                    
                </View>
                <View style={styles.slideContainer}>
                    <Text>TITLE 2</Text>
                    
                </View>
                <View style={styles.slideContainer}>
                    <Text>TITLE 3</Text>
                    
                </View>
            </Swiper>
        </View>
        
    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: screenHeight*0.8,
    },
    slideContainer: {
        flex: 1,
        paddingHorizontal:10,
        backgroundColor: '#e8eaec',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    chart: {

    },
});

const textStyles = StyleSheet.create({
    title: {
        fontSize: standardFontSize * 1.2,
        padding: 3
    }
});

KoreaCharts.propTypes = {

};

export default KoreaCharts;