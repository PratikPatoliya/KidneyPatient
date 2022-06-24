import { StyleSheet, Dimensions } from 'react-native';
import colors from '../utils/color';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    head: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // bottom: 40,
        backgroundColor:colors.darkWhite,
        // height:height*0.2,
        // width:width*.95,
        paddingBottom:35
    },
    box:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.white,
        height:height*0.61,
        width:width*.95,
        borderRadius:20,
    },
    radiobtn: {
        flexDirection: 'row',
        right: 50,
    },
    radiotext: {
        // flex:0.4,
        marginTop: 7,
        fontWeight:'600',
        color:colors.black
    },
    title: {
        flexDirection: 'row',
        marginTop: 15,
    },
    textTitle: {
        flex: 0.8,
        marginTop: 7,
        fontWeight:'600',
        color:colors.black
    },
    btn: {
        backgroundColor: colors.blue,
        width: width * 0.5,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 25,
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
});

export default styles;
