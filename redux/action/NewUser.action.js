import { SET_BPOST_STATE, SET_USER_ERROR } from "../types/NewUser.types"
import axios from "axios";
import BASE_URL from "../../config/BaseUrl";
const api = `${BASE_URL}/newUser`;
import AsyncStorage from '@react-native-async-storage/async-storage';

const setUserData = userData => {
    // console.log("setUserDatasetUserData",userData);
    return {
        type: SET_BPOST_STATE,
        payload: userData
    }
}

const setUserError = userError => {
    return {
        type: SET_USER_ERROR,
        payload: userError
    }
}

export const NewUserData = (Data) => {
    // console.log("Data", Data);
    return async(dispatch) => {
        // debugger
        // console.log('api',api);
        await axios.post(api, Data).then(res => {
            // console.log("data++++++",res);
                dispatch(setUserData(res))
                // debugger
                // return true
            }
            ).catch(err => {
                // console.log("error",err);
                // debugger
                dispatch(setUserError(err))
            }
            )
    }
}

// export const NewUserData = async (Data) => {
//     try {
//         const jsonValue = JSON.stringify(Data)
//         await AsyncStorage.setItem('UserData', jsonValue);
//         alert('success')
//     } catch (e) {
//         alert('err')
//       }
// }