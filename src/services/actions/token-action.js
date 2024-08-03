
import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { SET_LOGIN_INFO, SET_LOGIN_INITIAL } from './login-action';

export const SET_AUTHORIZATION = 'SET_AUTHTORIZATION';
export const SET_AUTHORIZATION_INITIAL = 'SET_AUTHTORIZATION_INITIAL';
export const SET_AUTHORIZATION_FAILED = 'SET_AUTHTORIZATION_FAILED';
export const SET_AUTHORIZATION_REQUEST = 'SET_AUTHORIZATION_REQUEST';

export const updateToken = (afterError) => {
    return function(dispatch) {
        const refreshToken = localStorage.getItem("refreshToken")

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "token": refreshToken
        });

        dispatch({
            type: SET_AUTHORIZATION_REQUEST
        })

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/token`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: SET_AUTHORIZATION,
                })

                localStorage.setItem('refreshToken', res.refreshToken);
                localStorage.setItem('accessToken', res.accessToken);

                afterError && dispatch( getUserInfo() )

            }
        })
        .catch((err) => {
            dispatch({
                type: SET_AUTHORIZATION_FAILED
            })
            console.log("update")
            console.log(err)
        })
    }
}

export const getUserInfo = () => {
    return function(dispatch) {
        dispatch({
            type: SET_AUTHORIZATION_REQUEST
        })

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", localStorage.getItem("accessToken"));

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/user`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: SET_AUTHORIZATION,
                })

                dispatch({
                    type: SET_LOGIN_INFO,
                    user: res.user
                });
            }
        })
        .catch((err) => {
            dispatch({
                type: SET_AUTHORIZATION_FAILED
            })
            console.log("load")
            console.log(err)

            if (localStorage.getItem("refreshToken")) {
                dispatch( updateToken(true) )
            }
        })
    }
}

export const logout = () => {
    return function(dispatch) {

        dispatch({
            type: SET_AUTHORIZATION_REQUEST
        })

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "token": localStorage.getItem("refreshToken")
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: raw
        };


        fetch(`${BASE_API_URL}/auth/logout`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: SET_AUTHORIZATION_INITIAL
                })

                dispatch({
                    type: SET_LOGIN_INITIAL
                })

                localStorage.removeItem("refreshToken");
                localStorage.removeItem("accessToken");
            }
        })
        .catch((err) => {
            dispatch({
                type: SET_AUTHORIZATION_FAILED
            })
            console.log("logout")
            console.log(err)
        })
    }
}

export const updateLogin = (name, login) => {
    return function(dispatch) {
        const myHeaders = new Headers();
        myHeaders.append("authorization", localStorage.getItem("accessToken"));
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": name,
            "login": login
        });

        const requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/user`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch({
                    type: SET_LOGIN_INFO,
                    user: res.user
                })
            }
        })
        .catch((err) => {
            console.log("updateUserInfo")
            console.log(err)
        })
    }
}