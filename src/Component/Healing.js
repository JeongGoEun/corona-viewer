import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { serverUrl, totalCorona } from '../url';
import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE, FONT_BLUE } from '../constant'; 
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const Healing = () => {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.row}>
                    <Text style={[FONT_BLUE, textStyles.commonFont, textStyles.totalCase]}>883명</Text>
                    <View style={styles.totalCaseBefore}>
                        <Text style={textStyles.totalCaseBefore}>-1명</Text>
                    </View>
                </View>
                <Text style={[textStyles.desc,FONT_GRAY]}>
                    국내 치료중
                </Text>
            </View>
            <View style={styles.icon}>
                <Icon
                    name="stethoscope"
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
        height: screenHeight*0.13,
        justifyContent:'center',
        padding:20
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
        backgroundColor:FONT_BLUE.color,
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
        fontSize:standardFontSize*3
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

Healing.propTypes = {
    healingData: PropTypes.shape({
        TotalCase: PropTypes.string,
        TodayRecovered: PropTypes.string,
        TotalRecovered: PropTypes.string,
        TotalDeath: PropTypes.string,
        TodayDeath: PropTypes.string
    })
};

export default Healing;

