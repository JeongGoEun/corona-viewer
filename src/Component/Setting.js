import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Linking, View } from 'react-native';
import { standardFontSize, screenHeight, coronaSourceInfo, coronaReferenceInfo, screenWidth } from '../constant';
import Icon from 'react-native-vector-icons/FontAwesome';


const Setting = () => {
    const [state, setState] = useState(false);

    const sourceComponents = coronaSourceInfo.map((data) => {
            return <TouchableOpacity onPress={() => Linking.openURL(data.url)} style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="home" size={25} color='gray' />
                        <Text> {data.name} </Text>
                    </TouchableOpacity>
    })

    const referenceComponents = coronaReferenceInfo.map((data) => {
        return <TouchableOpacity onPress={() => Linking.openURL(data.url)} style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name="home" size={25} color='gray'/>
                    <Text> {data.name} </Text>
                </TouchableOpacity>
    })

    return (
        <View style={styles.container}>
            <View style={styles.container}>               
                <View style={styles.sourceContainer}>
                    <View style={styles.header}>
                        <Text style={[textStyles.title, textStyles.commonFont]}>Data Source</Text>
                    </View>
                    <View style={styles.componentsContainer}>{sourceComponents}</View>                
                </View>
                
                <View style={styles.sourceContainer}>
                    <View style={styles.header}>
                        <Text style={[textStyles.title, textStyles.commonFont]}>Reference</Text>
                    </View>                    
                    <View style={styles.componentsContainer}>{referenceComponents}</View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 10,
    },
    header: {
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
        backgroundColor: '#B5BBC4',
        flexDirection: 'row',
        justifyContent: 'center',
        height: screenHeight*0.05,
        width: screenWidth*0.4,
        alignItems: 'center',
        position: 'absolute',
        zIndex: 10,
        marginLeft: 8
    },
    sourceContainer: {
        flex: 1,
        borderRadius: 15,
        margin: 10,
    },
    componentsContainer: {
        padding: 20,
        marginTop: 20,
        backgroundColor: 'white',
    }
});

const textStyles = StyleSheet.create({
    title: {
        fontSize: standardFontSize * 1.4,
        padding: 3
    },
    commonFont: {
        fontWeight: '600',
    },
});

Setting.propTypes = {
};

export default Setting;