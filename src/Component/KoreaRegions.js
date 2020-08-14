import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { standardFontSize, screenHeight, screenWidth } from '../constant';

import PropTypes from 'prop-types';
import Region from './Region';
import DropDownPicker from 'react-native-dropdown-picker'

const KoreaRegions = ({ regionsData }) => {
    const [country, setCountry] = useState('')
    const [selectedDate, setDate] = useState('2020-08-14')

    return (
        <View style={styles.container}>
            <View style={styles.localTitle}>
                <Text style={textStyles.localTitle}>지역 별 세부현황</Text>
            </View>

            <Region regionData={regionsData.seoul}/>
            <Region regionData={regionsData.busan}/>
            <Region regionData={regionsData.daegu}/>
            <Region regionData={regionsData.incheon}/>
            <Region regionData={regionsData.gwangju}/>
            <Region regionData={regionsData.daejeon}/>
            <Region regionData={regionsData.ulsan}/>
            <Region regionData={regionsData.sejong}/>
            <Region regionData={regionsData.gyeonggi}/>
            <Region regionData={regionsData.gangwon}/>
            <Region regionData={regionsData.chungbuk}/>
            <Region regionData={regionsData.chungnam}/>
            <Region regionData={regionsData.jeonbuk}/>
            <Region regionData={regionsData.jeonnam}/>
            <Region regionData={regionsData.gyeongbuk}/>
            <Region regionData={regionsData.gyeongnam}/>
            <Region regionData={regionsData.jeju}/>
            <Region regionData={regionsData.quarantine}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    localTitle: {
        backgroundColor: '#F8F9F9',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
        height: screenHeight * 0.06,
    },
});

const textStyles = StyleSheet.create({
    localTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: 'red'
    }
});

KoreaRegions.propTypes = {
    regionsData: PropTypes.object
};

export default KoreaRegions;

