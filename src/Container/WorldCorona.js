import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WorldTotal from '../Component/WorldTotal';
import WorldChart from '../Component/WorldChart';
import { serverUrl, worldCorona, worldCoronaCheck } from '../url';
import WorldTable from '../Component/WorldTable';

const WorldCorona = () => {

    const [worldMapData, setWorldMapData] = useState([]);
    const [worldTotalData, setWorldTotalData] = useState(null);

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


    return (
        <ScrollView style={styles.container}>
            <WorldTotal worldTotalData={worldTotalData}/>
            <WorldChart worldMapData={worldMapData}/>
            <WorldTable worldMapData={worldMapData}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WorldCorona;