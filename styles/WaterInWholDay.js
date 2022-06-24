import { StyleSheet, Dimensions } from 'react-native'
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.darkWhite,
        height:height,
        width:width,
        alignItems:'center',
        paddingTop:height*0.08,
        
    },
    box:{
        backgroundColor:colors.white,
        width:width*0.9,
        padding:width*0.1,
        borderRadius:10
    },  
    head: {
        fontSize: 20,
        // padding:width*0.1
        paddingBottom:width*0.12
    },
    radiobtn: {
        flexDirection: 'row',
        marginTop: height * 0.02,
        marginLeft: width * .1,
        marginRight: width * .1,
    },
    radiotext: {
        // flex:0.4,
        marginTop: 4,
        fontSize: 20
    },
    btn: {
        backgroundColor: colors.blue,
        width: width * 0.5,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 100,
        alignSelf: 'center'
    },
    btnfont: {
        color: colors.white,
        fontSize: 15,
    },
    condition: {
        color: 'red',
        alignSelf: 'center',
        marginTop:2,
        marginBottom: -10,
        fontSize: 14,
    },
    condition2: {
        height: height * 0.014,
    },
})

export default styles;