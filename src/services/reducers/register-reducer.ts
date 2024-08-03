
import { TRegisterAction } from '../actions/register-action'
import { REGISTER_FAILED, REGISTER_REQUEST, REGISTER_SUCCESS, SET_REGISTER_INITIAL } from '../constants'
import { TRequestReducer } from '../types'

interface IRegisterInitialState extends TRequestReducer { }

const initialState: IRegisterInitialState = {
    isRequest: false,
    isSuccess: false,
    isFailed: false,
}

export const registerReducer = (state=initialState, action: TRegisterAction): IRegisterInitialState => {
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