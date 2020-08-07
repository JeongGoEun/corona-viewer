import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { standardFontSize } from '../constant';

const ChartLoading= () => {

    return (
        <View style={styles.container}>
            <Text style={textStyles.loadingText}>차트 로딩중....</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const textStyles = StyleSheet.create({
    loadingText: {
        fontSize: standardFontSize*1.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ChartLoading;

