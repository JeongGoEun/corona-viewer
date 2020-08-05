import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Country from './Country';

const WorldCountries = () => {

    return (
        <View style={styles.container}>
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
            <Country />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#e8eaec',
        padding:30
    }
});

WorldCountries.propTypes = {
};

export default WorldCountries;

