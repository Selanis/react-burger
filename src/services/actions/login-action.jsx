
import { API_URL_LOGIN } from '../../utils/config';
import { Navigate } from "react-router-dom";

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

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(API_URL_LOGIN, requestOptions)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
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