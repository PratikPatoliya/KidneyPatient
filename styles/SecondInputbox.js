import {StyleSheet, Dimensions } from 'react-native';
import colors from '../utils/color';
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    text2: {
      flex:0.6,
      marginTop: 15,
      // marginRight:10
      fontWeight:'600',
        color:colors.black
    },
    textinput: {
      borderWidth: 0.5,
      borderRadius: 8,
      backgroundColor: colors.greenlow,
      marginLeft: 10,
    },
    textbox2: {
      paddingTop: Platform.OS === 'ios' ? 10 : 11,
      width: width * 0.65,
      paddingLeft: 12,
    },
  });

  export default styles