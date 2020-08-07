import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE, FONT_ORANGE2, FONT_GREEN, FONT_RED, FONT_BLUE2, FONT_BLUE } from '../constant';

const Country = () => {

    return (
        <View style={styles.container}>
            <View style={styles.titleRow}>
                <Text style={[textStyles.commonFont, textStyles.county]}>미국us</Text>
                <TouchableOpacity style={styles.infoButton}>
                    <Text style={[textStyles.commonFont, textStyles.info]}>(정보보기)</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={[textStyles.commonFont, FONT_GRAY]}>확진자: </Text>
                <Text style={[textStyles.commonFont, FONT_ORANGE]}>4,918,420명</Text>
                <Text style={[textStyles.commonFont, FONT_ORANGE2]}>[+47,451명]</Text>
            </View>
            <View style={styles.row}>
                <Text style={[textStyles.commonFont, FONT_GRAY]}>완치자: </Text>
                <Text style={[textStyles.commonFont, FONT_GREEN]}>2,481,680명</Text>
            </View>
            <View style={styles.row}>
                <Text style={[textStyles.commonFont, FONT_GRAY]}>사망자: </Text>
                <Text style={[textStyles.commonFont, FONT_RED]}>160,290명</Text>
            </View>
            <View style={styles.row}>
                <Text style={[textStyles.commonFont, FONT_GRAY]}>완치율: </Text>
                <Text style={[textStyles.commonFont, FONT_BLUE2]}>50.5%</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white',
        height: screenHeight*0.25,
        marginBottom: 30
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
};

export default Country;
