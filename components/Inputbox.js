import React from 'react';
import { Text, View, TextInput} from 'react-native';
import styles from '../styles/Inputbox';


const Inputbox = props => {
  const {title, KType, dataDetectorTypes, maxLength ,onChangeText ,value,name} = props;
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.textinput}>
        <TextInput
          style={styles.textbox}
          dataDetectorTypes={dataDetectorTypes}
          maxLength={maxLength}
          keyboardType={KType}
          value={value}
          onChangeText={(e) => onChangeText(e,name)}
          name={name}
          // onChange={() => setValiduser(true)}
        />
      </View>
    </View>
  );
};

export default Inputbox;


