import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import { standardFontSize } from '../constant';

const Setting = () => {

    return (
        <ScrollView>
            <View style={styles.chart}>
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
                    title: '한국 확진자수 증가추이',
                    legend: {position: 'top'},
                    chartArea: {'width':'80%', 'height':'80%'},
                    series: {
                        1: { curveType: 'function' },
                    }
                }}
                rootProps={{ 'data-testid': '10' }}
                />
            </View>
                <Chart
                    width={'150%'}
                    height={'200%'}
                    chartType="GeoChart"
                    // chartLanguage='ko'
                    data={[
                        ['City', '확진자', '완치자'],
                        ['서울', 3, 1],
                        ['부산', 2, 2],
                        ['충청북도', 1, 20],
                        ['충청남도', 20, 20]
                        
                    ]}
                    options={{
                        title: '지역별 현황',
                        region: 'KR',
                        displayMode: 'markers',
                        sizeAxis: { minValue: 1, maxValue: 3 },
                        colorAxis: { colors: ['#ffe2ed', 'red'] },
                    }}
                    mapsApiKey='AIzaSyBMdWulC9vKMjat5WfDVp00AYsi-DLpB8Y'
                    rootProps={{ 'data-testid': '2' }}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    chart: {
        margin: 5
    }
});

const textStyles = StyleSheet.create({
});

Setting.propTypes = {
};

export default Setting;

