import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import KoreaCorona from './src/Container/KoreaCorona';

export default function App() {
    return (
        <View style={styles.container}>
            <KoreaCorona />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
