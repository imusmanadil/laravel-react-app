import * as types from '../actions/actionTypes';
import initialState from "../store/initialState";
import {isEmpty} from 'underscore';

export default function authReducer(state = {},action) {
    switch (action.type) {
        case types.LOG_IN_SUCCESS:
            console.log('working');
            return Object.assign({}, state , {
                isAuthenticated : !isEmpty(action.user),
                user : action.user
            });
        case types.LOG_OUT_SUCCESS:
            return Object.assign({},state, {
                isAuthenticated : false,
                user : null
            });
    
        default:
            return state;
    }
}