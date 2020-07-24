import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { serverUrl, totalCorona, regionCorona } from '../url';
import KoreaTotal from '../Component/KoreaTotal';
import KoreaRegions from '../Component/KoreaRegions';

const KoreaCorona = () => {

    const [totalData, setTotalData] = useState({});
    const [regionsData, setRegionsData] = useState({});

    useEffect(()=> {
        fetch(serverUrl + totalCorona,
                {method: 'get'}
            )
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setTotalData(res)
            })
            .catch(err => console.log(err))
    },[])

    useEffect(()=> {
        fetch(serverUrl + regionCorona,
                {method: 'get'}
            )
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setRegionsData(res)
            })
            .catch(err => console.log(err))
    },[])




    return (
        <View style={styles.container}>
            <KoreaTotal totalData={totalData} />
            <KoreaRegions regionsData={regionsData} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default KoreaCorona;

