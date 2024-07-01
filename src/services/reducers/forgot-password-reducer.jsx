
import { PASSWORD_FAILED, PASSWORD_REQUEST, PASSWORD_SUCCESS, SET_FORGOT_INITIAL } from '../actions/forgot-password-action';

const initialState = {
    isRequest: false,
    isSuccess: false,
    isFailed: false,

    response: null
}

export const forgotReducer = (state=initialState, action) => {
    switch (action.type) {
        case PASSWORD_REQUEST: {
            return {
                ...state,
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        }
        case PASSWORD_SUCCESS: {
            return {
                ...state,
                isSuccess: true,
                isRequest: false,

                response: action.response
            }
        }
        case PASSWORD_FAILED: {
            return {
                ...state,
                isFailed: true,
                isRequest: false
            }
        }
        case SET_FORGOT_INITIAL: {
            return initialState
        }

        default: {
            return state
        }
    }
} 