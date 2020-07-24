import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Region from './Region';

const KoreaRegions = ({regionsData}) => {

    return (
        <View style={styles.container}>
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
        backgroundColor:'#e8eaec',
        padding:30
    }
});

KoreaRegions.propTypes = {
    regionsData: PropTypes.object
};

export default KoreaRegions;

