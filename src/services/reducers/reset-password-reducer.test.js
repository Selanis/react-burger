import { resetReducer } from './reset-password-reducer';
import * as types from '../constants';

const initialState = {
    isRequest: false,
    isSuccess: false,
    isFailed: false,
    response: null
}

const notInitialState = {
    isRequest: false,
    isSuccess: true,
    isFailed: false,
    response: {
        success: true,
        user: {
            email: "ivanIvanov@yandex.ru",
            name: "Ivan"
        }
    }
}

describe("Reset password reducer test", () => {
    it("should return initial state of reset password reducer", () => {
        expect(resetReducer(initialState, {})).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: false,
                response: null
            }
        )
    })

    it("should handle RESET_REQUEST", () => {
        expect(resetReducer(initialState, {
            type: types.RESET_REQUEST
        })).toEqual(
            {
                isRequest: true,
                isSuccess: false,
                isFailed: false,
                response: null
            }
        )
    })

    it("should handle RESET_SUCCESS", () => {
        expect(resetReducer(initialState, {
            type: types.RESET_SUCCESS,
            response: {
                success: true,
                user: {
                    email: "ivanIvanov@yandex.ru",
                    name: "Ivan"
                }
            }
        })).toEqual(
            {
                isSuccess: true,
                isRequest: false,
                isFailed: false,
                response: {
                    success: true,
                    user: {
                        email: "ivanIvanov@yandex.ru",
                        name: "Ivan"
                    }
                }
            }
        )
    })

    it("should handle RESET_FAILED", () => {
        expect(resetReducer(initialState, {
            type: types.RESET_FAILED
        })).toEqual(
            {
                isFailed: true,
                isRequest: false,
                isSuccess: false,
                response: null
            }
        )
    })

    it("should handle SET_RESET_INITIAL", () => {
        expect(resetReducer(notInitialState, {
            type: types.SET_RESET_INITIAL
        })).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: false,
                response: null
            }
        )
    })
})