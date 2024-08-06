import { TForgotAction } from "../actions/forgot-password-action";
import { FORGOT_FAILED, FORGOT_REQUEST, FORGOT_SUCCESS, FORGOT_INITIAL } from "../constants"
import { TRequestReducer } from "../types";

interface IForgotInitialState extends TRequestReducer {};

const initialState: IForgotInitialState = {
    isRequest: false,
    isSuccess: false,
    isFailed: false
}

export const forgotReducer = (state=initialState, action: TForgotAction): IForgotInitialState => {
    switch (action.type) {
        case FORGOT_REQUEST: {
            return {
                ...state,
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        }
        case FORGOT_SUCCESS: {
            return {
                ...state,
                isSuccess: true,
                isRequest: false,
            }
        }
        case FORGOT_FAILED: {
            return {
                ...state,
                isFailed: true,
                isRequest: false
            }
        }
        case FORGOT_INITIAL: {
            return initialState
        }

        default: {
            return state
        }
    }
} 