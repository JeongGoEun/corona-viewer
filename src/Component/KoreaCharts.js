import React, { useEffect, useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Region from './Region';
import Swiper from 'react-native-swiper/src';

// example
import WorldTotal from '../Component/WorldTotal';
import WorldCountries from '../Component/WorldCountries';
import WorldChart from '../Component/WorldChart';

import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE, FONT_GREEN, FONT_RED } from '../constant';


const KoreaCharts = ({ chartData }) => {
    return (
        <Swiper style={styles.wrapper} showsButtons={true}>
            <View style={styles.slideContainer}>
                <WorldChart />
            </View>
            <View style={styles.slideContainer}>
                <WorldChart />
            </View>
            <View style={styles.slideContainer}>
                <WorldChart />
            </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#e8eaec',
        height: screenHeight * 0.8,
    },
    slideContainer: {
        flex: 1,
        backgroundColor: '#e8eaec',
        borderWidth: 1,
        borderRadius: 5,
        paddingTop: 20,
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

KoreaCharts.propTypes = {

};

export default KoreaCharts;