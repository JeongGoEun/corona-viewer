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
            <View style={styles.body}>
                
                <TouchableOpacity onPress={() => setShowPreventionRule(true)}>
                    <Image source={require('../../assets/prevention.png')} style={styles.modalImage}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setSymptom(true)}>
                    <Image source={require('../../assets/symptom.png')} style={styles.modalImage}/>
                </TouchableOpacity>
            </View>
            {showPreventionRule && <PreventionRuleModal modalClose={()=>setShowPreventionRule(false)}/>}
            {showSymptom && <SymptomModal modalClose={()=>setSymptom(false)}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        height: screenHeight * 0.1,
        alignItems: 'center'
    },
    image: {
        width: 40,
        height: 40
    },
    modalImage: {
        width: screenWidth*0.45,
        height: screenWidth*0.45,
        backgroundColor: 'white',
        borderRadius: 10
    },
    body: {
        padding: 10,
        marginTop: 3,
        backgroundColor: '#f9fbfd',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection:'row'
    },
});

const textStyles = StyleSheet.create({
    header: {
        fontSize: standardFontSize * 2.6,
        color: '#5f76e8'
    },
    desc: {
        fontSize: standardFontSize * 1.2
    }
});

Home.propTypes = {
};

export default Home;

