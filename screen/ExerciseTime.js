import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/ExerciseTime'
import initialState from './initialState';

const ExerciseTime = ({ navigation }) => {
    const [hrs, setHrs] = useState('')
    const [hrsErr, setHrsErr] = useState('')
    const [minutes, setMinutes] = useState('')
    const [minutesErr, setMinutesErr] = useState('')
    console.log('ExerciseTime', initialState);

    const setHrsValidate = (value) => {
        setHrs(value)
        setHrsErr('')
    }
    const setMinutesValidate = (value) => {
        setMinutes(value)
        setMinutesErr('')
    }
    const onSubmit = () => {
        if (hrs === '' && minutes === '') {
            setHrsErr('Hrs is Required!')
            setMinutesErr('Min is Required!')
        } else if (hrs === '') {
            setHrsErr('Hrs is Required!')
        }
        else if (minutes === '') {
            setMinutesErr('Min is Required!')
        }
        else {
            initialState.ExerciseTime = `${hrs}:${minutes}`,
            navigation.navigate('WaterInWholDay')
        }
    }

    return (
        <View style={styles.header}>
            <View style={styles.box}>
                <Text style={styles.head}>How Long You Exercise ?</Text>
                <View style={styles.dmy}>
                    <View>
                        <TextInput
                            style={styles.textbox}
                            maxLength={2}
                            keyboardType='number-pad'
                            placeholder='Hrs'
                            value={hrs}
                            onChangeText={(e) => setHrsValidate(e)}
                        />
                        <View style={styles.condition2}>
                            {hrsErr !== '' && (
                                <Text style={styles.condition}>{hrsErr}</Text>
                            )}
                        </View>
                    </View>
                    <View>
                        <TextInput
                            style={styles.textbox}
                            maxLength={2}
                            keyboardType='number-pad'
                            placeholder='Minutes'
                            value={minutes}
                            onChangeText={(e) => setMinutesValidate(e)}
                        />
                        <View style={styles.condition2}>
                            {minutesErr !== '' && (
                                <Text style={styles.condition}>{minutesErr}</Text>
                            )}
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                    <Text style={styles.btnfont}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ExerciseTime