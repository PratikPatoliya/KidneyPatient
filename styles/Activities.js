import { StyleSheet, Dimensions, Platform } from 'react-native'
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    head: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:colors.darkWhite
        // top: 80
    },
    box:{
        backgroundColor:colors.white,
        alignItems: 'center', 
        height:height*0.6,
        width:width*0.95,
        paddingTop:15,
        borderRadius:15
    },
    title: {
        fontSize: 20,
        marginBottom: 25,
        fontWeight:'600',
        color:colors.black
    },
    textinput: {
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor:colors.greenlow,
        // marginLeft: 10,
    },
    textbox: {
        width: width * 0.85,
        height: height * 0.4,
        padding: 20,
        fontSize: 18,
        lineHeight: 25,
    },
    btn: {
        backgroundColor:colors.blue,
        width: width * 0.5,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 30
    },
    font: {
        color: colors.white,
        fontSize: 15,
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
})

export default styles;