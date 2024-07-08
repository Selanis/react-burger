import { API_URL_FORGOT_PASSWORD } from '../../utils/config';

export const PASSWORD_REQUEST = 'PASSWORD_REQUEST';
export const PASSWORD_SUCCESS = 'PASSWORD_SUCCESS';
export const PASSWORD_FAILED = 'PASSWORD_FAILED';
export const SET_FORGOT_INITIAL = 'SET_FORGOT_INITIAL';

export function passwordRequest(email) {
    return function(dispatch) {
        // Postman запрос

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        dispatch({
            type: PASSWORD_REQUEST
        })

        fetch(API_URL_FORGOT_PASSWORD, requestOptions)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: PASSWORD_SUCCESS,
                    response: res
                })
            } else {
                dispatch({
                    type: PASSWORD_FAILED
                })
            }
        })
        .catch((err) => {
            dispatch({
                type: PASSWORD_FAILED
            })
            console.log(err)
        })
    }
}