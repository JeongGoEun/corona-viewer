import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { serverUrl, totalCorona } from '../url';
import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE } from '../constant'; 
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Infected from './Infected';
import Healed from './Healed';
import Dead from './Dead';
import Healing from './Healing';

const KoreaTotal = ({totalData}) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[textStyles.title, textStyles.commonFont]}>국내 현황판</Text>
            </View>
            <View style={{margin:'1%'}} />
            <View style={styles.row}>
                <Text style={textStyles.updateTime}>{totalData?.updateTime}</Text>
                <TouchableOpacity style={styles.refresh}>
                        <Icon
                            name="refresh"
                            size={10}
                            color='black'/>
                    </TouchableOpacity>
            </View> 
            <View style={{margin:'1%'}} />
            <Infected totalCase={totalData.TotalCase} totalCaseBefore={totalData.TotalCaseBefore}/>
            <View style={{margin:'1%'}} />
            <Healed totalRecovered={totalData.TotalRecovered} todayRecovered={totalData.TodayRecovered}/>
            <View style={{margin:'1%'}} />
            <Dead totalDeath={totalData.TotalDeath} todayDeath={totalData.TodayDeath}/>
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
        padding:5,
        paddingBottom: 0,
        backgroundColor: '#e8eaec'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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

KoreaTotal.propTypes = {
    totalData: PropTypes.shape({
        updateTime: PropTypes.string,
        TotalCase: PropTypes.string,
        TotalCaseBefore: PropTypes.string,
        TodayRecovered: PropTypes.string,
        TotalRecovered: PropTypes.string,
        TotalDeath: PropTypes.string,
        TodayDeath: PropTypes.string
    })
};

export default KoreaTotal;