import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
// import { Checkbox } from 'react-native-paper'
import CheckBox from 'react-native-check-box'
import styles from '../styles/Diabetes';
import initialState from './initialState';

const Diabetes = ({ navigation }) => {
    const [type1, setType1] = useState(false);
    const [type2, setType2] = useState(false);
    const [year, setYear] = useState('');
    const [months, setMonths] = useState('');
    const [days, setDays] = useState('');
    const [yearerr, setYearErr] = useState('');
    const [monthserr, setMonthsErr] = useState('');
    const [dayserr, setDaysErr] = useState('');

    const setYearValidate = (values) => {
        setYear(values)
        setYearErr('');
    }
    const setMonthsValidate = (values) => {
        setMonths(values)
        setMonthsErr('');
    }
    const setDaysValidate = (values) => {
        setDays(values)
        setDaysErr('');
    }

    const onSubmit = () => {
        if (year === '' || months === '' || days === '') {
            if (year === '') {
                setYearErr('Year is Required!')
            }
            else if(year.length < 4){
                setYearErr('Min 4 Digit Required!')
            }
            if (months === '') {
                setMonthsErr('Month is Required!')
            }
            else if (months.length<2) {
                setMonthsErr('Min 2 Digit Required!')
            }
            if (days.length < 2) {
                setDaysErr('Min 2 Digit Required!')
            }
            else if (days === '') {
                setDaysErr('Day is Required!')
            }
        }
        else {
            initialState.Type1 = type1.isChecked,
                initialState.Type2 = type2.isChecked,
                initialState.DLDate = `${days}-${months}-${year}`,
                navigation.navigate('Exercise')
        }
    }
    console.log('initialState,diabetes', initialState);

    return (
        <View style={styles.head}>
            <View style={styles.container}>
                <Text style={styles.font}>Type 1</Text>
                <CheckBox
                    style={{ paddingTop: 3 }}
                    onClick={() => {
                        setType1({
                            isChecked: !type1
                        })
                    }}
                    isChecked={type1}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.font}>Type 2</Text>
                <CheckBox
                    style={{ paddingTop: 3 }}
                    onClick={() => {
                        setType2({
                            isChecked: !type2
                        })
                    }}
                    isChecked={type2}
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.secondFont}>How Long Have You Had Diabetes ?  </Text>
                <View style={styles.dmy}>
                    <View>
                        <TextInput
                            style={styles.textbox}
                            maxLength={4}
                            keyboardType='number-pad'
                            placeholder='Year'
                            value={year}
                            onChangeText={(e) => setYearValidate(e)}
                        />
                        <View style={styles.condition2}>
                            {yearerr !== '' && (
                                <Text style={styles.condition}>{yearerr}</Text>
                            )}
                        </View>
                    </View>
                    <View>
                        <TextInput
                            style={styles.textbox}
                            maxLength={2}
                            keyboardType='number-pad'
                            placeholder='Months'
                            value={months}
                            onChangeText={(e) => setMonthsValidate(e)}
                        />
                        <View style={styles.condition2}>
                            {monthserr !== '' && (
                                <Text style={styles.condition}>{monthserr}</Text>
                            )}
                        </View>
                    </View>
                    <View>
                        <TextInput
                            style={styles.textbox}
                            maxLength={2}
                            keyboardType='number-pad'
                            placeholder='Days'
                            value={days}
                            onChangeText={(e) => setDaysValidate(e)}
                        />
                        <View style={styles.condition2}>
                            {dayserr !== '' && (
                                <Text style={styles.condition}>{dayserr}</Text>
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

export default Diabetes

