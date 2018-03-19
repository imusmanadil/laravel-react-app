import * as types from './actionTypes';
import axios from 'axios';
import jwtDecode from 'jwt-decode';


export function loginSuccess(user) {
    return {
        type : types.LOG_IN_SUCCESS,
        user : user
    };
}
export function logoutSuccess(user) {
    return {
        type : types.LOG_OUT_SUCCESS,
        user : null
    };
}

export function login(data){
    return (dispatch) => {
         axios.post('api/auth/login',data).then(response => {
            console.log(response);
            const token = response.data.access_token;
            localStorage.setItem('jwtToken',token);
            setAuthorizationToken(token);
            console.log(jwtDecode(token));
            const user = response.data.user;
            dispatch(loginSuccess(user));

        }).catch(error=>{
            throw (error);
        });
    };
}


export function setAuthorizationToken(token, refresh = false) {
    if (token) {
        // refresh && removeAxiosDefaultToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        // removeAxiosDefaultToken();
    }
}