import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { standardFontSize, screenHeight, screenWidth, yearItems, monthItems, dayItems } from '../constant';

import PropTypes from 'prop-types';
import Region from './Region';
import DropDownPicker from 'react-native-dropdown-picker'

const DatePicker = ({ onChange }) => {
    const today = new Date();
    console.log(today.getFullYear(), today.getDate(), today.getMonth()+1);

    return (
        <View style={styles.container}>
            <Text style={textStyles.localTitle}>날짜 </Text>
            <View style={{ flex: 5, flexDirection: 'row' }}>
                <DropDownPicker
                    items={yearItems}
                    containerStyle={{ height: 35, flex: 5 }}
                    style={{ backgroundColor: '#fafafa' }}
                    placeholder='-'
                    //defaultValue={today.getFullYear()}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => { onChange(item) }}
                />
                <Text> 년 </Text>
                <DropDownPicker
                    items={monthItems}
                    containerStyle={{ height: 35, flex: 5 }}
                    style={{ backgroundColor: '#fafafa' }}
                    placeholder='-'
                    //defaultValue={today.getMonth()+1}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => onChange(item)}
                />
                <Text> 월 </Text>

                <DropDownPicker
                    items={dayItems}
                    containerStyle={{ height: 35, flex: 5 }}
                    style={{ backgroundColor: '#fafafa' }}
                    placeholder='-'
                    //defaultValue={today.getDate()}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => onChange(item)}
                />
                <Text> 일 </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
});

const textStyles = StyleSheet.create({
    localTitle: {
        fontSize: 15,
        fontWeight: '600',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 10,
    }
});

DatePicker.propTypes = {
    regionsData: PropTypes.object
};

export default DatePicker;

