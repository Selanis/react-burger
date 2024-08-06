
import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { SET_AUTHORIZATION, SET_AUTHORIZATION_FAILED, SET_AUTHORIZATION_INITIAL, SET_AUTHORIZATION_REQUEST, SET_LOGIN_INFO, SET_LOGIN_INITIAL } from '../constants';
import { AppDispatch } from '../types';
import { setLoginInfoAction, setLoginInitialAction } from './login-action';

export interface ISetAuthorizationAction {
    readonly type: typeof SET_AUTHORIZATION;
}

export interface ISetAuthorizationInitialAction {
    readonly type: typeof SET_AUTHORIZATION_INITIAL;
}

export interface ISetAuthorizationFailedAction {
    readonly type: typeof SET_AUTHORIZATION_FAILED;
}

export interface ISetAuthorizationRequestAction {
    readonly type: typeof SET_AUTHORIZATION_REQUEST;
}

export type TSetAuthorizationAction = ISetAuthorizationAction |
    ISetAuthorizationFailedAction |
    ISetAuthorizationInitialAction |
    ISetAuthorizationRequestAction;

export const setAuthorizationAction = (): TSetAuthorizationAction => ({
    type: SET_AUTHORIZATION,
});

export const setAuthorizationRequestAction = (): TSetAuthorizationAction => ({
    type: SET_AUTHORIZATION_REQUEST,
});

export const setAuthorizationFailedAction = (): TSetAuthorizationAction => ({
    type: SET_AUTHORIZATION_FAILED,
});

export const setAuthorizationInitialAction = (): TSetAuthorizationAction => ({
    type: SET_AUTHORIZATION_INITIAL,
});

export const updateToken = (afterError: boolean) => {
    return function(dispatch: AppDispatch) {
        const refreshToken = localStorage.getItem("refreshToken")

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "token": refreshToken
        });

        dispatch(setAuthorizationRequestAction())

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/token`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch(setAuthorizationAction())

                localStorage.setItem('refreshToken', res.refreshToken);
                localStorage.setItem('accessToken', res.accessToken);

                afterError && dispatch( getUserInfo() )

            }
        })
        .catch((err) => {
            dispatch(setAuthorizationFailedAction())
            console.log("update")
            console.log(err)
        })
    }
}

export const getUserInfo = () => {
    return function(dispatch: AppDispatch) {
        dispatch(setAuthorizationRequestAction())

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("authorization", localStorage.getItem("accessToken")!);

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/user`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch(setAuthorizationAction())

                dispatch(setLoginInfoAction(res));
            }
        })
        .catch((err) => {
            dispatch(setAuthorizationFailedAction())
            console.log("load")
            console.log(err)

            if (localStorage.getItem("refreshToken")) {
                dispatch( updateToken(true) )
            }
        })
    }
}

export const logout = () => {
    return function(dispatch: AppDispatch) {

        dispatch(setAuthorizationRequestAction())

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "token": localStorage.getItem("refreshToken")
        });

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: raw
        };


        fetch(`${BASE_API_URL}/auth/logout`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch(setAuthorizationInitialAction())

                dispatch(setLoginInitialAction())

                localStorage.removeItem("refreshToken");
                localStorage.removeItem("accessToken");
            }
        })
        .catch((err) => {
            dispatch(setAuthorizationFailedAction())
            console.log("logout")
            console.log(err)
        })
    }
}

export const updateLogin = (name: string, login: string) => {
    return function(dispatch: AppDispatch) {
        const myHeaders = new Headers();
        myHeaders.append("authorization", localStorage.getItem("accessToken")!);
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "name": name,
            "login": login
        });

        const requestOptions: RequestInit = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/user`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch(setLoginInfoAction(res))
            }
        })
        .catch((err) => {
            console.log("updateUserInfo")
            console.log(err)
        })
    }
}