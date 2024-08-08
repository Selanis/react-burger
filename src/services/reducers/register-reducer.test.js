import { registerReducer } from './register-reducer';
import * as types from '../constants';

const initialState = {
    isRequest: false,
    isSuccess: false,
    isFailed: false
}

const notInitialState = {
    isRequest: false,
    isSuccess: true,
    isFailed: false
}

describe("Register reducer test", () => {
    it("should return initial state of register reducer", () => {
        expect(registerReducer(initialState, {})).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle REGISTER_REQUEST", () => {
        expect(registerReducer(initialState, {
            type: types.REGISTER_REQUEST
        })).toEqual(
            {
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle REGISTER_SUCCESS", () => {
        expect(registerReducer(initialState, {
            type: types.REGISTER_SUCCESS
        })).toEqual(
            {
                isSuccess: true,
                isRequest: false,
                isFailed: false
            }
        )
    })

    it("should handle REGISTER_FAILED", () => {
        expect(registerReducer(initialState, {
            type: types.REGISTER_FAILED
        })).toEqual(
            {
                isFailed: true,
                isRequest: false,
                isSuccess: false
            }
        )
    })

    it("should handle SET_REGISTER_INITIAL", () => {
        expect(registerReducer(notInitialState, {
            type: types.SET_REGISTER_INITIAL
        })).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: false
            }
        )
    })
})