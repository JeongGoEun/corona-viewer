import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE, FONT_ORANGE2, FONT_GREEN, FONT_RED, FONT_BLUE2, FONT_BLUE, numberWithCommas } from '../constant';

const Country = ({countryData}) => {

    return (
        <View>
        {
            countryData &&
            (
            <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={[textStyles.commonFont, textStyles.county]}>{countryData?.nation_name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={[textStyles.commonFont, FONT_GRAY]}>확진자: </Text>
                <Text style={[textStyles.commonFont, FONT_ORANGE]}>{numberWithCommas(countryData?.total_case)}명</Text>
                <Text style={[textStyles.commonFont, FONT_ORANGE2]}>[+{numberWithCommas(countryData?.new_case)}명]</Text>
            </View>
            <View style={styles.row}>
                <Text style={[textStyles.commonFont, FONT_GRAY]}>완치자: </Text>
                <Text style={[textStyles.commonFont, FONT_GREEN]}>{numberWithCommas(countryData?.total_recovered)}명</Text>
            </View>
            <View style={styles.row}>
                <Text style={[textStyles.commonFont, FONT_GRAY]}>사망자: </Text>
                <Text style={[textStyles.commonFont, FONT_RED]}>{numberWithCommas(countryData?.total_death)}명</Text>
            </View>
            <View style={styles.row}>
                <Text style={[textStyles.commonFont, FONT_GRAY]}>발생률: </Text>
                <Text style={[textStyles.commonFont, FONT_BLUE2]}>12%</Text>
            </View>
            </View>
            )
        }
        {
            !countryData &&
            <View style={[styles.container, {justifyContent: 'center'}]}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>검색결과가 없습니다.</Text>
                </View>
            </View>
        }
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white',
        height: screenHeight*0.25,
        width: '100%',
        marginBottom: 30,
        borderRadius: 7,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent:'flex-start',
        flex: 1.5,
        alignItems: 'center'
    },
    row: {
        flex: 0.8,
        flexDirection: 'row',
        justifyContent:'flex-start'
    },
    infoButton : {
        justifyContent: 'center'
    }
});

const textStyles =  StyleSheet.create({
    commonFont: {
        fontWeight:'600'
    },
    county: {
        fontSize: standardFontSize*1.8
    }, 
    info: {
        fontSize: standardFontSize*1.8,
        color: '#5f76e8'
    }
});

Country.propTypes = {
    countryData: PropTypes.object
};

export default Country;

