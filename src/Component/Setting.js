import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { standardFontSize } from '../constant';
import { koreaDataByDay } from '../sampleData';
import * as CSV from 'csv-string';

// //for CanvasJS
// import CanvasJSReact from '../lib/canvasjs.react';
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Setting = () => {
    // const [dailyData, setDailyData] = useState({confirmed: [], death: [], released: []});
    // const [dailyData, setDailyData] = useState({confirmed: [], death: [], released: []});


    // useEffect(() => {
    //     fetch('https://raw.githubusercontent.com/jooeungen/coronaboard_kr/master/kr_daily.csv',
    //         { method: 'get' }
    //     )
    //     .then(res => res.text())
    //     .then(res => {
    //             let result = CSV.parse(res)

    //             result.forEach((data, index) => {
    //                 if (index == 0 || index > 5) return;

    //                 let dayText = parseInt(data[0].substr(4, 2)) + '.' + data[0].substr(6, 2);
    //                 let diffConfirm = (index == 1) ? data[1] : (data[1] - result[index - 1][1]);
    //                 let diffdeath = (index == 1) ? data[2] : (data[2] - result[index - 1][2]);
    //                 let diffrelease = (index == 1) ? data[3] : (data[3] - result[index - 1][3]);

    //                 setDayData({
    //                     confirmed: dayData.confirmed.push({ y: parseInt(diffConfirm), label: dayText.toString()}),
    //                     death: dayData.death.push({y: parseInt(diffdeath), label: dayText.toString()}),
    //                     released: dayData.released.push({y: parseInt(diffrelease), label: dayText.toString()}) 
    //                 })
    //                 console.log(dayData.confirmed.length);

    //             })
    //         })
    //         .catch(err => console.log(err))
    // }, [])
    return (
        <View>
            {/* {dayData.confirmed.length == undefined && (<Text>Loading data</Text>)}
            {dayData.confirmed.length != undefined && (
                <ScrollView>
                <View style={styles.chart}>
                    <Text style={textStyles.title}>CanvasJS Test</Text>
                    <CanvasJSChart
                        options={{
                            animationEnabled: true,
                            toolTip: {
                                shared: true
                            },
                            data: [{
                                type: 'spline',
                                name: "확진자",
                                showInLegend: true,
                                dataPoints: [dayData.confirmed]
                                dataPoints: test
    
                            },
                            {
                                type: "spline",
                                name: "사망자",
                                showInLegend: true,
                                dataPoints: [dayData.death]
                            },
                            {
                                type: "spline",
                                name: "완치자",
                                showInLegend: true,
                                dataPoints: [dayData.released]
                            }]
                        }}
                    />
                </View>
            </ScrollView> 
            )} */}
        </View>
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