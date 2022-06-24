import {StyleSheet,Dimensions} from 'react-native';
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  head:{
    // flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:40,
    backgroundColor: colors.white,
    height:height
  },
  top:{
    backgroundColor: colors.kesari,
    height:height*0.4,
    borderBottomLeftRadius:width*0.25,
    borderBottomRightRadius:width*0.25,
    justifyContent: 'center',
    bottom:height*0.11,
    width:width
  },
  bottom:{
    alignItems: 'center',
    justifyContent: 'center',
    // top:60
    bottom:50,
    fontWeight:'700'    
  },
  button: {
    marginTop: 5,
    width:width*0.4
  },
  header: {
    top:10,
    fontSize: 25,
    alignSelf:'center',
    color:colors.white,
    fontWeight:'900'
  },
  newUser:{
    marginTop:10
  },
  forgetpws:{
    marginTop:10,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 200,
    backgroundColor:'red',
    alignSelf: 'center',
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
});
export default styles;  