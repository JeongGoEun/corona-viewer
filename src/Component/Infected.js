import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { serverUrl, totalCorona } from '../url';
import { standardFontSize, screenHeight, FONT_GRAY, FONT_ORANGE } from '../constant'; 
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const Infected = ({totalCase = 0, totalCaseBefore = 0, title='국내 확진자'}) => {

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.row}>
                    <Text style={[FONT_ORANGE, textStyles.commonFont, textStyles.totalCase]}>{totalCase}명</Text>
                    <View style={{margin:'2%'}} />
                    <View style={styles.totalCaseBefore}>
                        <Text style={textStyles.totalCaseBefore}>{totalCaseBefore>0? `+${totalCaseBefore}` : totalCaseBefore}명</Text>
                    </View>
                </View>
                <Text style={[textStyles.desc,FONT_GRAY]}>
                    {title}
                </Text>
            </View>
            <View style={styles.icon}>
                <Icon
                    name="ambulance"
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
        backgroundColor:FONT_ORANGE.color,
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

Infected.propTypes = {
    infectedData: PropTypes.shape({
        TotalCase: PropTypes.string,
        TodayRecovered: PropTypes.string,
        TotalRecovered: PropTypes.string,
        TotalDeath: PropTypes.string,
        TodayDeath: PropTypes.string
    })
};

export default Infected;