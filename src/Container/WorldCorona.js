import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WorldTotal from '../Component/WorldTotal';
import WorldChart from '../Component/WorldChart';
import { serverUrl, worldCorona, worldCoronaCheck } from '../url';
import WorldTable from '../Component/WorldTable';
import RegionPicker from '../Component/RegionPicker';
import { koreaDropdownItems, screenHeight } from '../constant';

const WorldCorona = () => {

    const [worldTotalData, setWorldTotalData] = useState(null);
    const [worldMapData, setWorldMapData] = useState([]);
    const [dropItems, setDropItems] = useState(null);
    const [filteredData, setFilteredData] = useState([]);

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
                setFilteredData(res)
            })
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        if(!worldMapData) return;

        const lists = worldMapData.map((data) => {
            return {label: data.Name, value: data.Name}
        })
        setDropItems([{label: '전체', value: 'all'},...lists]);
    },[worldMapData])

    const onChange = (item) => {
        if(item.value == 'all')
            return setFilteredData(worldMapData)
        
        setFilteredData(worldMapData.filter((data) => {
            return data.Name == item.value
        }))
    }

    return (
        <ScrollView style={styles.container}>
            <WorldTotal worldTotalData={worldTotalData}/>
            <WorldChart worldMapData={worldMapData}/>
            <View style={styles.dropContainerStyle}>
                {
                    dropItems &&
                    <RegionPicker 
                        defaultRegion={null}
                        dropItems={dropItems}
                        onChange={onChange}
                        placeholder='국가를 선택하세요'
                        />
                }
            </View>
            <WorldTable worldMapData={filteredData}/>
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

export default WorldCorona;