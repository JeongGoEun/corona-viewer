import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import { standardFontSize, screenHeight, koreaDropdownItems } from '../constant';
import RegionPicker from './RegionPicker'
 
import PropTypes from 'prop-types';
import Region from './Region';


const KoreaRegions = ({ regionsData }) => {
    const [country, setCountry] = useState('seoul')
    
    const onChange = (item) => {
        //console.log(item);
        getRegionComponents(item.value)
        setCountry(item.value)
    }

    const getRegionComponents = (key) => {
        //console.log('getRegionComponents', regionsData[key]);
        return <Region regionData={regionsData[key]}/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.localTitle}>
                <Text style={textStyles.localTitle}>지역별 세부현황</Text>
            </View>
            <View style={styles.dropContainerStyle}>
                <RegionPicker dropItems={koreaDropdownItems} onChange={onChange} defaultRegion='seoul'/>
            </View>
            <View>
                {getRegionComponents(country)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        height: screenHeight*0.5,

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
    dropContainerStyle: {
        flex:1,
        zIndex: 1,
    }
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

