import { StyleSheet, Dimensions } from 'react-native'
import colors from '../utils/color';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    head: {
        padding: width * .1,
        backgroundColor: colors.darkWhite,
        height: height
    },
    box: {
        backgroundColor:colors.white,
        padding:25,
        borderRadius:10
    },
    radiobtn: {
        flexDirection: 'row',
        marginTop: 20
    },
    radiotext: {
        // flex:0.4,
        marginTop: 5,
        fontSize: 20
    },
    font: {
        fontSize: 20,
        marginBottom: 40
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