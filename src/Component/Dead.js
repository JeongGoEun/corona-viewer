import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { serverUrl, totalCorona } from '../url';
import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE, FONT_GREEN, FONT_RED, numberWithCommas } from '../constant'; 
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dead = ({totalDeath = 0, todayDeath = 0, title='국내 사망자'}) => {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.row}>
                    <Text style={[FONT_RED, textStyles.commonFont, textStyles.totalCase]}>{numberWithCommas(totalDeath)}명</Text>
                    <View style={{margin:'2%'}} />
                    <View style={styles.totalCaseBefore}>
                        <Text style={textStyles.totalCaseBefore}>{todayDeath>0? `+${numberWithCommas(todayDeath)}` : numberWithCommas(todayDeath)}명</Text>
                    </View>
                </View>
                <Text style={[textStyles.desc,FONT_GRAY]}>
                    {title}
                </Text>
            </View>
            <View style={styles.icon}>
                <Icon
                    name="bed"
                    size={25}
                    color={FONT_GRAY.color}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: screenHeight*0.12,
        justifyContent:'center',
        padding:20,
        borderRadius: 7,
    },
    left: {
        flex: 9,
        justifyContent:'center'
    },
    row: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    totalCaseBefore: {
        justifyContent:'center',
        backgroundColor:FONT_RED.color,
        borderRadius:30, padding: 3
    },
    icon: {
        flex: 1, 
        justifyContent:'center'
    }
});

const textStyles = StyleSheet.create({
    commonFont: {
        fontWeight:'600'
    },
    totalCase: {
        fontSize:standardFontSize*2.5
    },
    totalCaseBefore: {
        color:'white',
        marginLeft:5,
        marginRight: 5,
        fontSize:standardFontSize*1.2
    },
    desc: {
        fontSize:standardFontSize*1.2
    }

});

Dead.propTypes = {
    
};

export default Dead;

