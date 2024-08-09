import { tokenReducer } from './token-reducer';
import * as types from '../constants';

const initialState = {
    authorization: false,
    isFailed: false,
    isRequest: false
};

const notInitialState = {
    isRequest: false,
    authorization: true,
    isFailed: false,
}

describe("Token reducer test", () => {
    it("should return initial state of token reducer", () => {
        expect(tokenReducer(initialState, {})).toEqual(
            {
                authorization: false,
                isFailed: false,
                isRequest: false
            }
        )
    })

    it("should handle SET_AUTHORIZATION", () => {
        expect(tokenReducer(initialState, {
            type: types.SET_AUTHORIZATION
        })).toEqual(
            {
                isRequest: false,
                authorization: true,
                isFailed: false,
            }
        )
    })

    it("should handle SET_AUTHORIZATION_FAILED", () => {
        expect(tokenReducer(initialState, {
            type: types.SET_AUTHORIZATION_FAILED
        })).toEqual(
            {
                isFailed: true,
                isRequest: false,
                authorization: false
            }
        )
    })

    it("should handle SET_AUTHORIZATION_REQUEST", () => {
        expect(tokenReducer(initialState, {
            type: types.SET_AUTHORIZATION_REQUEST
        })).toEqual(
            {
                isFailed: false,
                authorization: false,
                isRequest: true
            }
        )
    })

    it("should handle SET_AUTHORIZATION_INITIAL", () => {
        expect(tokenReducer(notInitialState, {
            type: types.SET_AUTHORIZATION_INITIAL
        })).toEqual(
            {
                authorization: false,
                isFailed: false,
                isRequest: false
            }
        )
    })
})