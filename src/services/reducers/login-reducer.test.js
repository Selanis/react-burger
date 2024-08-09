import { loginInfo } from './login-reducer';
import * as types from '../constants';

const initialState = {
    userInfo: null,

    isRequest: false,
    isSuccess: false,
    isFailed: false
}

describe("Login reducer test", () => {
    it("should return initial state of login reducer", () => {
        expect(loginInfo(initialState, {})).toEqual(
            {
                userInfo: null,
                isRequest: false,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle LOGIN_REQUEST", () => {
        expect(loginInfo(initialState, {
            type: types.LOGIN_REQUEST
        })).toEqual(
            {
                userInfo: null,
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle SET_LOGIN_INFO", () => {
        expect(loginInfo(initialState, {
            type: types.SET_LOGIN_INFO,
            user: {
                email: "vanyaInavov@yandex.ru",
                name: "Ivan"
            }
        })).toEqual(
            {
                userInfo: {
                    email: "vanyaInavov@yandex.ru",
                    name: "Ivan"
                },
                isRequest: false,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle LOGIN_FAILED", () => {
        expect(loginInfo(initialState, {
            type: types.LOGIN_FAILED
        })).toEqual(
            {
                userInfo: null,
                isRequest: false,
                isSuccess: false,
                isFailed: true
            }
        )
    })

    it("should handle SET_LOGIN_INITIAL", () => {
        expect(loginInfo(initialState, {
            type: types.SET_LOGIN_INITIAL
        })).toEqual(
            {
                userInfo: null,
                isRequest: false,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle LOGIN_SUCCESS", () => {
        expect(loginInfo(initialState, {
            type: types.LOGIN_SUCCESS
        })).toEqual(
            {
                userInfo: null,
                isRequest: false,
                isSuccess: true,
                isFailed: false
            }
        )
    })
})