import { SET_BPOST_STATE, SET_USER_ERROR } from "../types/NewUser.types";

const initialState = {
    setUserError: '',
    userData: null,
};


export const NewUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BPOST_STATE:
            // console.log("action.payloadaction.payload",action);
            return {
                ...state,
                userData: action.payload,
            };
        case SET_USER_ERROR:
            return {
                ...state,
                setUserError: action.payload,
            }
        default:
            return state
    }
}
