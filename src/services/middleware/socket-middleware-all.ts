import { Middleware, MiddlewareAPI } from "redux";
import { WS_ALL_CONNECTION_CLOSED, WS_ALL_CONNECTION_ERROR, WS_ALL_CONNECTION_START, WS_ALL_CONNECTION_SUCCESS, WS_ALL_GET_MESSAGE, WS_ALL_SEND_MESSAGE } from "../constants"
import { AppDispatch, IMessageResponse, RootState, TApplicationActions } from "../types"

export interface IWsAllConnectionStartAction {
    readonly type: typeof WS_ALL_CONNECTION_START;
}

export interface IWsAllConnectionSuccessAction {
    readonly type: typeof WS_ALL_CONNECTION_SUCCESS;
}

export interface IWsAllConnectionErrorAction {
    readonly type: typeof WS_ALL_CONNECTION_ERROR;
    readonly payload: Event;
}

export interface IWsAllConnectionClosedAction {
    readonly type: typeof WS_ALL_CONNECTION_CLOSED;
}

export interface IWsAllGetMessageAction {
    readonly type: typeof WS_ALL_GET_MESSAGE;
    readonly payload: IMessageResponse;
}

export interface IWsAllSendMessageAction {
    readonly type: typeof WS_ALL_SEND_MESSAGE;
    readonly payload: {message: string};
}

export type TWsAllConnectionAction = IWsAllConnectionClosedAction |
    IWsAllConnectionErrorAction |
    IWsAllConnectionStartAction |
    IWsAllConnectionSuccessAction |
    IWsAllGetMessageAction |
    IWsAllSendMessageAction;

export const socketMiddlewareAll = (wsUrl: string): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
        const { dispatch } = store;
        const { type } = action;
    
        if (type === 'WS_ALL_CONNECTION_START') {
            socket = new WebSocket(wsUrl);
        }
        if (socket) {
            socket.onopen = event => {
                dispatch({ type: 'WS_ALL_CONNECTION_SUCCESS', payload: event });
            };
    
            socket.onerror = event => {
                dispatch({ type: 'WS_ALL_CONNECTION_ERROR', payload: event });
            };
    
            socket.onmessage = event => {
                const { data } = event;
                const parsedData: IMessageResponse = JSON.parse(data);
                dispatch({ type: 'WS_ALL_GET_MESSAGE', payload: parsedData });
            };
            socket.onclose = event => {
                dispatch({ type: 'WS_ALL_CONNECTION_CLOSED', payload: event });
            };
    
            // if (type === 'WS_ALL_SEND_MESSAGE') {
            //     const message = payload;
            //     socket.send(JSON.stringify(message));
            // }
        }
    
        next(action);
    };
    }) as Middleware;
};