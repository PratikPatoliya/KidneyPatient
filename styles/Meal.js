import { StyleSheet, Dimensions } from 'react-native'
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor:colors.darkWhite,
        height:height,
        width:width
    },
    head: {
        fontSize: 20,
        marginLeft: width * .1,
        marginRight: width * .1,
        marginTop: height * 0.1,
        marginBottom: height * 0.12
    },radiobtnmain:{
        flexDirection: 'row',
        marginTop: height * 0.02,
    },
    radiobtn: {
        flexDirection: 'row',
        // marginTop: height * 0.02,
        backgroundColor:colors.white,
        padding:width*0.05,
        paddingRight:width*0.05,
        paddingLeft:width*0.04,
        borderRadius:10
    },
    radiotext: {
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
    left: {
        marginLeft: width * .04
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