import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { standardFontSize, screenHeight } from '../constant';
import { koreaDataByDay } from '../sampleData';
import * as CSV from 'csv-string';

//https://github.com/Paraboly/react-native-card

const Setting = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[textStyles.title, textStyles.commonFont]}>데이터 출처</Text>
            </View>
            <View style={styles.sourceContainer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
    },
    header: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
        backgroundColor: '#F8F9F9',
        flexDirection: 'row',
        justifyContent: 'center',
        height: screenHeight*0.08,
        alignItems: 'center'
    },
    sourceContainer: {
        flex: 1,
        margin:20,
        borderRadius: 20,
        backgroundColor: 'white',
    }
});

const textStyles = StyleSheet.create({
    title: {
        fontSize: standardFontSize * 1.2,
        padding: 3
    },
    commonFont: {
        fontWeight: '600',
        fontSize: standardFontSize * 2.5,
    },
});

Setting.propTypes = {
};

export default Setting;