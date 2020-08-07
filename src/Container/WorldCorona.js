import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WorldTotal from '../Component/WorldTotal';
import WorldCountries from '../Component/WorldCountries';
import WorldChart from '../Component/WorldChart';

const WorldCorona = () => {

    return (
        <ScrollView style={styles.container}>
            <WorldTotal />
            <WorldChart />
            {/* <WorldCountries /> */}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WorldCorona;