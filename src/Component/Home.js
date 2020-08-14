import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { standardFontSize, screenHeight, FONT_GRAY, screenWidth } from '../constant';
import PreventionRuleModal from '../Modal/PreventionRuleModal';
import SymptomModal from '../Modal/SymptomModal';

const Home = () => {

    const [showPreventionRule, setShowPreventionRule] = useState(false)
    const [showSymptom, setSymptom] = useState(false)


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.JPG')} style={styles.image} />
                <Text style={textStyles.header}>굿바이코로나</Text>
            </View>
            <View style={{paddingTop: 30}}>
                <View style={styles.gifContainer}>
                    <Image source={'https://vrthumb.imagetoday.co.kr/2020/03/06/tid264t000560.jpg'} style={[styles.gifImage]} />
                </View>

                <View style={styles.body}>
                    <View style={styles.touchableContainer}>
                        <TouchableOpacity onPress={() => setShowPreventionRule(true)}>
                            <Image source={require('../../assets/prevention.png')} style={[styles.modalImage, styles.preventionBorder]}/>
                        </TouchableOpacity>
                        <Text style={textStyles.touchableTitle}>예방수칙</Text>
                    </View>
                    
                    <View style={styles.touchableContainer}>
                        <TouchableOpacity onPress={() => setSymptom(true)}>
                            <Image source={require('../../assets/symptom.png')} style={[styles.modalImage, styles.symtomBorder]}/>
                        </TouchableOpacity>
                        <Text style={textStyles.touchableTitle}>증상</Text>
                    </View>
                </View>
            </View>
            {showPreventionRule && <PreventionRuleModal modalClose={()=>setShowPreventionRule(false)}/>}
            {showSymptom && <SymptomModal modalClose={()=>setSymptom(false)}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        height: screenHeight * 0.1,
        alignItems: 'center'
    },
    touchableContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f2f4',
        paddingVertical: 20,
    },
    gifContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    body: {
        marginTop: 20,
        padding: 10,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection:'row',
    },
    image: {
        width: 40,
        height: 40
    },
    modalImage: {
        width: screenWidth*0.4,
        height: screenWidth*0.4,
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 4,
    },
    gifImage: {
        width: screenWidth*1,
        height: screenWidth*0.6,
        marginHorizontal: 14,
        borderRadius: 10,
    },
    preventionBorder: {
        borderColor: '#F9E79F'
    },
    symtomBorder: {
        borderColor: '#F5B7B1'
    }
});

const textStyles = StyleSheet.create({
    header: {
        fontSize: standardFontSize * 2.6,
        color: '#5f76e8'
    },
    desc: {
        fontSize: standardFontSize * 1.2
    },
    touchableTitle: {
        fontWeight: '600',
        marginTop: 10,
    }
});

Home.propTypes = {
};

export default Home;

