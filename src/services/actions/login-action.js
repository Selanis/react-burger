
import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';

export const SET_LOGIN_INFO = "SET_LOGIN_INFO";

export const LOGIN_REQUEST = "LOGIN_REQUEST"; 
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"; 
export const LOGIN_FAILED = "LOGIN_FAILED"; 
export const SET_LOGIN_INITIAL = "SET_LOGIN_INITIAL"; 

export function loginRequest(email, password) {
    return function(dispatch) {

        dispatch({
            type: LOGIN_REQUEST
        })

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/login`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: LOGIN_SUCCESS,
                })

                dispatch({
                    type: SET_LOGIN_INFO,
                    user: res.user,
                    authorization: true
                })

                localStorage.setItem('refreshToken', res.refreshToken)
                localStorage.setItem('accessToken', res.accessToken)
            } else {
                dispatch({
                    type: LOGIN_FAILED
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_FAILED
            })
            console.log(err)
        })
    }
}