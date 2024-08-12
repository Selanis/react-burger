import { getOrderInfoReducer } from './get-order-reducer';
import * as types from '../constants';

const initialState = {
    isSuccess: false,
    isRequest: false,
    isFailed: false,
    orderInfo: []
}

describe("Get Order Info reducer test", () => {
    it("should return initial state of get order info reducer", () => {
        expect(getOrderInfoReducer(initialState, {})).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: false,
                orderInfo: []
            }
        )
    })

    it("should handle GET_ORDER_INFO_REQUEST", () => {
        expect(getOrderInfoReducer(initialState, {
            type: types.GET_ORDER_INFO_REQUEST
        })).toEqual(
            {
                isRequest: true,
                isFailed: false,
                isSuccess: false,
                orderInfo: []
            }
        )
    })

    it("should handle GET_ORDER_INFO_SUCCESS", () => {
        expect(getOrderInfoReducer(initialState, {
            type: types.GET_ORDER_INFO_SUCCESS,
            order: [{
                _id: "66b24a29119d45001b4fdf7e",
                ingredients: [
                    "643d69a5c3f7b9001cfa093c",
                    "643d69a5c3f7b9001cfa0945",
                    "643d69a5c3f7b9001cfa093e"
                ],
                owner:"6672f7b8856777001bb1c2c4",
                status:"done",
                name:"Краторный люминесцентный антарианский бургер",
                createdAt:"2024-08-06T16:07:05.192Z",
                updatedA:"2024-08-06T16:07:05.667Z",
                number:48667,
                __v:0,
            }]
        })).toEqual(
            {
                isFailed: false,
                isSuccess: true,
                isRequest: false,
                orderInfo: [{
                    _id: "66b24a29119d45001b4fdf7e",
                    ingredients: [
                        "643d69a5c3f7b9001cfa093c",
                        "643d69a5c3f7b9001cfa0945",
                        "643d69a5c3f7b9001cfa093e"
                    ],
                    owner:"6672f7b8856777001bb1c2c4",
                    status:"done",
                    name:"Краторный люминесцентный антарианский бургер",
                    createdAt:"2024-08-06T16:07:05.192Z",
                    updatedA:"2024-08-06T16:07:05.667Z",
                    number:48667,
                    __v:0,
                }]
            }
        )
    })

    it("should handle GET_ORDER_INFO_FAILED", () => {
        expect(getOrderInfoReducer(initialState, {
            type: types.GET_ORDER_INFO_FAILED
        })).toEqual(
            {
                isRequest: false,
                isFailed: true,
                isSuccess: false,
                orderInfo: []
            }
        )
    })
})