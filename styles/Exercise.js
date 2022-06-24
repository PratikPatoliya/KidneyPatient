import { StyleSheet, Dimensions } from 'react-native'
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingTop:50,
        backgroundColor:colors.darkWhite,
        height:height
    },
    head: {
        fontSize: 20,
        paddingTop:20
    },
    box:{
        alignItems:'center',
        backgroundColor:colors.white,
        borderRadius:15,

    },
    btn: {
        backgroundColor: colors.blue,
        width: width * 0.25,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        margin: 20,
        marginTop: 30
    },
    font: {
        color:colors.white,
        fontSize: 15,
    },
    mainBtnView: {
        marginTop: 70,
        flexDirection: 'row'
    }
})

export default styles;