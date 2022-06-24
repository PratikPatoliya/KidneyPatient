import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import styles from '../styles/ExerciseOftenPage';
import initialState from './initialState';

const ExerciseOftenPage = ({ navigation }) => {
    const [checked, setChecked] = useState('');
    const [checkedErr, setCheckedErr] = useState('');
    console.log('ExerciseOftenPage', initialState);

    const onChange= (value) =>{
        setChecked(value)
        setCheckedErr("")
    }

    const onSubmit = () => {
        if (checked === "") {
            setCheckedErr('Need Any One')
        } else {
            setCheckedErr('')
            initialState.ExerciseOften = checked,
            navigation.navigate('ExerciseTime')
        }
    }

    return (
        <View style={styles.head}>
            <View style={styles.box}>
                <Text style={styles.font}>How Often You Exercise ?</Text>
                <View style={styles.radiobtn}>
                    <RadioButton
                        value="Twice A Week Sometime"
                        status={checked === 'Twice A Week Sometime' ? 'checked' : 'unchecked'}
                        onPress={() => onChange('Twice A Week Sometime')}
                    />
                    <Text style={styles.radiotext}>Twice A Week Sometime</Text>
                </View>
                <View style={styles.radiobtn}>
                    <RadioButton
                        value="Regular"
                        status={checked === 'Regular' ? 'checked' : 'unchecked'}
                        onPress={() => onChange('Regular')}
                    />
                    <Text style={styles.radiotext}>Regular</Text>
                </View>
                <View style={styles.condition2}>
                    {checkedErr !== '' && (
                        <Text style={styles.condition}>{checkedErr}</Text>
                    )}
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                    <Text style={styles.btnfont}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ExerciseOftenPage

