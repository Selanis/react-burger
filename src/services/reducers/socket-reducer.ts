import { TWsConnectionAction } from '../middleware/socket-middleware';
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE } from '../constants';
import { IMessage, IMessageResponse } from '../types';

type TWSState = {
    wsConnected: boolean;
    messages: IMessage[];
    data: IMessageResponse | null;

    error?: Event;
}

const initialState: TWSState = {
    wsConnected: false,
    messages: [],
    error: undefined,
    data: null
};

export const wsReducer = (state = initialState, action: TWsConnectionAction) => {
    switch (action.type) {
    case WS_CONNECTION_SUCCESS:
        return {
            ...state,
            error: undefined,
            wsConnected: true
        };

    case WS_CONNECTION_ERROR:
        return {
            ...state,
            error: action.payload,
            wsConnected: false,
            data: null
        };

    case WS_CONNECTION_CLOSED:
        return {
            ...state,
            error: undefined,
            wsConnected: false,
            data: null
        };

    case WS_GET_MESSAGE:
        return {
            ...state,
            error: undefined,
            data: action.payload
        };
    default:
        return state;
    }
}; 