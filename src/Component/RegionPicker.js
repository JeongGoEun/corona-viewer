import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { standardFontSize, screenHeight, screenWidth } from '../constant';

import PropTypes from 'prop-types';
import Region from './Region';
import DropDownPicker from 'react-native-dropdown-picker'
import DateTimePicker from '@react-native-community/datetimepicker';

const RegionPicker = ({ dropItems, onChange, defaultRegion, placeholder='지역' }) => {

    return (
        <View>
            <DropDownPicker
                items={dropItems}
                searchablePlaceholder="검색하세요."
                searchableError={() => <Text>일치하는 결과가 없습니다.</Text>}
                searchable={true}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: '#fafafa' }}
                defaultValue={defaultRegion}
                placeholder={placeholder}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => onChange(item)}
            />
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

RegionPicker.propTypes = {
    regionsData: PropTypes.object
};

export default RegionPicker;

