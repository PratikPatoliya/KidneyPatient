import { Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { RadioButton } from 'react-native-paper';
import styles from '../styles/Meal';
import initialState from './initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Meal = ({navigation}) => {
    const [checked, setChecked] = useState('');
    const [checkedErr, setCheckedErr] = useState('');
    const [data, setData] = useState([])

    const onChange = (value) => {
        setChecked(value)
        setCheckedErr("")
    }

    const onSubmit = () =>{
        if (checked === "") {
            setCheckedErr('Need Any One')
        } else {
        const obj ={...initialState, Meal:checked }
        let dummyData = [...data]
        dummyData.push(obj)
        setData(dummyData)
        NewUserData(dummyData)
        console.log("obj",obj);
        navigation.navigate('Login',{data :data})
        }
    }
    console.log("data",data);
    const NewUserData = async (userData) => {
            try {
                const jsonValue = JSON.stringify(userData)
                console.log("jsonValue////////",jsonValue);
                await AsyncStorage.setItem('UserData', jsonValue);
                alert('success')
            } catch (e) {
                alert('err')
                console.log('e1',e);
              }
        }
        useEffect(() => {
            getData();
        }, [])
        const getData = async () => {
            let jsonValue = await AsyncStorage.getItem('UserData')
            jsonValue = jsonValue ? JSON.parse(jsonValue) : []
            setData(jsonValue)
            console.log("jsonValue",jsonValue);
        }
    return (
        <View style={styles.header}>
            <Text style={styles.head}>Your Meal Prefrences</Text>
            <View style={styles.radiobtnmain}>
                <View style={styles.radiobtn}>
                    <RadioButton
                        value="Veg"
                        status={checked === 'Veg' ? 'checked' : 'unchecked'}
                        onPress={() => onChange('Veg')}
                    />
                    <Text style={styles.radiotext}>Veg</Text>
                </View>
                <View style={[styles.radiobtn, styles.left]}>
                    <RadioButton
                        value="Non Veg"
                        status={checked === 'Non Veg' ? 'checked' : 'unchecked'}
                        onPress={() => onChange('Non Veg')}
                    />
                    <Text style={styles.radiotext}>Non Veg</Text>
                </View>
            </View>
            <View style={styles.condition2}>
                    {checkedErr !== '' && (
                        <Text style={styles.condition}>{checkedErr}</Text>
                    )}
                </View>
            <TouchableOpacity style={styles.btn} onPress={() => onSubmit()} >
                <Text style={styles.btnfont}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Meal;
