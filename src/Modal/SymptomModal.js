import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { standardFontSize, FONT_GRAY } from '../constant';
import Icon from 'react-native-vector-icons/AntDesign';


const SymptomModal= ({modalClose}) => {

    return (
        <View style={styles.container}>
            <View style={styles.area}>
                <TouchableOpacity style={styles.closeButton} onPress={modalClose}>
                    <Icon name="closecircleo" size={20} />
                </TouchableOpacity>
                <View style={styles.titleContainer2}>
                    <Text style={textStyles.title}>코로나19 증상</Text>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.col}>
                        <Text style={textStyles.normal}>공통적인 증상은 다음과 같습니다.</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={textStyles.bold}> - 발열, 마른기침, 피로감</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={textStyles.normal}>심각한 증상은 다음과 같습니다.</Text>
                    </View>
                    <View style={styles.col}>
                        <Text style={textStyles.bold}> - 호흡 곤란, 숨 가쁨, 가슴 통증 또는 압박</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width:'100%',
        height:'100%',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        justifyContent: 'center'
    },
    titleContainer2: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'gray',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'red',
        padding: 4,
        paddingHorizontal: 10,
        marginLeft: 8,
    },
    area: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        margin: 3
    },
    closeButton: {
        position: 'absolute',
        zIndex: 1,  
        top: '3%',
        right: '3%'
    },
    rowContainer: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'gray',
        marginTop: 20,
        paddingVertical: 20,
        //position: 'absolute',
        //...StyleSheet.absoluteFillObject,
    },
    col: {
        padding: 3
    }
});

const textStyles = StyleSheet.create({
    title: {
        fontSize: standardFontSize * 1.8,
        color: 'white'
    },
    normal: {
        fontSize: standardFontSize * 1.5,
        color: FONT_GRAY.color
    },
    bold: {
        fontSize: standardFontSize * 1.5,
        fontWeight: '700'
    }
});

SymptomModal.propTypes = {
};

export default SymptomModal;

