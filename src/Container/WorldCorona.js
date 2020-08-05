import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WorldTotal from '../Component/WorldTotal';
import WorldCountries from '../Component/WorldCountries';

const WorldCorona = () => {

    return (
        <ScrollView style={styles.container}>
            <WorldTotal />
            <WorldCountries />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WorldCorona;