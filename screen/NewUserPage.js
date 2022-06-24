import { Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import SecondInputbox from '../components/SecondInputbox';
import { useDispatch } from 'react-redux';
import { NewUserData } from '../redux/action/NewUser.action';
import styles from '../styles/NewUserPage';
import initialState from './initialState.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewUserPage = ({ navigation }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState('');
    const [checkedErr, setCheckedErr] = useState('');
    const [allData, setAllData] = useState([]);
    const [obj, setObj] = useState({
        name: '',
        mobile: '',
        email: '',
        dob: '',
    })
    const [error, setError] = useState({
        name: '',
        mobile: '',
        email: '',
        dob: '',
    })

    const onChangeFormData = (values, name) => {
        setObj({ ...obj, [name]: values });
        setError({ ...error, [name]: '' });
    }

    const genderValidate = (value) => {
        setChecked(value)
        setCheckedErr('')
    }

    const checkValidation = () => {
        let error = true;
        var emailVlidation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // const repetnumber = allData.find(item => (item.Mobile === obj.mobile));
        const repetnumber = allData?.find(item =>  (item.Mobile == obj.mobile));

        let nameMsg = '';
        let mobileMsg = '';
        let emailMsg = '';
        let dobMsg = '';
        if (obj.name === '') {
            nameMsg = 'Name is Required!'
            error = false;
        }

        if (obj.mobile === '') {
            mobileMsg = 'Mobile Number is Required!'
            error = false;
        } else if (obj.mobile.length < 10) {
            mobileMsg = 'Mobile Number is not Valid!'
            error = false;
        } 
        else if (repetnumber) {
            mobileMsg = 'Mobile Number is Already Exists!'
            error = false;
        }

        
        if (obj.email === '') {
            emailMsg = 'Company Email is Required!';
            error = false;
        } else if (emailVlidation.test(obj.email) === false) {
            emailMsg = 'Company Email is not Valid!';
            error = false;
        }

        if (obj.dob === '') {
            dobMsg = 'Password Required!'
            error = false;
        }
        
        if (checked === '') {
            setCheckedErr('Gender Required!')
            error = false;
        }

        setError({
            name: nameMsg,
            mobile: mobileMsg,
            email: emailMsg,
            dob: dobMsg,
        });
        return error;
    }

    const onSubmitFormData = async () => {
        let status = await checkValidation();

        if (status) {
            try {
                await dispatch(NewUserData({
                    // "id": Math.random().toString().substr(9, 4),
                    "name": obj.name,
                    "mobile": obj.mobile,
                    "email": obj.email,
                    "dob": obj.dob,
                    "gender": checked
                })
                )
            } catch (error) {
                alert('alert')
            }
            navigation.navigate('Activities')
            initialState.Name = obj.name,
                initialState.Mobile = obj.mobile,
                initialState.Email = obj.email,
                initialState.Password = obj.dob,
                initialState.Gender = checked,
                console.log("initialState", initialState)
        }
    }


    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        let jsonValue = await AsyncStorage.getItem('UserData')
        const data = JSON.parse(jsonValue);
        console.log("homePage", data);
        setAllData(data)
    }

    return (
        <View style={styles.head}>
            <View style={styles.box}>
                <SecondInputbox name="name" title='NAME' value={obj.name} onChangehandler={onChangeFormData} />
                <View style={styles.condition2}>
                    {error.name !== '' && (
                        <Text style={styles.condition}>{error.name}</Text>
                    )}
                </View>
                <SecondInputbox name="mobile" title='MOBILE' value={obj.mobile} onChangehandler={onChangeFormData} maxLength={10} KType='number-pad' />
                <View style={styles.condition2}>
                    {error.mobile !== '' && (
                        <Text style={styles.condition}>{error.mobile}</Text>
                    )}
                </View>
                <SecondInputbox name="email" title='EMAIL' value={obj.email} onChangehandler={onChangeFormData} KType='email-address' />
                <View style={styles.condition2}>
                    {error.email !== '' && (
                        <Text style={styles.condition}>{error.email}</Text>
                    )}
                </View>
                <SecondInputbox name="dob" title='Password' value={obj.dob} onChangehandler={onChangeFormData} />
                <View style={styles.condition2}>
                    {error.dob !== '' && (
                        <Text style={styles.condition}>{error.dob}</Text>
                    )}
                </View>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>GENGER</Text>
                    <View style={styles.radiobtn}>
                        <View style={styles.radiobtn}>
                            <RadioButton
                                value="Male"
                                status={checked === 'Male' ? 'checked' : 'unchecked'}
                                onPress={() => genderValidate('Male')}
                            />
                            <Text style={styles.radiotext}>Male</Text>
                        </View>
                        <View style={styles.radiobtn}>
                            <RadioButton
                                value="Female"
                                status={checked === 'Female' ? 'checked' : 'unchecked'}
                                onPress={() => genderValidate('Female')}
                            />
                            <Text style={styles.radiotext}>Female</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.condition2}>
                    {checkedErr !== '' && (
                        <Text style={styles.condition}>{checkedErr}</Text>
                    )}
                </View>
                <TouchableOpacity style={styles.btn} /* onPress={() => navigation.navigate('Activities')} */ onPress={onSubmitFormData}>
                    <Text style={styles.font}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default NewUserPage;
