import {Text, View,TextInput} from 'react-native';
import React from 'react';
import styles from '../styles/SecondInputbox';

const SecondInputbox = (props) => {
  const {title, KType, dataDetectorTypes, maxLength,value ,onChangehandler, name ,onChange} = props;
  return (
    <View style={{flexDirection: 'row' ,marginTop:20}}>
      <Text style={styles.text2}>{title}</Text>
      <View style={styles.textinput}>
        <TextInput
          style={styles.textbox2}
          dataDetectorTypes={dataDetectorTypes}
          maxLength={maxLength}
          keyboardType={KType}
          value={value}
          onChangeText={(e) => onChangehandler(e,name)}
          name={name}
          onChange={onChange}
        />
      </View>
    </View>
  );
};

export default SecondInputbox;

