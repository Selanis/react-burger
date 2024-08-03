
import { TSetAuthorizationAction } from "../actions/token-action";
import { SET_AUTHORIZATION, SET_AUTHORIZATION_FAILED, SET_AUTHORIZATION_REQUEST, SET_AUTHORIZATION_INITIAL } from "../constants";

type TTokenInitialState = {
    authorization: boolean;
    isFailed: boolean;
    isRequest: boolean;
}

const initialState: TTokenInitialState = {
    authorization: false,
    isFailed: false,
    isRequest: false
}

export const tokenReducer = (state=initialState, action: TSetAuthorizationAction): TTokenInitialState => {
    switch (action.type) {
        case SET_AUTHORIZATION: {
            return {
                ...state,
                isFailed: false,
                authorization: true,
                isRequest: false
            }
        }
        case SET_AUTHORIZATION_FAILED: {
            return {
                ...state,
                isFailed: true,
                isRequest: false
            }
        }
        case SET_AUTHORIZATION_REQUEST: {
            return {
                ...state,
                isFailed: false,
                authorization: false,
                isRequest: true
            }
        }
        case SET_AUTHORIZATION_INITIAL: {
            return initialState
        }
        default: {
            return state
        }
    }
}