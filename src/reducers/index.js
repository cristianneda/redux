import loggedReducer from "./isLogged";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    //can add another reducer
})

export default allReducers;