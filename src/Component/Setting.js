import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import { standardFontSize } from '../constant';

const Setting = () => {

    return (
        <ScrollView>
            <View style={styles.chart}>
                <Text style={textStyles.title}>한국 확진자수 증가추이</Text>
                <Chart
                    width='100%'
                    height='100%'
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['x', '한국 확진자수', '전일대비', '사망자', '완치자'],
                        [0, 0, 0, 15, 15],
                        [1, 10, 5, 15, 15],
                        [2, 23, 15, 15, 15],
                        [3, 17, 9, 15, 15],
                        [4, 18, 10, 15, 15],
                        [5, 9, 5, 15, 15],
                        [6, 11, 3, 15, 15],
                        [7, 27, 19, 15, 15],
                    ]}

                    options={{
                        legend: { position: 'top' },
                        chartArea: { 'width': '80%', 'height': '80%' },
                        series: {
                            1: { curveType: 'function' },
                        }
                    }}
                    rootProps={{ 'data-testid': '10' }}
                />
            </View>
            <View style={styles.chart}>
                <Text style={textStyles.title}>한국 확진자수 Geo chart</Text>
                <Chart
                    //width={'470px'}
                    //height={'270px'}
                    chartType="GeoChart"
                    data={[
                        ['City', '확진자', '완치자'],
                        ['서울', 36, 10],
                        ['부산', -8, 1],
                        ['대구', 6, 10],
                        ['대전', -24, 10],
                        ['광주', 12, 1],
                        ['인천', -3, 10],
                        ['울산', 3, 10],
                        ['충북', 28, 1],
                        ['충남', 15, 1],
                        ['강원', 4, 10],
                        ['경기', 35, 1],
                        ['경북', 12, 10],
                        ['경남', -12, 1],
                        ["전북", 6, 10],
                        ['전남', -3, 10],
                        ['제주', 12, 1],
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
            <View style={styles.chart}>
                <Chart
                    //width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['City', '확진자'],
                        ['서울특별시', 36],
                        ['충청북도', 28],
                        ['충청남도', 15],
                        ['강원도', 4],
                        ['경기도', 35],
                        ['경상북도', 12],
                        ['경상남도', 12],
                        ["전라북도",  10],
                        ['전라남도',  10],
                        ['제주특별시', 1],
                        ['세종특별자치시',  10],
                    ]}
                    options={{
                        title: '한국 확진자수 Pie chart',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    chart: {
        margin: 5,
        backgroundColor: 'white',
        padding: 10,
    }
});

const textStyles = StyleSheet.create({
    title: {
        fontSize: standardFontSize * 1.2,
        padding: 3
    }
});

Setting.propTypes = {
};

export default Setting;

/**
 * ['City', '확진자'],
    ['서울', 36],
    ['부산', 8],
    ['대구', 6],
    ['대전', 24],
    ['광주', 12],
    ['인천', 3],
    ['울산', 3],
    ['충청북도', 28],
    ['충청남도', 15],
    ['강원', 4],
    ['경기', 35],
    ['경상북도', 12],
    ['경상남도', 12],
    ["전라북도",  10],
    ['전라남도',  10],
    ['제주', 1],
    ['세종',  10],
 */