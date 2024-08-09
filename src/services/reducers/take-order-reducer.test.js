import { takeOrderReducer } from './take-order-reducer';
import * as types from '../constants';

const initialState = {
    orderInfo: null,
    isRequest: false,
    isSuccess: false,
    isFailed: false
};

describe("Take Order reducer test", () => {
    it("should return initial state of take order reducer", () => {
        expect(takeOrderReducer(initialState, {})).toEqual(
            {
                orderInfo: null,
                isRequest: false,
                isSuccess: false,
                isFailed: false
            }
        )
    })

    it("should handle TAKE_ORDER_REQUEST", () => {
        expect(takeOrderReducer(initialState, {
            type: types.TAKE_ORDER_REQUEST
        })).toEqual(
            {
                isRequest: true,
                isSuccess: false,
                isFailed: false,
                orderInfo: null
            }
        )
    })

    it("should handle TAKE_ORDER_SUCCESS", () => {
        expect(takeOrderReducer(initialState, {
            type: types.TAKE_ORDER_SUCCESS,
            data: {
                success: true,
                name: "Краторный антарианский бессмертный метеоритный бургер",
                order: {  }
            }
        })).toEqual(
            {
                isRequest: false,
                isSuccess: true,
                isFailed: false,
                orderInfo: {
                    success: true,
                    name: "Краторный антарианский бессмертный метеоритный бургер",
                    order: {  }
                }
            }
        )
    })

    it("should handle TAKE_ORDER_FAILED", () => {
        expect(takeOrderReducer(initialState, {
            type: types.TAKE_ORDER_FAILED
        })).toEqual(
            {
                isRequest: false,
                isSuccess: false,
                isFailed: true,
                orderInfo: null
            }
        )
    })
})