import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import { standardFontSize, screenHeight, screenWidth } from '../constant';

import PropTypes from 'prop-types';
import Region from './Region';
import DropDownPicker from 'react-native-dropdown-picker'

const RegionPicker = ({ dropItems, onChange, defaultRegion, placeholder='지역' }) => {
    return (
        <View style={styles.container}>
            <Text style={textStyles.localTitle}>지역 </Text>
            <DropDownPicker
                items={dropItems}
                searchablePlaceholder="검색하세요."
                searchableError={() => <Text>일치하는 결과가 없습니다.</Text>}
                searchable={true}
                containerStyle={{ height: 35, flex: 3 }}
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
        flex: 2,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
    },
});

const textStyles = StyleSheet.create({
    localTitle: {
        fontSize: 15,
        fontWeight: '600',
        flex: 1,
        padding: 5,
    }
});

RegionPicker.propTypes = {
    regionsData: PropTypes.object
};

export default RegionPicker;

