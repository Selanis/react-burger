
import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, SET_LOGIN_INFO, SET_LOGIN_INITIAL } from '../constants';
import { AppDispatch } from '../types';

export interface ILoginRequestAction {
    readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
    readonly type: typeof LOGIN_SUCCESS;
}

export interface ILoginFailedAction {
    readonly type: typeof LOGIN_FAILED;
}

export interface ISetLoginInitialAction {
    readonly type: typeof SET_LOGIN_INITIAL;
}

export interface ISetLoginInfoAction {
    readonly type: typeof SET_LOGIN_INFO;
    user: null | {
        email: string,
        name: string
    }
    readonly authorization: boolean;
}

export type TLoginAction = ILoginRequestAction |
    ILoginSuccessAction |
    ILoginFailedAction |
    ISetLoginInitialAction |
    ISetLoginInfoAction

export const loginFailedAction = (): TLoginAction => ({
    type: LOGIN_FAILED,
});

export const loginSuccessAction = (): TLoginAction => ({
    type: LOGIN_SUCCESS,
});

export const loginRequestAction = (): TLoginAction => ({
    type: LOGIN_REQUEST,
});

export const setLoginInfoAction = (res: any): TLoginAction => ({
    type: SET_LOGIN_INFO,
    user: res.user,
    authorization: true,
});

export const setLoginInitialAction = (): TLoginAction => ({
    type: SET_LOGIN_INITIAL,
});


export function loginRequest(email: string, password: string) {
    return function(dispatch: AppDispatch) {

        dispatch(loginRequestAction())

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password
        });

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/login`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch(loginSuccessAction())

                dispatch(setLoginInfoAction(res))

                localStorage.setItem('refreshToken', res.refreshToken)
                localStorage.setItem('accessToken', res.accessToken)
            } else {
                dispatch(loginFailedAction())
            }
        })
        .catch((err) => {
            dispatch(loginFailedAction())
            console.log(err)
        })
    }
}