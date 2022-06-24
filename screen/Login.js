import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Text, View, Button, TouchableOpacity, Image ,ToastAndroid } from 'react-native';
import Inputbox from '../components/Inputbox';
import styles from '../styles/Login';

const Login = (props) => {
  const [allData, setAllData] = useState([]);
  console.log("allDataallData", allData);
  const [obj, setObj] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState({
    username: '',
    password: '',
  })

  // const toast = useToast();

  const onChangeFormData = (values, name) => {
    setObj({ ...obj, [name]: values });
    setError({ ...error, [name]: '' });
  }

  const checkValidation = () => {
    let error = true;

    let usernameMsg = '';
    let pwdMsg = '';
    if (obj.username === '') {
      usernameMsg = 'Mobile Number is Required!'
      error = false;
    } else if (obj.username.length < 10) {
      usernameMsg = 'Mobile Number is not Valid!'
      error = false;
    }
    if (obj.password === '') {
      pwdMsg = 'Password is Required!'
      error = false;
    }
    setError({
      username: usernameMsg,
      password: pwdMsg
    });
    return error;
  }


  useEffect(() => {
    getData();
  }, [props])

  const getData = async () => {
    let jsonValue = await AsyncStorage.getItem('UserData')
    const data = JSON.parse(jsonValue);
    setAllData(data)
  }
  const OneData = async (userData) => {
    try {
      const jsonValues = JSON.stringify(userData)
      await AsyncStorage.setItem('UserDataOne', jsonValues);
      ToastAndroid.show('Successfully Login!', ToastAndroid.SHORT);
      // alert('success')
    } catch (e) {
      // alert('Valid MBL/EMAIL And Pasword')
      ToastAndroid.show('Valid MBL/EMAIL And Pasword!', ToastAndroid.SHORT);
      props.navigation.navigate('Login')
    }
  }

  const onSubmit = async () => {
    let status = await checkValidation();
    if (status) {
      const user = allData.find(item => ((item.Mobile === obj.username || item.Email === obj.username) && item.Password === obj.password))
      console.log('suvvvvvvvvvvvvvv', user);
      OneData(user)
      // setObj(obj.username = '')
      // setObj(obj.password = '')
      props.navigation.navigate('Home', { user: user })
    }
  }

  return (
    <View style={styles.head}>
      <View style={styles.top}>
        <Image source={require('../utils/image/doctoer.jpg')} style={styles.image} />
        <Text style={styles.header}>Login</Text>
      </View>
      <View style={styles.bottom}>
        <Inputbox
          name='username'
          title="MBL/EMAIL"
          KType="default"
          dataDetectorTypes="phoneNumber"
          maxLength={50}
          value={obj.username}
          onChangeText={onChangeFormData}
        />
        <View style={styles.condition2}>
          {error.username !== '' && (
            <Text style={styles.condition}>{error.username}</Text>
          )}
        </View>
        <Inputbox
          name='password'
          title="PASSWORD"
          KType="default"
          dataDetectorTypes="all"
          maxLength={25}
          value={obj.password}
          onChangeText={onChangeFormData}
        />
        <View style={styles.condition2}>
          {error.password !== '' && (
            <Text style={styles.condition}>{error.password}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.forgetpws} onPress={() => props.navigation.navigate('fPassword')}>
          <Text style={{ color: 'blue' }}>Forgot Password</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button title="Submit" /* onPress={() => navigation.navigate('Details')} */ onPress={() => onSubmit()} />
        </View>
        <TouchableOpacity style={styles.newUser} onPress={() => props.navigation.navigate('NewUser')}>
          <Text style={{ color: 'blue' }}>NEW USER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
