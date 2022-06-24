import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../utils/color'
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ForgotPassword = ({navigation}) => {
    const [allData, setAllData] = useState([]);
    const [fpassword, setFPassword] = useState('');
    const [fPasswordErroe, setFPasswordError] = useState('');
    
    const fPasswordValidate = (values) => {
        setFPassword(values)
        setFPasswordError('');
    }
    const user = allData.find(item => (item.Mobile === fpassword))
    // console.log('suvvvvvvvvvvvvvv', user);
    
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let jsonValue = await AsyncStorage.getItem('UserData')
        const data = JSON.parse(jsonValue);
        setAllData(data)
    }


    const onSubmit = () => {
        if (fpassword === '') {
            setFPasswordError('Mobile Number is Required!')
        } else if (fpassword.length < 10) {
            setFPasswordError('Mobile Number Min 10 Digit!')
        }else if (user === undefined) {
            setFPasswordError('Valid Mobile Number!')
        }
        else {
            navigation.navigate('Otp',{user:user})
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.box}>
                <Text style={styles.header}>Forgot Password</Text>
                
                <Text style={styles.text}>Enter Your Mobile Number</Text>
                <View style={styles.textinput}>
                    <TextInput
                        style={styles.textbox}
                        maxLength={10}
                        keyboardType='number-pad'
                        placeholder='Ex: 1234567890'
                    value={fpassword}
                    onChangeText={(e) => fPasswordValidate(e)}
                    />
                </View>

                <View style={styles.condition2}>
                    {fPasswordErroe !== '' && (
                        <Text style={styles.condition}>{fPasswordErroe}</Text>
                    )}
                </View>

                <View style={styles.bunOut}>
                    <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
                        <Text style={styles.btnfont}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: colors.white,
        height: height * 0.40,
        // alignItems: 'center',
        width: width * 0.9,
        padding: 20,
        borderRadius: 15
    },
    header: {
        fontSize: 25,
        fontWeight: '700',
        alignSelf: 'center',
        marginBottom: 40
    },
    btn: {
        backgroundColor: colors.blue,
        width: width * 0.5,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 50
    },
    btnfont: {
        color: colors.white,
        fontSize: 15,
    },
    bunOut: {
        alignItems: 'center',
    },
    condition: {
        color: 'red',
        // alignSelf: 'center',
        marginLeft: width * 0.04,
        marginTop: 2,
        marginBottom: -10,
        fontSize: 12,
    },
    condition2: {
        height: height * 0.014,
    },
    textinput: {
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor:colors.greenlow,
        marginLeft: 10,
      },
      text: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight:'600',
        color:colors.black
      },
})