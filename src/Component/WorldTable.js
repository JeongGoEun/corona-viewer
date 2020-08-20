import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import { screenHeight, numberWithCommas, screenWidth, standardFontSize } from '../constant';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'

const WorldTable= ({worldMapData}) => {

    const tableHead = ['국가', '확진자수', '완치자수', '사망자수'];
    const widthArr = [screenWidth*0.2, screenWidth*0.28, screenWidth*0.25, screenWidth*0.22 ]
    const tableData = worldMapData.map((data) => {
        return [data.Name, `${numberWithCommas(data.totalCases)}명`, `${numberWithCommas(data.totalDeaths)}명`, `${numberWithCommas(data.totalRecovered)}명`]
    })

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={textStyles.header}>국가별 코로나현황 테이블</Text>
            </View>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        <Row data={tableHead} widthArr={widthArr} style={styles.tableHeader} textStyle={styles.text}/>
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        {
                        tableData.map((rowData, index) => (
                            <Row
                                key={index}
                                data={rowData}
                                widthArr={widthArr}
                                style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                                textStyle={styles.contentText}
                            />
                        ))
                        }
                    </Table>
                </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 10, height: screenHeight*0.8 },
    tableHeader: { height: 50, backgroundColor: '#537791' },
    header: {
        backgroundColor:'#F8F9F9',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
        height: screenHeight*0.06,
    },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    contentText: {fontSize :standardFontSize* 1.2, textAlign: 'center'}
});

const textStyles = StyleSheet.create({
    header: {
        fontSize: 15,
        fontWeight: '600',
        color: 'red'
    }
});

WorldTable.propTypes = {
};

export default WorldTable;

