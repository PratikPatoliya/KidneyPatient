import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Inputbox from '../components/Inputbox';
import colors from '../utils/color';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Password = ({navigation}) => {
    const [userData, setUserData] = useState()
    const [data, setData] = useState()
    const [loginUserData, setLoginUserData] = useState([]);
    console.log("loginUserData", loginUserData);
    console.log("userData*********", userData);
    const [obj, setObj] = useState({
        password: '',
        newPassword: '',
        reNewPassword: ''
    })
    const [error, setError] = useState({
        password: '',
        newPassword: '',
        reNewPassword: ''
    })
    console.log('obj--------', obj);
    // const data1 = Object.assign({}, ...userData);
    // console.log("Password", data.Password);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let jsonValue = await AsyncStorage.getItem('UserDataOne')
        const data = JSON.parse(jsonValue);
        console.log("++++++++++++data", data);
        setUserData(data)
        let AllValue = await AsyncStorage.getItem('UserData')
        const LoginUser = JSON.parse(AllValue);
        setLoginUserData(LoginUser)
    }

    const onChangeFormData = (values, name) => {
        setObj({ ...obj, [name]: values });
        setError({ ...error, [name]: '' });
    }

    const checkValidation = () => {
        let error = true;
        // console.log("............",data1);

        let passwordMsg = '';
        let newPasswordMsg = '';
        let reNewPasswordMsg = '';
        if (obj.password === '') {
            passwordMsg = 'Password is Required!'
            error = false;
        }
        else if (userData?.Password !== obj.password) {
            passwordMsg = 'Password Not Match'
            error = false;
        }
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
            password: passwordMsg,
            newPassword: newPasswordMsg,
            reNewPassword: reNewPasswordMsg,
        });
        return error;
    }

    const AllDataUpdate = async (userData) => {
        try {
            const jsonValues = JSON.stringify(userData)
            await AsyncStorage.setItem('UserDataOne', jsonValues);
            // alert('success')
        } catch (e) {
            alert('err')
        }
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
            const objdata= { ...userData, Password: obj.reNewPassword }
            AllDataUpdate(objdata)
            setUserData(objdata)
            const allDatas = loginUserData.map(x => (x.Mobile === objdata.Mobile) ? {...x,Password:obj.reNewPassword} : x)
            AllDatasUpdate(allDatas)
            setLoginUserData(allDatas)
            // alert('ok')
            ToastAndroid.show('Your Password Change Successfully!', ToastAndroid.SHORT);
            navigation.navigate('Login',{allDatas:allDatas})
        } else {
            ToastAndroid.show('Your Password No Change!', ToastAndroid.SHORT);
            // alert('No')
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.box}>
                <Text style={styles.header}>Change Password</Text>
                <Inputbox
                    name='password'
                    title="Curent Password"
                    KType="default"
                    //  dataDetectorTypes="phoneNumber"
                    maxLength={50}
                    value={obj.password}
                    onChangeText={onChangeFormData}
                />
                <View style={styles.condition2}>
                    {error.password !== '' && (
                        <Text style={styles.condition}>{error.password}</Text>
                    )}
                </View>
                <Inputbox
                    name='newPassword'
                    title="New Password"
                    KType="default"
                    //  dataDetectorTypes="phoneNumber"
                    maxLength={50}
                    value={obj.newPassword}
                    onChangeText={onChangeFormData}
                />
                <View style={styles.condition2}>
                    {error.newPassword !== '' && (
                        <Text style={styles.condition}>{error.newPassword}</Text>
                    )}
                </View>
                <Inputbox
                    name='reNewPassword'
                    title="Re-New Password"
                    KType="default"
                    //  dataDetectorTypes="phoneNumber"
                    maxLength={50}
                    value={obj.reNewPassword}
                    onChangeText={onChangeFormData}
                />
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

export default Password;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        backgroundColor: colors.white,
        height: height * 0.65,
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
        marginLeft: width * 0.09,
        marginTop: 2,
        marginBottom: -10,
        fontSize: 12,
    },
    condition2: {
        height: height * 0.014,
    },

})