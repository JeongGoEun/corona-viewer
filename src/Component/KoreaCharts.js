import React, { useEffect, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Region from './Region';
import Swiper from 'react-native-swiper/src';
import { Chart } from "react-google-charts";
import { standardFontSize, screenHeight, screenWidth } from '../constant';
import { ProgressBar } from 'react-native-multicolor-progress-bar';
import { ScrollView } from 'react-native-gesture-handler';

// for test
import { koreaDataByRegion } from '../sampleData';

/**
 * @param { Object } regionsData 지역별 코로나 현황 데이터
 * @param { Array } daysData 일일별 코로나 확진자 수 데이터
 */
const KoreaCharts = ({ regionsData, daysData }) => {
    // for test
    //const chartData = koreaDataByRegion;
    const chartData = regionsData;

    const koreaMarkerdata = Object.keys(chartData).slice(3, 20).map((key) => {
        return [
            chartData[key].countryName,
            parseInt(chartData[key].totalCase.replace(",", "")),
            parseInt(chartData[key].recovered.replace(",", ""))
        ];
    }).sort((a, b) => b[1] - a[1]).filter(word => word[0] != '검역');

    const koreaBarchartData = Object.keys(chartData).map((key) => {
        var total = parseInt(chartData[key].totalCase.replace(",", ""));
        var recover = parseInt(chartData[key].recovered.replace(",", ""));
        var death = parseInt(chartData[key].death.replace(",", ""));
        return [
            chartData[key].countryName,
            total,
            recover,
            death
        ];
    }).sort((a, b) => b[1] - a[1]).filter(word => word[0] != '검역').slice(0, 5); //TOP 5

    const getProgressCharts = Object.keys(chartData).map((key) => {
        var total = parseInt(chartData[key].totalCase.replace(",", ""));
        var recover = parseInt(chartData[key].recovered.replace(",", ""));
        var death = parseInt(chartData[key].death.replace(",", ""));
        var isolation = total - (recover + death);

        return [
            <View style={styles.progressContainer} key={chartData[key].countryName}>
                <Text style={{fontWeight: '600'}}>[{chartData[key].countryName}] {total}명</Text>
                <View style={{flexDirection:'row', marginVertical: 3}}>
                    <Text style={textStyles.progressText}>( 격리자수: {isolation} / </Text>
                    <Text style={textStyles.progressText}>완치자수: {recover} / </Text>
                    <Text style={textStyles.progressText}>사망자수: {death} )</Text>
                </View>
                <ProgressBar
                    backgroundBarStyle={{ height: 15 }}
                    arrayOfProgressObjects={[
                        {
                            color: '#F4D03F',
                            value: isolation / total,
                        },
                        {
                            color: '#1ABC9C',
                            value: recover/total,
                        },
                        {
                            color: '#E74C3C',
                            value: death/total,
                        },
                    ]}
                />
            </View>
        ];
    })

    return (
        <View style={styles.wrapper}>
            <View style={styles.header}>
                <Text style={textStyles.header}>지역별 상세현황 차트</Text>
            </View>
            <Swiper showsButtons showsPagination={false}>
                <ScrollView style={{height: screenHeight * 0.7}}>
                    {getProgressCharts}
                </ScrollView>

                <View style={styles.chartContainer}>
                    <Text style={textStyles.title}>한국 지역 코로나 발생 수 TOP 5</Text>
                    <Chart
                        width='100%'
                        height='100%'
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['지역', '확진자', '완치자', '사망자'],
                            ...koreaBarchartData
                        ]}
                        options={{
                            chartArea: { width: '75%' },
                            legend: { position: 'top' },
                            hAxis: {
                                minValue: 0,
                            },
                        }}
                        rootProps={{ 'data-testid': '3' }}
                    />
                </View>

                <View style={styles.chartContainer}>
                    <Text style={textStyles.title}>한국 확진자수 Geo chart</Text>
                    <Chart
                        width='100%'
                        height='100%'
                        chartType="GeoChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['City', '확진자', '완치자'],
                            ...koreaMarkerdata
                        ]}
                        options={{
                            region: 'KR',
                            colorAxis: { colors: ['#FADBD8', '#EC7063', '#B03A2E'] },
                            backgroundColor: '#fff',
                            datalessRegionColor: '#85C1E9',
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
        height: screenHeight*0.7,
        padding: 10,
        marginVertical: 20,
    },
    header: {
        backgroundColor:'#F8F9F9',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
        height: screenHeight*0.06,
    },
    chartContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight * 0.6,
    },
    progressContainer:{
        backgroundColor:'#fff',
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
});

const textStyles = StyleSheet.create({
    title: {
        fontSize: standardFontSize * 1.2,
        padding: 3
    },
    header: {
        fontSize: 15,
        fontWeight: '600',
        color: 'red'
    },
    progressText:{
        fontSize: 5,
        color: '#808B96',
    },
});

KoreaCharts.propTypes = {

};

export default KoreaCharts;