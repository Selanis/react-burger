import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { RESET_FAILED, RESET_REQUEST, RESET_SUCCESS, SET_RESET_INITIAL } from '../constants';
import { AppDispatch } from '../types';

export interface IResetSuccessAction {
    readonly type: typeof RESET_SUCCESS;
    readonly response: any;
}

export interface IResetRequiredAction {
    readonly type: typeof RESET_REQUEST;
}

export interface IResetFailedAction {
    readonly type: typeof RESET_FAILED;
}

export interface ISetResetInitialAction {
    readonly type: typeof SET_RESET_INITIAL;
}

export type TResetAction = IResetSuccessAction |
    IResetFailedAction |
    IResetRequiredAction |
    ISetResetInitialAction;

export const resetSuccessAction = (res: any): TResetAction => ({
    type: RESET_SUCCESS,
    response: res
});

export const resetRequestAction = (): TResetAction => ({
    type: RESET_REQUEST,
});

export const resetFailedAction = (): TResetAction => ({
    type: RESET_FAILED,
});

export const setResetInitialAction = (): TResetAction => ({
    type: SET_RESET_INITIAL,
});

export function resetRequest(token: string, password: string) {
    return function(dispatch: AppDispatch) {
        
        dispatch(resetRequestAction())

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "token": token,
            "password": password,
        });

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/password-reset/reset`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch(resetSuccessAction(res))
            } else {
                dispatch(resetFailedAction())
            }
        })
        .catch((err) => {
            dispatch(resetFailedAction())
            console.log(err)
        })
    }
}