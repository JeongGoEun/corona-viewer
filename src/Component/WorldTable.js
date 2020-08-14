import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import { screenHeight, numberWithCommas, screenWidth, standardFontSize } from '../constant';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component'

const WorldTable= ({worldMapData}) => {

    const tableHead = ['국가', '확진자수', '완치자수', '사망자수'];
    const widthArr = [screenWidth*0.25, screenWidth*0.3, screenWidth*0.3, screenWidth*0.3 ]
    const tableData = worldMapData.map((data) => {
        return [data.Name, `${numberWithCommas(data.totalCases)}명`, `${numberWithCommas(data.totalDeaths)}명`, `${numberWithCommas(data.totalRecovered)}명`]
    })

    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}>
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text}/>
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
    container: { height: screenHeight*0.8, backgroundColor: '#fff', padding: 10 },
    header: { height: 50, backgroundColor: '#537791' },
    text: { textAlign: 'center', fontWeight: '100' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    contentText: {fontSize :standardFontSize* 1.2, textAlign: 'center'}
});

const textStyles = StyleSheet.create({
});

WorldTable.propTypes = {
};

export default WorldTable;

