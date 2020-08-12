import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import { screenHeight } from './constant';

const SplashScreen = ({navigation}) => {

    useEffect(()=> {
        setTimeout(() => {
            alert('Hi');
        }, 3000);
    },[])
    

    return (
        <View style={styles.container}>
            <Image source={require('../assets/splashLogo.png')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: screenHeight*0.5,
        width: screenHeight*0.5
    }
});

const textStyles = StyleSheet.create({
});

SplashScreen.propTypes = {
};

export default SplashScreen;

