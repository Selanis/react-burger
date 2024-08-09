import { wsReducer } from './socket-reducer';
import * as types from '../constants';

const initialState = {
    wsConnected: false,
    messages: [],
    error: undefined,
    data: null
};

describe("WebSocket reducer test", () => {
    it("should return initial state of websocket reducer", () => {
        expect(wsReducer(initialState, {})).toEqual(
            {
                wsConnected: false,
                messages: [],
                data: null,
                error: undefined
            }
        )
    })

    it("should handle WS_CONNECTION_SUCCESS", () => {
        expect(wsReducer(initialState, {
            type: types.WS_CONNECTION_SUCCESS
        })).toEqual(
            {
                error: undefined,
                wsConnected: true,
                data: null,
                messages: []
            }
        )
    })

    it("should handle WS_CONNECTION_ERROR", () => {
        expect(wsReducer(initialState, {
            type: types.WS_CONNECTION_ERROR,
            payload: "Invalid token"
        })).toEqual(
            {
                error: "Invalid token",
                wsConnected: false,
                data: null,
                messages: []
            }
        )
    })

    it("should handle WS_CONNECTION_CLOSED", () => {
        expect(wsReducer(initialState, {
            type: types.WS_CONNECTION_CLOSED
        })).toEqual(
            {
                error: undefined,
                wsConnected: false,
                data: null,
                messages: []
            }
        )
    })

    it("should handle WS_GET_MESSAGE", () => {
        expect(wsReducer(initialState, {
            type: types.WS_GET_MESSAGE,
            payload: {
                success: true,
                total: 48329,
                totalToday: 133
            }
        })).toEqual(
            {
                error: undefined,
                wsConnected: false,
                data: {
                    success: true,
                    total: 48329,
                    totalToday: 133
                },
                messages: []
            }
        )
    })
})