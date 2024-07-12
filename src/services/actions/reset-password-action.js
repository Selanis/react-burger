import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';

export const RESET_SUCCESS = 'RESET_SUCCESS';
export const RESET_REQUEST = 'RESET_REQUIRED';
export const RESET_FAILED = 'RESET_FAILED';
export const SET_RESET_INITIAL = 'SET_RESET_INITIAL';

export function resetRequest(token, password) {
    return function(dispatch) {
        
        dispatch({
            type: RESET_REQUEST
        })

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "token": token,
            "password": password,
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/password-reset/reset`, requestOptions)
        .then(checkResponse)
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