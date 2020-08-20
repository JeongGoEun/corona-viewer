import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, CheckBox } from 'react-native';
import { standardFontSize, screenHeight, screenWidth, yearItems, monthItems, dayItems } from '../constant';

import PropTypes from 'prop-types';
import Region from './Region';
import DropDownPicker from 'react-native-dropdown-picker'

const DatePicker = ({ onChange }) => {
    //const today = new Date();
    //console.log(today.getFullYear(), today.getDate(), today.getMonth()+1);

    return (
        <View style={styles.container}>
            <Text style={textStyles.localTitle}>날짜</Text>
            <View style={{ flex: 5, flexDirection: 'row' }}>
                <DropDownPicker
                    items={yearItems}
                    containerStyle={{ height: 35, flex: 3 }}
                    style={{ backgroundColor: '#fafafa' }}
                    placeholder='-'
                    //defaultValue={today.getFullYear()}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => { onChange(item) }}
                    zIndex={-1}
                />
                <Text style={{textAlign: 'center'}}> 년 </Text>
                <DropDownPicker
                    items={monthItems}
                    containerStyle={{ height: 35, flex: 2 }}
                    style={{ backgroundColor: '#fafafa' }}
                    placeholder='-'
                    //defaultValue={today.getMonth()+1}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => onChange(item)}
                    zIndex={-1}
                />
                <Text> 월 </Text>

                <DropDownPicker
                    items={dayItems}
                    containerStyle={{ height: 35, flex: 2 }}
                    style={{ backgroundColor: '#fafafa' }}
                    placeholder='-'
                    //defaultValue={today.getDate()}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                    onChangeItem={item => onChange(item)}
                    zIndex={-1}
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
        flex: 1,
        padding: 5,
    }
});

DatePicker.propTypes = {
    regionsData: PropTypes.object
};

export default DatePicker;

