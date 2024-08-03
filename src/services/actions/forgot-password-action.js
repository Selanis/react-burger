import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';

export const PASSWORD_REQUEST = 'PASSWORD_REQUEST';
export const PASSWORD_SUCCESS = 'PASSWORD_SUCCESS';
export const PASSWORD_FAILED = 'PASSWORD_FAILED';
export const SET_FORGOT_INITIAL = 'SET_FORGOT_INITIAL';

export function passwordRequest(email) {
    return function(dispatch) {
        // Postman запрос

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        dispatch({
            type: PASSWORD_REQUEST
        })

        fetch(`${BASE_API_URL}/password-reset`, requestOptions)
        .then(checkResponse)
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