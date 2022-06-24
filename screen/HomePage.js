import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../utils/color'
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const HomePage = (props) => {
    const [userData, setUserData] = useState([  ])

    useEffect(() => {
        getData();
    }, [props])


    const getData = async () => {
        let jsonValue = await AsyncStorage.getItem('UserDataOne')
        console.log("jsonValue---------------", jsonValue);
        const data = JSON.parse(jsonValue);
        setUserData(data)
    }

    return (
        <View style={{ flex: 1 }}>
            {/*  <TouchableOpacity style={styles.btn} onPress={() => navigation.openDrawer()} >
                    <Text style={styles.font1}>Next</Text>
                </TouchableOpacity> */}
            <View style={styles.all}>
                <Text style={styles.font}>Welcome {userData?.Name}</Text>
            </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.blue,
        width: width * 0.5,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 25,
    },
    font1: {
        color: colors.white,
        fontSize: 15,
    },
    all: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font: {
        fontSize: 35,
        fontWeight: 'bold',
    }
})