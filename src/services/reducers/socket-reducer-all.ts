import { TWsAllConnectionAction } from '../middleware/socket-middleware-all';
import { WS_ALL_CONNECTION_CLOSED, WS_ALL_CONNECTION_ERROR, WS_ALL_CONNECTION_SUCCESS, WS_ALL_GET_MESSAGE } from '../constants';
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

    data: null
};

export const wsReducerAll = (state = initialState, action: TWsAllConnectionAction) => {
    switch (action.type) {
    case WS_ALL_CONNECTION_SUCCESS:
        return {
            ...state,
            error: undefined,
            wsConnected: true
        };

    case WS_ALL_CONNECTION_ERROR:
        return {
            ...state,
            error: action.payload,
            wsConnected: false
        };

    case WS_ALL_CONNECTION_CLOSED:
        return {
            ...state,
            error: undefined,
            wsConnected: false
        };

    case WS_ALL_GET_MESSAGE:
        return {
            ...state,
            error: undefined,
            data: action.payload
        };
    default:
        return state;
    }
}; 