import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { TUserInfo } from '../../utils/types';
import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, SET_REGISTER_INITIAL } from '../constants'
import { AppDispatch } from '../types';
import { setLoginInfoAction } from './login-action';

type TResponseType = {
    success: boolean;
    accessToken: string;
    refreshToken: string;
    user: TUserInfo;
}

export interface IRegisterFailedAction {
    readonly type: typeof REGISTER_FAILED;
}

export interface IRegisterSuccessAction {
    readonly type: typeof REGISTER_SUCCESS;
}

export interface IRegisterRequestAction {
    readonly type: typeof REGISTER_REQUEST;
}

export interface ISetRegisterInitialAction {
    readonly type: typeof SET_REGISTER_INITIAL;
}

export type TRegisterAction = IRegisterFailedAction |
    IRegisterRequestAction |
    IRegisterSuccessAction |
    ISetRegisterInitialAction;

export const registerFailedAction = (): TRegisterAction => ({
    type: REGISTER_FAILED,
});

export const registerSuccessAction = (res: TResponseType): TRegisterAction => ({
    type: REGISTER_SUCCESS,
});

export const registerRequestAction = (): TRegisterAction => ({
    type: REGISTER_REQUEST,
});

export const setRegisterInitialAction = (): TRegisterAction => ({
    type: SET_REGISTER_INITIAL,
});

export function registerRequest(email: string, name: string, password: string) {
    return function(dispatch: AppDispatch) {
        
        dispatch(registerRequestAction())

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email,
            "password": password,
            "name": name
        });

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/auth/register`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch(registerSuccessAction(res))

                dispatch(setLoginInfoAction(res))

                localStorage.setItem('refreshToken', res.refreshToken)
                localStorage.setItem('accessToken', res.accessToken)
            } else {
                dispatch(registerFailedAction())
            }
        })
        .catch((err) => {
            dispatch(registerFailedAction())
            console.log(err)
        })
    }
}