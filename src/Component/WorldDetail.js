import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import { screenHeight, numberWithCommas, screenWidth, standardFontSize } from '../constant';
import Country from './Country';
import DatePicker from './DatePicker';
import RegionPicker from './RegionPicker';
import moment from 'moment';
import Loading from './Loading';

const WorldDetail= ({countryData, onChangeCountry, onChangeDate, countryList, loading}) => {

    const onDateChange = (item) => {
        onChangeDate(item)
    }

    const onCountryChange = (item) => {
        onChangeCountry(item)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={textStyles.header}>국가별 세부현황 조회</Text>
            </View>
            <View style={{marginBottom: 10, zIndex: 1}}>
                <View style={styles.dropContainerStyle}>
                    <RegionPicker 
                        onChange={onCountryChange}
                        defaultRegion={null}
                        dropItems={countryList}
                        placeholder='국가를 선택하세요'
                        />
                    
                </View>
                <View style={{zIndex:1}}>
                    <DatePicker onChange={onDateChange}/>
                </View>
            </View>
            {
                loading && <Loading/>
            }
            {
                !loading && <Country countryData={countryData} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 10, height: screenHeight*0.5},
    header: {
        backgroundColor:'#F8F9F9',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
        height: screenHeight*0.06,
    },
    dropContainerStyle: {
        flex: 1,
        zIndex: 2,
    },
});

const textStyles = StyleSheet.create({
    header: {
        fontSize: 15,
        fontWeight: '600',
        color: 'red'
    }
});

WorldDetail.propTypes = {
};

export default WorldDetail;

