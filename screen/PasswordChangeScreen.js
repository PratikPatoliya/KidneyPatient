import { Dimensions, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../utils/color';
import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const PasswordChangeScreen = (props) => {
    const userData = props.route?.params?.user
    const [allData, setAllData] = useState([])
    // console.log("allData",allData);

    const [obj, setObj] = useState({
        newPassword: '',
        reNewPassword: ''
    })
    const [error, setError] = useState({
        newPassword: '',
        reNewPassword: ''
    })

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let AllValue = await AsyncStorage.getItem('UserData')
        const LoginUser = JSON.parse(AllValue);
        setAllData(LoginUser)
    }

    const onChangeFormData = (values, name) => {
        setObj({ ...obj, [name]: values });
        setError({ ...error, [name]: '' });
    }

    const checkValidation = () => {
        let error = true;

        let newPasswordMsg = '';
        let reNewPasswordMsg = '';
        if (obj.newPassword === '') {
            newPasswordMsg = 'New Password is Required!'
            error = false;
        }
        if (obj.reNewPassword === '') {
            reNewPasswordMsg = 'Re-New Password is Required!'
            error = false;
        }
        if (obj.newPassword !== obj.reNewPassword) {
            reNewPasswordMsg = 'Password Not Match'
            error = false;
        }

        setError({
            newPassword: newPasswordMsg,
            reNewPassword: reNewPasswordMsg,
        });
        return error;
    }


    const AllDatasUpdate = async (userData) => {
        try {
            const jsonValues = JSON.stringify(userData)
            await AsyncStorage.setItem('UserData', jsonValues);
            // alert('success')
        } catch (e) {
            alert('err')
        }
    }

    const onSubmit = async () => {
        let status = await checkValidation();

        if (status) {
            const objdata = {...userData,Password:obj.reNewPassword}
            AllDatasUpdate(objdata)
            const allDatas = allData.map(x => (x.Mobile === objdata.Mobile) ? {...x,Password:obj.reNewPassword} : x)
            AllDatasUpdate(allDatas)
            ToastAndroid.show('Your Password Change Successfully!', ToastAndroid.SHORT);
            props.navigation.navigate('Login',{user:userData})
        } else {
            console.log("NO");
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.box}>
                <Text style={styles.header}>Enter New Password</Text>

                <Text style={styles.text}>Enter Your Password</Text>
                <View style={styles.textinput}>
                    <TextInput
                        style={styles.textbox}
                        maxLength={50}
                        keyboardType='default'
                        value={obj.newPassword}
                        onChangeText={(e) => onChangeFormData(e, 'newPassword')}
                    />
                </View>
                <View style={styles.condition2}>
                    {error.newPassword !== '' && (
                        <Text style={styles.condition}>{error.newPassword}</Text>
                    )}
                </View>
                <Text style={styles.text}>Re-Enter Your Password</Text>
                <View style={styles.textinput}>
                    <TextInput
                        style={styles.textbox}
                        maxLength={50}
                        keyboardType='default'
                        value={obj.reNewPassword}
                        onChangeText={(e) => onChangeFormData(e, 'reNewPassword')}
                    />
                </View>

                <View style={styles.condition2}>
                    {error.reNewPassword !== '' && (
                        <Text style={styles.condition}>{error.reNewPassword}</Text>
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

export default PasswordChangeScreen

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: colors.white,
        height: height * 0.49,
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