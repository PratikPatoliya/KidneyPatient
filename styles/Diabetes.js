import { StyleSheet, Dimensions} from 'react-native'
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    head:{
        flex: 1,
        padding: 35,
        alignItems:'center',
        backgroundColor:colors.darkWhite,
    },
    box:{
        alignItems:'center',
        backgroundColor:colors.white,
        width:width*0.9,
        height:height*0.4,
        justifyContent:'center',
        top:height*0.06,
        borderRadius:10,
        padding:10  
    }, 
    container: {
        flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 10,
        backgroundColor:colors.white,
        padding:20,
        borderRadius:10
    },
    font: {
        marginRight: 20,
        fontSize: 20
    },
    secondFont: {
        fontSize: 22,
        marginTop: 20
    },
    textbox: {
        paddingTop: Platform.OS === 'ios' ? 10 : 11,
        width: width * 0.25,
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor: colors.greenlow,
        marginLeft: 5,
        marginRight:5,
        textAlign: 'center',
        fontSize: 15
    },
    dmy: {
        flexDirection: 'row',
        marginTop: 40
    },
    btn: {
        backgroundColor: colors.blue,
        width: width * 0.5,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 50
      },
      btnfont: {
        color: colors.white,
        fontSize: 15,
      },
      condition: {
        color: 'red',
        // alignSelf: 'center',
        marginLeft: width * 0.022,
        marginTop: 2,
        marginBottom: -10,
        fontSize: 12,
    },
    condition2: {
        height: height * 0.014,
    },
})
export default styles;