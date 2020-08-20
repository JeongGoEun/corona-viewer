import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { standardFontSize, screenHeight} from '../constant'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Infected from './Infected';
import Healed from './Healed';
import Dead from './Dead';

const WorldTotal = ({worldTotalData}) => {

    const today = new Date()

    const [dateText, setDateText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[textStyles.title, textStyles.commonFont]}>세계 현황판</Text>
            </View>
            <View style={{margin:'1%'}} />
            <View style={styles.textInput}>
                <TextInput 
                    onChangeText={text => setDateText(text)}
                    value={dateText}
                    style={{fontSize: standardFontSize*1.5, height: '100%'}}
                    placeholder='날짜를 입력하세요'
                    />
                <FontAwesome5 name="search" size={20} color='black' onPress={() => alert('조회')}/>
            </View>
            <View style={styles.row}>
                <Text style={textStyles.updateTime}>코로나바이러스감염증-19 세계 발생현황 {`${today.getMonth()+1}/${today.getDate()}일 기준`}</Text>
                <TouchableOpacity style={styles.refresh}>
                        <Icon
                            name="refresh"
                            size={10}
                            color='black'/>
                </TouchableOpacity>
            </View>
            <View style={{margin:'1%'}} />
            <Infected totalCase={worldTotalData?.allVirus} totalCaseBefore={worldTotalData?.changeVirus} title='전세계 확진자' />
            <View style={{margin:'1%'}} />
            <Healed totalRecovered={worldTotalData?.allRecovered} todayRecovered={worldTotalData?.changeRecovered} title='전세계 완치자' />
            <View style={{margin:'1%'}} />
            <Dead totalDeath={worldTotalData?.allDeaths} todayDeath={worldTotalData?.changeDeaths} title='전세계 사망자' />
            <View style={{margin:'1%'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        paddingBottom: 0,
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    header: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
        backgroundColor: '#F8F9F9',
        flexDirection: 'row',
        justifyContent: 'center',
        height: screenHeight*0.08,
        alignItems: 'center'
    },
    refresh: {
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: 'white',
        height: screenHeight*0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
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
    },
    dateText: {
        fontSize: standardFontSize*1.2
    }

});

WorldTotal.propTypes = {
};

export default WorldTotal;