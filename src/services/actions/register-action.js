import { API_URL_REGISTER } from '../../utils/config';
import { SET_LOGIN_INFO } from './login-action'

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const SET_REGISTER_INITIAL = 'SET_REGISTER_INITIAL';

export function registerRequest(email, name, password) {
    return function(dispatch) {
        
        dispatch({
            type: REGISTER_REQUEST
        })

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password,
            "name": name
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(API_URL_REGISTER, requestOptions)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: REGISTER_SUCCESS,
                    response: res
                })

                dispatch({
                    type: SET_LOGIN_INFO,
                    user: res.user,
                    authorization: res.accessToken
                })

                localStorage.setItem('refreshToken', res.refreshToken)
                localStorage.setItem('accessToken', res.accessToken)
            } else {
                dispatch({
                    type: REGISTER_FAILED
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_FAILED
            })
            console.log(err)
        })
    }
}