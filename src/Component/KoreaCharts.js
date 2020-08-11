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

const KoreaCharts = ({ regionsData }) => {
    // for test
    const chartData = koreaDataByRegion;
    //const chartData = regionsData;

    // 한국 지역 코로나 데이터 - map의 value들을 arr로 변환해서
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
                    <Text style={styles.progressText}>( 격리자수: {isolation} / </Text>
                    <Text style={styles.progressText}>완치자수: {recover} / </Text>
                    <Text style={styles.progressText}>사망자수: {death} )</Text>
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
            <View style={styles.localTitle}>
                <Text style={textStyles.localTitle}>지역 별 상세현황</Text>
            </View>
            <Swiper showsButtons={true}>
                <ScrollView style={{height: screenHeight * 0.8}}>
                    {getProgressCharts}
                </ScrollView>

                <View style={styles.slideContainer}>
                    <Chart
                        width={screenWidth * 0.9}
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
                        //width={screenWidth * 0.8}
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
        height: screenHeight * 0.8,
        padding: 10,
        backgroundColor: '#e8eaec'
    },
    slideContainer: {
        flex: 1,
        padding: 10,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    progressContainer:{
        backgroundColor:'#fff',
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
    localTitle: {
        marginHorizontal: 20, 
        backgroundColor:'#F4F6F6', 
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    progressText:{
        fontSize: 5,
    },
    chart: {

    },
});

const textStyles = StyleSheet.create({
    title: {
        fontSize: standardFontSize * 1.2,
        padding: 3
    },
    localTitle: {
        fontSize: 15,
        fontWeight: 600,
        color: 'red'
    }
});

KoreaCharts.propTypes = {

};

export default KoreaCharts;