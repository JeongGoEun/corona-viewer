import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import { standardFontSize, FONT_GRAY } from '../constant';
import Icon from 'react-native-vector-icons/AntDesign';

const PreventionRuleModal= ({modalClose}) => {

    return (
        <View style={styles.container}>
            <View style={styles.area}>
                <TouchableOpacity style={styles.closeButton} onPress={modalClose}>
                    <Icon name="closecircleo" size={20} />
                </TouchableOpacity>
                <View style={styles.titleContainer}>
                    <Text style={textStyles.title}>코로나19 예방수칙</Text>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.row}>
                        <Text style={textStyles.normal}>1. 비누로 30초 이상 </Text>
                        <Text style={textStyles.bold}>'꼼꼼하게 손씻기'</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={textStyles.normal}>2. 씻지 않은 손으로 눈, 코, 입</Text>
                        <Text style={textStyles.bold}> '만지지 않기'</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={textStyles.normal}>3. 기침할 때는 옷소매로</Text>
                        <Text style={textStyles.bold}> '입과 코를 가리기'</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={textStyles.normal}>4. 발열·호흡기 증상자와</Text>
                        <Text style={textStyles.bold}> '접촉 피하기'</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={textStyles.normal}>5. 행사·모임, 사람 많은 곳</Text>
                        <Text style={textStyles.bold}> '방문 자제'</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={textStyles.normal}>6. 의료기관 방문 시</Text>
                        <Text style={textStyles.bold}> '마스크 착용하기'</Text>
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
    titleContainer: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'gray',
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'orange',
        padding: 4,
        paddingHorizontal: 10,
        marginLeft: 8
    },
    closeButton: {
        position: 'absolute',
        zIndex: 1,  
        top: '3%',
        right: '3%'
    },
    area: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        margin: 10
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
    row: {
        flexDirection: 'row',
        padding: 3
    },
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

PreventionRuleModal.propTypes = {
};

export default PreventionRuleModal;

