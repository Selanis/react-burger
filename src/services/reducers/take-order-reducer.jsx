import { TAKE_ORDER_REQUEST, TAKE_ORDER_SUCCESS, TAKE_ORDER_FAILED } from '../actions/take-order-action'

const initialState = {
    orderInfo: null,
    isOrderRequest: false,
    isOrderSuccess: false,
    isOrderFailed: false
}

export const takeOrderReducer = (state=initialState, action) => {
    switch (action.type) {
        case TAKE_ORDER_REQUEST: {
            return {
                ...state,
                isOrderRequest: true,
                isOrderSuccess: false,
                isOrderFailed: false
            }
        }
        case TAKE_ORDER_SUCCESS: {
            return {
                ...state,
                isOrderRequest: false,
                isOrderSuccess: true,
                orderInfo: action.data
            }
        }
        case TAKE_ORDER_FAILED: {
            return {
                ...state,
                isOrderRequest: false,
                isOrderFailed: true,
                orderInfo: null
            }
        }
        default: {
            return state
        }
    }
}