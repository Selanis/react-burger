
import { TUserInfo } from "../../utils/types";
import { TLoginAction } from "../actions/login-action";
import { SET_LOGIN_INFO, LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS, SET_LOGIN_INITIAL } from "../constants";
import { TRequestReducer } from "../types";

interface ILoginInitialState extends TRequestReducer {
    userInfo: null | TUserInfo;
}

const initialState: ILoginInitialState = {
    userInfo: null,

    isRequest: false,
    isSuccess: false,
    isFailed: false
}

export function loginInfo(state=initialState, action: TLoginAction): ILoginInitialState {
    switch (action.type) {
        case SET_LOGIN_INFO: {
            return {
                ...state,
                userInfo: action.user
            }
        }

        case LOGIN_REQUEST: {
            return {
                ...state,
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isSuccess: true,
                isRequest: false,
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                isFailed: true,
                isRequest: false
            }
        }
        case SET_LOGIN_INITIAL: {
            return initialState
        }

        default: {
            return state
        }
    }
}

