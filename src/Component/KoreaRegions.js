import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Platform, CheckBox } from 'react-native';
import { standardFontSize, screenHeight, koreaDropdownItems, koreaRegionsPopulation } from '../constant';
import RegionPicker from './RegionPicker'
import DatePicker from './DatePicker'

import PropTypes from 'prop-types';
import Region from './Region';

import { serverUrl, koreaDailyCorona } from '../url';

const KoreaRegions = ({ regionsTotalData }) => {
    const [country, setCountry] = useState('seoul')
    const [dateChecked, setDateCheckBox] = useState(false);
    const [regionDailyData, setRegionDailyData] = useState([]);
    const [regionCompData, setRegionCompData] = useState({...regionsTotalData['seoul']});
    const [regionDate, setRegionDate] = useState({year:'', month: '', day: ''});
    

    useEffect(()=> {
        fetch(serverUrl + koreaDailyCorona + '?country_name=' + country,
            { method: 'get' })
            .then(res => res.json())
            .then(res => {
                setRegionDailyData(res);
            })
            .catch(err => console.log(err));
    },[country])

    useEffect(()=> {
        setDateCheckBox(dateChecked);
        setRegionDate(regionDate);
        console.log(country, dateChecked);
        if(!dateChecked) {
            setRegionCompData(regionsTotalData[country]);
        }else{
            var rtn = filterDateData();
            //console.log(rtn);
            setRegionCompData(rtn);
        }
    },[regionsTotalData[country], regionDailyData, country, dateChecked, regionDate])

    const onChangeRegion = (item) => {
        setCountry(item.value);
    }
    
    const onChangeDate = (item) => {
        var val = (item.value < 10) ? '0'+item.value+'' : item.value+'';

        if(item.id=='year') {
            setRegionDate({...regionDate, year: val});
        }else if(item.id=='month') {
            setRegionDate({...regionDate, month: val});
        }else{
            setRegionDate({...regionDate, day: val});
        }
        // console.log(rtn, regionCompData);
    }
    const filterDateData = () => {
        
        var dateStr = regionDate.year + regionDate.month + regionDate.day, totalCase=0, recovered=0, death=0, percentage=0.0, countryName='', newCase=0;
        var dateArr = [];
        regionDailyData.map((data) => {
            if(data.update_time.substring(0,dateStr.length) == dateStr) {
                dateArr = [...dateArr, data];
            }
        })
        //console.log(dateStr, dateArr);

        dateArr.map((data, idx) => {
            dateArr[idx].confirmed = data.confirmed == "" ? 0 : data.confirmed;
            dateArr[idx].released = data.released == "" ? 0 : data.released;
            dateArr[idx].death = data.death == "" ? 0 : data.death;

            if(idx == 0) {
                totalCase += parseInt(data.confirmed);
                recovered += parseInt(data.released);
                death += parseInt(data.death);
            }else{
                totalCase += parseInt(data.confirmed - dateArr[idx-1].confirmed);
                recovered += parseInt(data.released - dateArr[idx-1].released);
                death += parseInt(data.death - dateArr[idx-1].death);
            }
            countryName = data.country_name
        })
        percentage = (totalCase/koreaRegionsPopulation[country]*100000);

        if(dateArr.length > 1)
            newCase = dateArr[dateArr.length-1].confirmed - dateArr[dateArr.length-2].confirmed;

        return ({
            countryName:countryName,
            totalCase: totalCase, 
            recovered: recovered, 
            death: death, 
            percentage: percentage.toFixed(2),
            newCase: newCase,
        });
    }

    const getRegionComponents = () => {
        //console.log(regionCompData);
        return <Region regionData={regionCompData} />
    }
    return (
        <View style={styles.container}>
            <View style={styles.localTitle}>
                <Text style={textStyles.localTitle}>지역별 세부현황</Text>
            </View>
            <View style={styles.dropContainerStyle}>
                <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
                    <RegionPicker dropItems={koreaDropdownItems} onChange={onChangeRegion} defaultRegion='seoul' />
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 7 }}>
                        <Text>날짜 선택</Text>
                        <CheckBox
                            disabled={false}
                            value={dateChecked}
                            onValueChange={(newValue) => {if(newValue == false) {setRegionDate({year:'', month: '', day: ''});} setDateCheckBox(newValue)}}
                            standardFontSize={30}
                        />
                    </View>
                </View>
                {dateChecked && <DatePicker onChange={onChangeDate} />}
            </View>
            <View>
                {getRegionComponents()}
            </View>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 8}}>
                    *발생률: 10만명당 발생률 (=확진자/지역인구 * 100,000)
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        height: screenHeight * 0.6,

    },
    localTitle: {
        backgroundColor: '#F8F9F9',
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 3,
        height: screenHeight * 0.06,
    },
    dropContainerStyle: {
        flex: 1,
        zIndex: 1,
    },
});

const textStyles = StyleSheet.create({
    localTitle: {
        fontSize: 15,
        fontWeight: '600',
        color: 'red'
    }
});

KoreaRegions.propTypes = {
    regionsData: PropTypes.object
};

export default KoreaRegions;

