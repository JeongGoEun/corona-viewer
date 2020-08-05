import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import { standardFontSize, screenHeight, FONT_GRAY } from '../constant';

const Home = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/logo.JPG')} style={styles.image}/>
                <Text style={textStyles.header}>굿바이코로나</Text>
            </View>
            <View style={styles.body}>

                <View style={styles.area}>
                    <Text style={textStyles.title}>코로나19 예방수칙</Text>
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
                <View style={styles.area}>
                <Text style={textStyles.title}>코로나19 증상</Text>
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
        flex: 1
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        height: screenHeight*0.1,
        alignItems: 'center'
    },
    area: {
        backgroundColor:'white',
        padding: 10,
        borderRadius: 10,
        margin: 3
    },
    image: {
        width:40,
        height:40
    },
    body: {
        padding: 10,
        marginTop: 3,
        backgroundColor :'#f9fbfd',
        flex: 1,
        justifyContent: 'flex-start'
    },
    row: {
        flexDirection:'row',
        padding: 3
    },
    col: {
        padding: 3
    }
});

const textStyles = StyleSheet.create({
    header: {
        fontSize: standardFontSize*2.6,
        color: '#5f76e8'
    },
    desc: {
        fontSize: standardFontSize*1.2
    },
    title: {
        fontSize: standardFontSize*1.8,
        color: 'red'
    },
    normal: {
        fontSize: standardFontSize*1.5,
        color: FONT_GRAY.color
    },
    bold: {
        fontSize: standardFontSize*1.5,
        fontWeight: '700'
    }
});

Home.propTypes = {
};

export default Home;

