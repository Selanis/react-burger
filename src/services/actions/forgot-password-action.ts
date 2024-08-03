import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { FORGOT_REQUEST, FORGOT_SUCCESS, FORGOT_FAILED, FORGOT_INITIAL } from '../constants';
import { AppDispatch } from '../types';

export interface IForgotRequestAction {
    readonly type: typeof FORGOT_REQUEST;
}

export interface IForgotSuccessAction {
    readonly type: typeof FORGOT_SUCCESS;
}

export interface IForgotFailedAction {
    readonly type: typeof FORGOT_FAILED;
}

export interface IForgotInitialAction {
    readonly type: typeof FORGOT_INITIAL;
}

export type TForgotAction = IForgotRequestAction |
    IForgotSuccessAction |
    IForgotFailedAction |
    IForgotInitialAction 

export const forgotRequestAction = (): TForgotAction => ({
    type: FORGOT_REQUEST,
});

export const forgotSuccessAction = (): TForgotAction => ({
    type: FORGOT_SUCCESS,
});

export const forgotFailedAction = (): TForgotAction => ({
    type: FORGOT_FAILED,
});

export const forgotInitialAction = (): TForgotAction => ({
    type: FORGOT_INITIAL,
});

export function passwordRequest(email: string) {
    return function(dispatch: AppDispatch) {
        // Postman запрос

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "email": email
        });

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        dispatch(forgotRequestAction());

        fetch(`${BASE_API_URL}/password-reset`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            if (res.success) {
                dispatch(forgotSuccessAction())
            } else {
                dispatch(forgotFailedAction())
            }
        })
        .catch((err) => {
            forgotFailedAction()
            console.log(err)
        })
    }
}