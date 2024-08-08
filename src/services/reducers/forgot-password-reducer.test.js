import { forgotReducer } from './forgot-password-reducer';
import * as types from '../constants';

const initialState = {
    isRequest: false,
    isSuccess: false,
    isFailed: false
}

describe("Forgot password reducer test", () => {
    it("should return initial state of forgot password reducer", () => {
        expect(forgotReducer(initialState, {})).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle FORGOT_REQUEST", () => {
        expect(forgotReducer(initialState, {
            type: types.FORGOT_REQUEST
        })).toEqual(
            {
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle FORGOT_SUCCESS", () => {
        expect(forgotReducer(initialState, {
            type: types.FORGOT_SUCCESS
        })).toEqual(
            {
                isRequest: false,
                isSuccess: true,
                isFailed: false
            }
        )
    })

    it("should handle FORGOT_FAILED", () => {
        expect(forgotReducer(initialState, {
            type: types.FORGOT_FAILED
        })).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: true
            }
        )
    })

    it("should handle FORGOT_INITIAL", () => {
        expect(forgotReducer(initialState, {
            type: types.FORGOT_INITIAL
        })).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: false
            }
        )
    })
})