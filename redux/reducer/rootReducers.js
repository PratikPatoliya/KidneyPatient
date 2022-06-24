import { combineReducers } from 'redux';
import { NewUserDataReducer } from './NewUserReducer';

const rootReducers = combineReducers({
    NewUserDataReducer: NewUserDataReducer

});

export default rootReducers;
