import { Middleware, MiddlewareAPI } from "redux";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_MESSAGE, WS_SEND_MESSAGE } from "../constants"
import { AppDispatch, IMessageResponse, RootState, TApplicationActions } from "../types"
import { updateToken } from "../actions/token-action";

export interface IWsConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
    readonly wsUrl: string;
}

export interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event;
}

export interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsGetMessageAction {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: IMessageResponse;
}

export interface IWsSendMessageAction {
    readonly type: typeof WS_SEND_MESSAGE;
    readonly payload: {message: string};
}

export type TWsConnectionAction = IWsConnectionClosedAction |
    IWsConnectionErrorAction |
    IWsConnectionStartAction |
    IWsConnectionSuccessAction |
    IWsGetMessageAction |
    IWsSendMessageAction;

export const socketMiddleware = (): Middleware => {
    return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
        let socket: WebSocket | null = null;

    return next => (action: TWsConnectionAction) => {
        const { dispatch } = store;
        const { type } = action;
        
        if (type === 'WS_CONNECTION_START') {
            socket = new WebSocket(action.wsUrl);
        }
        if (socket) {
            socket.onopen = event => {
                dispatch({ type: 'WS_CONNECTION_SUCCESS', payload: event });
            };
    
            socket.onerror = event => {
                dispatch({ type: 'WS_CONNECTION_ERROR', payload: event });
            };
    
            socket.onmessage = event => {
                const { data } = event;
                const parsedData: IMessageResponse = JSON.parse(data);

                if (parsedData.messages === "Invalid or missing token") {
                    dispatch(updateToken(true));
                    window.location.reload()
                }

                dispatch({ type: 'WS_GET_MESSAGE', payload: parsedData });
            };
            socket.onclose = event => {
                dispatch({ type: 'WS_CONNECTION_CLOSED', payload: event });
            };
    
            // if (type === 'WS_SEND_MESSAGE') {
            //     const message = payload;
            //     socket.send(JSON.stringify(message));
            // }
        }
    
        next(action);
    };
    }) as Middleware;
};