import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import { screenHeight, standardFontSize } from './constant';
import TypeWriter from 'react-native-typewriter'

const SplashScreen = ({navigation}) => {

    navigation.navigate('App')
    
    const onTypingEnd = () => {
        setTimeout(() => {
            navigation.navigate('App')
        }, 1500);
    }

    return (
        <View style={styles.container}>
            <TypeWriter 
                typing={1}
                maxDelay={150}
                minDelay={150}
                onTypingEnd={onTypingEnd}
                style={textStyles.title}>GoodBye Corona!</TypeWriter>
            <Image 
                source={{uri: 'https://media.tenor.com/images/12300eb4fdf142fe46fbce62e1b74c0e/tenor.gif'}}  
                style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        height: screenHeight*0.5,
        width: screenHeight*0.5
    }
});

const textStyles = StyleSheet.create({
    title: {
        color: '#5F76E8',
        fontSize: standardFontSize*2,
        margin:20
    }
});

SplashScreen.propTypes = {
};

export default SplashScreen;

