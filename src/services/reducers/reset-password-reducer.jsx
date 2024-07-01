
import { RESET_FAILED, RESET_SUCCESS, RESET_REQUEST,SET_RESET_INITIAL } from "../actions/reset-password-action";

const initialState = {
    isSuccess: false,
    isRequest: false,
    isFailed: false,

    response: null
}

export const resetReducer = (state=initialState, action) => {
    switch (action.type) {
        case RESET_REQUEST: {
            return {
                ...state,
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        }
        case RESET_SUCCESS: {
            return {
                ...state,
                isSuccess: true,
                isRequest: false,

                response: action.response
            }
        }
        case RESET_FAILED: {
            return {
                ...state,
                isFailed: true,
                isRequest: false
            }
        }
        case SET_RESET_INITIAL: {
            return initialState
        }


        default: {
            return state
        }
    }
}