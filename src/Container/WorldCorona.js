import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import WorldTotal from '../Component/WorldTotal';
import WorldChart from '../Component/WorldChart';
import { serverUrl, worldCorona } from '../url';

const WorldCorona = () => {

    const [worldMapData, setWorldMapData] = useState([]);

    useEffect(()=> {
        fetch(serverUrl + worldCorona,
                {method: 'get'}
            )
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setWorldMapData(res)
            })
            .catch(err => console.log(err))
    },[])


    return (
        <ScrollView style={styles.container}>
            <WorldTotal />
            <WorldChart worldMapData={worldMapData}/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default WorldCorona;