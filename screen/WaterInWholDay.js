import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import styles from '../styles/WaterInWholDay';
import initialState from './initialState';

const WaterInWholDay = ({ navigation }) => {
    console.log('WaterInWholDay', initialState);
    const [checked, setChecked] = useState('');
    const [checkedErr, setCheckedErr] = useState('');

    const onChange = (value) => {
        setChecked(value)
        setCheckedErr("")
    }

    const onSubmit = () => {
        if (checked === "") {
            setCheckedErr('Need Any One')
        } else {
            initialState.WaterInWholDay = checked,
                navigation.navigate('Meal');
        }
    }
    return (
        <View style={styles.header}>
            <View style={styles.box}>
                <Text style={styles.head}>How Much Water You Intake In Whol Day</Text>
                <View style={styles.radiobtn}>
                    <RadioButton
                        value="Glsses"
                        status={checked === 'Glsses' ? 'checked' : 'unchecked'}
                        onPress={() => onChange('Glsses')}
                    />
                    <Text style={styles.radiotext}>Glsses</Text>
                </View>
                <View style={styles.radiobtn}>
                    <RadioButton
                        value="Liters"
                        status={checked === 'Liters' ? 'checked' : 'unchecked'}
                        onPress={() => onChange('Liters')}
                    />
                    <Text style={styles.radiotext}>Liters</Text>
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

export default WaterInWholDay;