import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WorldTotal from '../Component/WorldTotal';
import WorldChart from '../Component/WorldChart';

const WorldCorona = () => {

    return (
        <View style={styles.container}>
            <WorldTotal />
            <WorldChart />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WorldCorona;