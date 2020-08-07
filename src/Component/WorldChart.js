import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import { standardFontSize } from '../constant';

const WorldChart= () => {

    return (
        <ScrollView style={styles.container}>
            <View style={styles.chart}>
                <Text style={textStyles.title}>전세계 확진자수 증가추이</Text>
                <Chart
                    width='100%'
                    height='100%'
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [{type: 'date'}, '확진자수', '사망자수', '완치자수'],
                        [new Date(2020, 1, 22), 555, 17, 28],
                        [new Date(2020, 1, 23), 580, 17, 28],
                        [new Date(2020, 1, 24), 590, 17, 28],
                        [new Date(2020, 1, 25), 515, 17, 28],
                        [new Date(2020, 1, 26), 1555, 17, 28],
                        [new Date(2020, 1, 27), 2555, 17, 28],
                        [new Date(2020, 1, 28), 5355, 17, 28],
                        [new Date(2020, 1, 29), 5155, 17, 28],
                        [new Date(2020, 1, 30), 5555, 17, 28],
                        [new Date(2020, 2, 1), 152, 17, 28],
                        [new Date(2020, 2, 2), 1512, 17, 28],
                        [new Date(2020, 2, 3), 5151, 17, 28],
                        [new Date(2020, 2, 4), 588, 17, 28],
                        [new Date(2020, 2, 5), 5125, 17, 28],
                        [new Date(2020, 2, 6), 2155, 17, 28],
                        [new Date(2020, 2, 7), 1555, 17, 28],
                        [new Date(2020, 2, 8), 5155, 17, 28],
                        [new Date(2020, 2, 9), 5515, 17, 28],
                        [new Date(2020, 2, 10), 5515, 17, 28],
                        [new Date(2020, 2, 11), 5515, 17, 28],
                        [new Date(2020, 2, 12), 1321, 17, 28],
                        [new Date(2020, 2, 13), 5515, 17, 28]
                    ]}
                    
                    options={{
                        legend: {position: 'top'},
                        chartArea: {'width':'80%', 'height':'80%'},
                        series: {
                            1: { curveType: 'function' },
                        }
                    }}
                    rootProps={{ 'data-testid': '10' }}/>
            </View>

            <View style={styles.chart}>
                <Text style={textStyles.title}>국가별 발병 세계 지도(클릭시 상세정보)</Text>
                <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType="GeoChart"
                    data={[
                        ['Country', 'Popularity'],
                        ['Germany', 200],
                        ['United States', 300],
                        ['Brazil', 400],
                        ['Canada', 500],
                        ['France', 600],
                        ['RU', 700],
                    ]}
                    options= {{
                        colorAxis: { colors: ['#ffe2ed', 'red'] }
                    }}
                    mapsApiKey="AIzaSyBMdWulC9vKMjat5WfDVp00AYsi-DLpB8Y"
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

