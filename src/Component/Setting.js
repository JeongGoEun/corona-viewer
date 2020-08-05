import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Setting = () => {

    return (
        <View style={styles.container}>
            <Text>Setting화면</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const textStyles = StyleSheet.create({
});

Setting.propTypes = {
};

export default Setting;

