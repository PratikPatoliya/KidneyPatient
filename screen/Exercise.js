import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../styles/Exercise';
import initialState from './initialState';

const Exercise = ({ navigation }) => {
  console.log('Exercise',initialState);

  const onYes = () =>{
    initialState.Exercise = 'Yes'
    navigation.navigate('ExerciseOften')
  }
  const onNo = () =>{
    initialState.Exercise = 'No'
    navigation.navigate('WaterInWholDay')
  }
  return (
    <View style={styles.header}>
      <View style={styles.box}>
        <Text style={styles.head}>Do You Exercise ?</Text>
        <View style={styles.mainBtnView}>
          <TouchableOpacity style={styles.btn} onPress={() => onYes()}>
            <Text style={styles.font}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => onNo()}>
            <Text style={styles.font}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Exercise;