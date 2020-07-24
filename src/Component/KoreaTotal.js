import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
            <Text style={[textStyles.title, textStyles.commonFont]}>국내 현황판</Text>
            <View style={{margin:'2%'}} />
            <Infected totalCase={totalData.TotalCase} totalCaseBefore={totalData.TotalCaseBefore}/>
            <View style={{margin:'1%'}} />
            <Healed totalRecovered={totalData.TotalRecovered} todayRecovered={totalData.TodayRecovered}/>
            <View style={{margin:'1%'}} />
            <Dead totalDeath={totalData.TotalDeath} todayDeath={totalData.TodayDeath}/>
            <View style={{margin:'1%'}} />
            {/* <Healing/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        padding:30,
        paddingBottom: 0,
        backgroundColor: '#e8eaec'
    }
});

const textStyles = StyleSheet.create({
    commonFont: {
        fontWeight:'600'
    },
    title: {
        fontSize: standardFontSize*2.5
    }

});

KoreaTotal.propTypes = {
    totalData: PropTypes.shape({
        TotalCase: PropTypes.string,
        TotalCaseBefore: PropTypes.string,
        TodayRecovered: PropTypes.string,
        TotalRecovered: PropTypes.string,
        TotalDeath: PropTypes.string,
        TodayDeath: PropTypes.string
    })
};

export default KoreaTotal;

