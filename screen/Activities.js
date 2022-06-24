import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/Activities'
import initialState from './initialState.js';

const Activities = ({ navigation }) => {

  console.log("initialState123", initialState);

  const [activities, setActivities] = useState('');
  const [activitieserr, setActivitiesErr] = useState('');
  console.log(activities);

  const validation = (values) => {
    setActivities(values);
    setActivitiesErr('');
  }
  const onSubmit = () => {
    if (activities === '') {
      setActivitiesErr('Activities is Required!')
    } else if (activities.length < 20) {
      setActivitiesErr('Activities is not Valid! Min 20 length')
    } else {
      initialState.Activities = activities;
      navigation.navigate('ProfilePicture')
    }
  }

  return (
    <View style={styles.head}>
      <View style={styles.box}>
        <Text style={styles.title}>TEL US ABOUT YOUR DAIL ACTIVITIES</Text>
        <View style={styles.textinput}>
          <TextInput
            style={styles.textbox}
            keyboardType='default'
            placeholder='PICTURES OF SOME ACTIVITIES LIKE CYBLING JOGGING EXERCISE'
            multiline={true}
            selectTextOnFocus={true}
            textAlignVertical='top'
            numberOfLines={20}
            value={activities}
          
            onChangeText={(e) => validation(e)}
          />
        </View>
        <View style={styles.condition2}>
          {activitieserr !== '' && (
            <Text style={styles.condition}>{activitieserr}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
          <Text style={styles.font}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Activities

