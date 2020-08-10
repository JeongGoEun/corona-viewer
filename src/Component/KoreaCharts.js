import React, { useEffect, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Region from './Region';
import Swiper from 'react-native-swiper/src';
import { Chart } from "react-google-charts";

// example
import { koreaDataByRegion } from '../sampleData';

import { standardFontSize, screenHeight, screenWidth } from '../constant';


const KoreaCharts = ({ regionsData, totalData }) => {
    
    // for test
    //const chartData = koreaDataByRegion;
    const chartData = regionsData;

    // 한국 지역 코로나 데이터 - map의 value들을 arr로 변환해서
    const koreaMarkerdata = Object.keys(chartData).slice(3,20).map((key) => {
        return [
            chartData[key].countryName, 
            parseInt(chartData[key].totalCase.replace(",","")),
            parseInt(chartData[key].recovered.replace(",",""))
        ];
    }).sort((a, b) => b[1] - a[1]).filter(word => word[0] != '검역');

    const koreaBarchartData = Object.keys(chartData).map((key) => {
        var total = parseInt(chartData[key].totalCase.replace(",",""));
        var recover = parseInt(chartData[key].recovered.replace(",",""));
        var death = parseInt(chartData[key].death.replace(",",""));
        return [
            chartData[key].countryName,
            total,
            recover,
            death
        ];
    }).sort((a,b) => b[1]-a[1]).filter(word => word[0] != '검역').slice(0,5); //TOP 5

    console.log('KoreaCharts: ', koreaMarkerdata, koreaBarchartData);

    return (
        <View style={styles.wrapper}>
            <Swiper showsButtons={true}>
                <View style={styles.slideContainer}>
                    <Text style={textStyles.title}>한국 확진자수 Geo chart</Text>
                    <Chart
                        width={screenWidth * 0.8}
                        height={screenHeight * 0.7}
                        chartType="GeoChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Country', 'Value'],
                            ['KR-11', 36],
                            ['KR-26', 10],
                            //...koreaMarkerdata
                        ]}
                        options={{
                            region: 'KR',
                            colorAxis: { colors: ['#FDF5E6', '#FFE4E1', '#DA70D6'] },
                            backgroundColor: '#fff',
                            datalessRegionColor: '#FFFAFA',
                            defaultColor: '#f5f5f5',
                            displayMode: 'regions'
                        }}
                        mapsApiKey="AIzaSyBMdWulC9vKMjat5WfDVp00AYsi-DLpB8Y"
                        rootProps={{ 'data-testid': '4' }}
                    />
                </View>

                <View style={styles.slideContainer}>
                    <Chart
                        width={screenWidth * 0.8}
                        height={screenHeight * 0.8}
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['지역', '확진자', '완치자', '사망자'],
                            ...koreaBarchartData
                        ]}
                        options={{
                            title: '한국 지역 코로나 발생 수 TOP 5',
                            chartArea: { width: '50%' },
                            hAxis: {
                                minValue: 0,
                            },
                        }}
                        rootProps={{ 'data-testid': '3' }}
                    />
                </View>

                <View style={styles.slideContainer}>
                    <Text style={textStyles.title}>한국 확진자수 Geo chart</Text>
                    <Chart
                        width={screenWidth * 0.8}
                        height={screenHeight * 0.7}
                        chartType="GeoChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['City', '확진자', '완치자'],
                            ...koreaMarkerdata
                        ]}
                        options={{
                            region: 'KR',
                            colorAxis: { colors: ['#FDF5E6', '#FFE4E1', '#DA70D6'] },
                            backgroundColor: '#fff',
                            datalessRegionColor: '#FFFAFA',
                            defaultColor: '#f5f5f5',
                            displayMode: 'markers'
                        }}
                        mapsApiKey="AIzaSyBMdWulC9vKMjat5WfDVp00AYsi-DLpB8Y"
                        rootProps={{ 'data-testid': '2' }}
                    />
                </View>
            </Swiper>
        </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        height: screenHeight * 0.8,
        padding: 10,
        backgroundColor: '#e8eaec'
    },
    slideContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
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