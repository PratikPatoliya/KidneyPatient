import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../utils/color';
import { useState } from 'react';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Otp = (props) => {
    const userData = props?.route?.params?.user
    const [otp, setOtp] = useState('')
    const [otpError, setOtpError] = useState('')

    const OtpValidate = (value) =>{
        setOtp(value)
        setOtpError('')
    }

    const onSubmit = () =>{
        if (otp === '') {
            setOtpError('Otp is Required!')
        } else if (otp.length <4) {
            setOtpError('Otp Min 4 Digit!')
        }
        else if(otp !== '1234'){
            setOtpError('Wrong Otp!')
        }
        else{
            props.navigation.navigate('PCS',{user:userData})
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.box}>
                <Text style={styles.header}>Enter OTP</Text>

                <Text style={styles.text}>Enter Your Otp</Text>
                <View style={styles.textinput}>
                    <TextInput
                        style={styles.textbox}
                        maxLength={4}
                        keyboardType='number-pad'
                        placeholder='Ex: 1234'
                        value={otp}
                    onChangeText={(e) => OtpValidate(e)}
                    />
                </View>

                <View style={styles.condition2}>
                    {otpError !== '' && (
                        <Text style={styles.condition}>{otpError}</Text>
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

export default Otp;

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
        backgroundColor: colors.greenlow,
        marginLeft: 10,
    },
    text: {
        marginTop: 10,
        marginBottom: 10,
        fontWeight: '600',
        color: colors.black
    },
})