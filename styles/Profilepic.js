import { StyleSheet, Dimensions } from 'react-native';
import colors from '../utils/color';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    head: {
        flex: 1,
        alignItems: 'center',
        paddingTop:90,
        backgroundColor:colors.darkWhite
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modelContainer: {
        backgroundColor: colors.white,
        padding: 15,
        width: width * 0.8,
        height: height * 0.24,
        borderRadius: 4,
        justifyContent: 'space-between',
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    btn: {
        backgroundColor: colors.blue,
        width: width * 0.2,
        height: height * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 120
    },
    font: {
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