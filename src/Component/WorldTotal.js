import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { serverUrl, totalCorona } from '../url';
import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE } from '../constant'; 
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Infected from './Infected';
import Healed from './Healed';
import Dead from './Dead';
import Healing from './Healing';

const WorldTotal = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[textStyles.title, textStyles.commonFont]}>세계 현황판</Text>
            </View>
            <View style={{margin:'1%'}} />
            <View style={styles.row}>
                <Text style={textStyles.updateTime}>코로나바이러스감염증-19 세계 발생현황 (8.7 00시 기준)</Text>
                <TouchableOpacity style={styles.refresh}>
                        <Icon
                            name="refresh"
                            size={10}
                            color='black'/>
                </TouchableOpacity>
            </View>
            <View style={{margin:'1%'}} />
            <Infected totalCase='1,112,211' totalCaseBefore='10' title='전세계 확진자' />
            <View style={{margin:'1%'}} />
            <Healed totalRecovered='5,312' todayRecovered='3' title='전세계 완치자' />
            <View style={{margin:'1%'}} />
            <Dead totalDeath='500,951' todayDeath='10' title='전세계 사망자' />
            <View style={{margin:'1%'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding:5,
        paddingBottom: 0,
        backgroundColor: '#e8eaec'
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        height: screenHeight*0.08,
        alignItems: 'center'
    },
    refresh: {
        justifyContent: 'center'
    }
});

const textStyles = StyleSheet.create({
    commonFont: {
        fontWeight:'600'
    },
    title: {
        fontSize: standardFontSize*2.5
    },
    updateTime: {
        fontSize: standardFontSize*0.8
    }

});

WorldTotal.propTypes = {
};

export default WorldTotal;