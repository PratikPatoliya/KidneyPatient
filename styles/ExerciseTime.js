import { StyleSheet, Dimensions} from 'react-native'
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header:{ 
        alignItems: 'center',
        paddingTop:height*0.09,
        backgroundColor:colors.darkWhite,
        height:height
    },
    box:{
        backgroundColor:colors.white,
        alignItems: 'center',
        width:width*0.85,
        height:height*0.5,
        borderRadius:15
    },
    head: {
        fontSize: 20,
        marginTop: height * 0.05
    },
    textbox: {
        paddingTop: Platform.OS === 'ios' ? 10 : 11,
        width: width * 0.25,
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor: colors.greenlow,
        marginLeft: 15,
        textAlign: 'center',
        fontSize: 15
    },
    dmy: {
        flexDirection: 'row',
        marginTop: height * .15
    },
    btn: {
        backgroundColor:colors.blue,
        width: width * 0.5,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: height*0.1
      },
      btnfont: {
        color: colors.white,
        fontSize: 15,
      },
      condition: {
        color: 'red',
        alignSelf: 'center',
        // marginLeft: width * 0.09,
        marginTop: 2,
        marginBottom: -10,
        fontSize: 12,
    },
    condition2: {
        height: height * 0.014,
    },
})

export default styles;