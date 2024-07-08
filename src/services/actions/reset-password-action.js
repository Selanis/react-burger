import { API_URL_RESET_PASSWORD } from '../../utils/config';

export const RESET_SUCCESS = 'RESET_SUCCESS';
export const RESET_REQUEST = 'RESET_REQUIRED';
export const RESET_FAILED = 'RESET_FAILED';
export const SET_RESET_INITIAL = 'SET_RESET_INITIAL';

export function resetRequest(token, password) {
    return function(dispatch) {
        
        dispatch({
            type: RESET_REQUEST
        })

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "token": token,
            "password": password,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(API_URL_RESET_PASSWORD, requestOptions)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: RESET_SUCCESS,
                    response: res
                })
            } else {
                dispatch({
                    type: RESET_FAILED
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: RESET_FAILED
            })
            console.log(err)
        })
    }
}