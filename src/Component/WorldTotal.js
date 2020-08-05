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
            <View style={styles.row}>
                <Text style={[textStyles.title, textStyles.commonFont]}>세계 현황판</Text>
                <TouchableOpacity style={styles.refresh}>
                    <Icon
                        name="refresh"
                        size={20}
                        color='black'/>
                </TouchableOpacity>
            </View>
            <View style={{margin:'1%'}} />
            <Text style={textStyles.updateTime}>''</Text>
            <View style={{margin:'2%'}} />
            <Infected totalCase='1,112,211' totalCaseBefore='10' title='전세계 확진자' />
            <View style={{margin:'1%'}} />
            <Healed totalRecovered='5,312' todayRecovered='3' title='전세계 완치자' />
            <View style={{margin:'1%'}} />
            <Dead totalDeath='500,951' todayDeath='10' title='전세계 사망자' />
            <View style={{margin:'1%'}} />
            <Text  style={{textAlign: 'right'}} onPress={() => Linking.openURL('http://localhost:3000/')}>
                지도보기
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding:30,
        paddingBottom: 0,
        backgroundColor: '#e8eaec'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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