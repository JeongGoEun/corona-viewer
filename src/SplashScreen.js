import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import { screenHeight, standardFontSize } from './constant';
import TypeWriter from 'react-native-typewriter'

const SplashScreen = ({navigation}) => {


    
    const onTypingEnd = () => {
        setTimeout(() => {
            navigation.navigate('App')
        }, 1500);
    }

    return (
        <View style={styles.container}>
            <TypeWriter 
                typing={1}
                maxDelay={200}
                minDelay={200}
                onTypingEnd={onTypingEnd}
                style={textStyles.title}>GoodBye Corona!</TypeWriter>
            <Image source={require('../assets/splashLogo.png')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121b34'
    },
    image: {
        height: screenHeight*0.5,
        width: screenHeight*0.5
    }
});

const textStyles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: standardFontSize*2
    }
});

SplashScreen.propTypes = {
};

export default SplashScreen;

