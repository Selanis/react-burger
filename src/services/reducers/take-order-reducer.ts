import { TOrderInfo } from '../../utils/types'
import { TTakeOrderAction } from '../actions/take-order-action'
import { TAKE_ORDER_REQUEST, TAKE_ORDER_SUCCESS, TAKE_ORDER_FAILED } from '../constants'
import { TRequestReducer } from '../types'

type TTakeOrderInitialState = TRequestReducer & {
    orderInfo: null | TOrderInfo
}

const initialState: TTakeOrderInitialState = {
    orderInfo: null,
    isRequest: false,
    isSuccess: false,
    isFailed: false
}

export const takeOrderReducer = (state=initialState, action: TTakeOrderAction): TTakeOrderInitialState => {
    switch (action.type) {
        case TAKE_ORDER_REQUEST: {
            return {
                ...state,
                isRequest: true,
                isSuccess: false,
                isFailed: false
            }
        }
        case TAKE_ORDER_SUCCESS: {
            return {
                ...state,
                isRequest: false,
                isSuccess: true,
                orderInfo: action.data
            }
        }
        case TAKE_ORDER_FAILED: {
            return {
                ...state,
                isRequest: false,
                isFailed: true,
                orderInfo: null
            }
        }
        default: {
            return state
        }
    }
}