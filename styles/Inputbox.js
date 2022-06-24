import {StyleSheet, Dimensions} from 'react-native';
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    text: {
      marginTop: 10,
      marginBottom: 10,
      fontWeight:'600',
      color:colors.black
    },
    textinput: {
      borderWidth: 0.5,
      borderRadius: 8,
      backgroundColor:colors.greenlow,
      marginLeft: 10,
    },
    textbox: {
      paddingTop: Platform.OS === 'ios' ? 10 : 11,
      width: width * 0.85,
      paddingLeft: 12,
    },
});

export default styles;