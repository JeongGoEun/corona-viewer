import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Chart } from "react-google-charts";
import { standardFontSize } from '../constant';

// for CanvasJS
import CanvasJSReact from '../lib/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Setting = () => {

    return (
        <ScrollView>
            <View style={styles.chart}>
                <Text style={textStyles.title}>CanvasJS Test</Text>
                <CanvasJSChart 
                    options = {{
                        title: {
                            text: 'Basic chart'
                        },
                        data: [{
                            type: 'column',
                            dataPoints: [
                                { label: "Apple",  y: 10  },
                                { label: "Orange", y: 15  },
                                { label: "Banana", y: 25  },
                                { label: "Mango",  y: 30  },
                                { label: "Grape",  y: 28  }
                            ]
                        }]
                    }}
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