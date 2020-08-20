import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import { screenHeight } from '../constant';

const Loading= () => {

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white',
        height: screenHeight*0.25,
        width: '100%',
        marginBottom: 30,
        borderRadius: 7,
        justifyContent: 'center'
    },
});

const textStyles = StyleSheet.create({
});

export default Loading;

