
import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, SET_REGISTER_INITIAL } from '../actions/register-action'

const initialState = {
    isRequest: false,
    isSuccess: false,
    isFailed: false,

    response: {}
}

export const registerReducer = (state=initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST: {
            return {
                ...state,
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                isSuccess: true,
                isRequest: false,

                response: action.response
            }
        }
        case REGISTER_FAILED: {
            return {
                ...state,
                isFailed: true,
                isRequest: false
            }
        }
        case SET_REGISTER_INITIAL: {
            return initialState
        }


        default: {
            return state
        }
    }
}