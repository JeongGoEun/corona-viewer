import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import { standardFontSize } from '../constant';
import { worldDataByDate, worldDataByRegion } from '../sampleData';
import ChartLoading from './ChartLoading';

const WorldChart= () => {

    const worldMapData = worldDataByRegion.map((data) => {
        return [data.Name, data['확진자수']]
    })

    const worldRankData = worldDataByRegion.slice(0,4).map((data, index) => {
        return [data.Name, data['확진자수'], data['사망자수'], data['완치자수']]
    })

    console.log(worldRankData)
    
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.chart}>
                <Text style={textStyles.title}>국가별 발병 세계 지도(클릭시 상세정보)</Text>
                <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="GeoChart"
                    loader={<ChartLoading/>}
                    data={[
                        ['Country', '확진자'],
                        ...worldMapData
                    ]}
                    options= {{
                        colorAxis: { colors: ['#ffe2ed', 'red'] }
                    }}
                    mapsApiKey="AIzaSyBMdWulC9vKMjat5WfDVp00AYsi-DLpB8Y"
                    rootProps={{ 'data-testid': '1' }}/>
            </View>

            <View style={styles.chart}>
                <Text style={textStyles.title}>전세계 확진자수 증가추이</Text>
                <Chart
                    width='100%'
                    height='100%'
                    chartType="LineChart"
                    loader={<ChartLoading/>}
                    data={worldDataByDate}
                    options={{
                        legend: {position: 'top'},
                        chartArea: {'width':'70%', 'height':'80%'},
                        series: {
                            1: { curveType: 'function' },
                        },
                        vAxis: {
                            ticks: [{v: 5000000, f: '500만명'}, {v: 10000000, f: '1000만명'}, {v: 15000000, f: '1500만명'}, {v: 20000000, f: '2000만명'}]
                        }
                    }}
                    rootProps={{ 'data-testid': '10' }}/>
            </View>

            <View style={styles.chart}>
                <Text style={textStyles.title}>TOP 5 발생국가</Text>
                <Chart
                    width='100%'
                    height='100%'
                    chartType="BarChart"
                    loader={<ChartLoading/>}
                    data={[
                        ['Country', '확진자수', '사망자수', '완치자수'],
                        ...worldRankData
                    ]}
                    options={{
                        chartArea: { width: '75%' },
                        legend: {position: 'top'},
                        hAxis: {
                            ticks: [{v: 1500000, f: '150만명'}, {v: 3000000, f: '300만명'},  {v: 4500000, f: '450만명'}]
                        }
                    }}
                    // For tests
                    rootProps={{ 'data-testid': '1' }}/>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    chart: {
        margin: 5,
        backgroundColor: 'white'
    }
});

const textStyles = StyleSheet.create({
    title: {
        fontSize:standardFontSize*1.2,
        padding: 3
    }
});

WorldChart.propTypes = {
};

export default WorldChart;

