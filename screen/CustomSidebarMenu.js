import { Image, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../utils/color'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomSidebarMenu = ({ navigation }) => {
  const [userData, setUserData] = useState([])


  useEffect(() => {
    getData();
  }, [])


  const getData = async () => {
    let jsonValue = await AsyncStorage.getItem('UserDataOne')
    console.log("jsonValue---------------", jsonValue);
    const data = JSON.parse(jsonValue);
    setUserData(data)
  }
  const removeValue = async () => {
    // await AsyncStorage.removeItem('UserDataOne')
    navigation.closeDrawer()
  }

  const LogOut = async () => {
    try {
      await AsyncStorage.clear()
      navigation.navigate('App')
    } catch (e) {
      // clear error
    }
    // await AsyncStorage.clear()
    // navigation.navigate('Login')

  }

  return (
    <View style={{ flex: 1, flexDirection: 'column', height: height, width: width * .68 }}>
      <TouchableOpacity /* style={styles.newUser} */ onPress={() => removeValue()}>
        <Image source={{ uri: userData?.Img }} style={styles.img} />
        <View style={styles.title}>
          <TouchableOpacity style={styles.newUser} onPress={() => navigation.navigate('Home')}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="home" size={30} color={colors.black} />
              <Text style={styles.font}>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newUser} onPress={() => navigation.navigate('Password')}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="lock" size={30} color={colors.black} />
              <Text style={styles.font}>Change Password</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newUser} onPress={() => LogOut()}>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="close" size={30} color={colors.black} />
              <Text style={styles.font}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Text>
            Version 1.0.0
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default CustomSidebarMenu

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    borderRadius: 150,
    alignSelf: 'center',
    // marginTop:40,
    margin: 40,
  },
  newUser: {
    // flex:1,
    // justifyContent: 'flex-start',
    marginTop: 2,
    // alignSelf: 'flex-start',
    // alignSelf:'center',
  },
  title: {
    paddingLeft: 30,
    // flex:1
  },
  font: {
    color: colors.black,
    fontSize: 18,
    margin: 8
  },
  bottom: {
    // flex:1,
    marginTop: height * .45,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.kesari,
    padding: 20,

  }
})