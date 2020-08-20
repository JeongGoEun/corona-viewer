import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import WorldTotal from '../Component/WorldTotal';
import { serverUrl, worldCorona, worldCoronaCheck, worldDetail, selectCountry,selectTime } from '../url';
import WorldDetail from '../Component/WorldDetail';
import Icon from 'react-native-vector-icons/EvilIcons';

const WorldHome = ({navigation}) => {

    const [worldTotalData, setWorldTotalData] = useState(null);
    const [worldMapData, setWorldMapData] = useState([]);
    const [countryList, setCountryList] = useState([]);
    const [countryData, setCountryData] = useState(null);

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [detailFetching, setDetailFetching] = useState(false);

    useEffect(()=> {
        if(!selectedCountry) return;
        if(!selectedYear) return;
        if(!selectedMonth) return;
        if(!selectedDay) return;

        setDetailFetching(true);
        const country = selectedCountry;
        const time = `${selectedYear}${selectedMonth}${selectedDay}`;
        const url = `${serverUrl + worldDetail}?${selectCountry}=${country}&${selectTime}=${time}`
        
        fetch(url,
            {method: 'get'}
        )
        .then(res => res.json())
        .then(res => {
            setCountryData(res[0])
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setDetailFetching(false)
        })
    },[selectedCountry, selectedYear, selectedMonth, selectedDay])

    useEffect(()=> {
        fetch(serverUrl + worldCoronaCheck,
            {method: 'get'}
        )
        .then(res => res.json())
        .then(res => {
            setWorldTotalData(res)
        })
        .catch(err => console.log(err))
    },[])

    useEffect(()=> {
        fetch(serverUrl + worldCorona,
                {method: 'get'}
            )
            .then(res => res.json())
            .then(res => {
                setWorldMapData(res)
            })
            .catch(err => console.log(err))
    },[])

    useEffect(()=> {
        if(!worldMapData) return;
        const lists = worldMapData.map((data) => {
            return {label: data.Name, value: data.Name}
        })
        setCountryList(lists)
    },[worldMapData])

    const onChangeDate = (item) => {
        console.log(item)
        if(item.id == 'year') setSelectedYear(item.value)
        if(item.id == 'month') {
            const val = (item.value < 10) ? '0'+item.value+'' : item.value+'';
            setSelectedMonth(val)
        }
        if(item.id == 'day') {
            const val = (item.value < 10) ? '0'+item.value+'' : item.value+'';
            setSelectedDay(val)
        }
    }

    const onChangeCountry = (item) => {
        setSelectedCountry(item.value)
    }

    return (
        <ScrollView style={styles.container}>
            <WorldTotal worldTotalData={worldTotalData}/>
            <TouchableOpacity 
                onPress={() => navigation.push('Charts')}
                style={{backgroundColor:'white', padding:10, flexDirection: 'row', margin: 10, justifyContent:'space-between', alignItems:'center', borderRadius: 5}}>
                <Text>차트보기</Text>
                <Icon name="chart" size={30} />
            </TouchableOpacity>
            <WorldDetail 
                countryData={countryData} 
                onChangeDate={onChangeDate}
                onChangeCountry={onChangeCountry}
                countryList={countryList}
                loading={detailFetching}
                />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    dropContainerStyle: {
        zIndex: 1,
    }
});

export default WorldHome;