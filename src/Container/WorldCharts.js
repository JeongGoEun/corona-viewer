import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import WorldChart from '../Component/WorldChart';
import WorldTable from '../Component/WorldTable';
import { serverUrl, worldCorona} from '../url';
import Icon from 'react-native-vector-icons/FontAwesome';

const WorldCharts = ({navigation}) => {

    const [worldMapData, setWorldMapData] = useState([]);

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
            <TouchableOpacity style={{padding:10}} onPress={()=> navigation.goBack()}>
                <Icon name="arrow-left" size={30} />
            </TouchableOpacity>
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

export default WorldCharts;