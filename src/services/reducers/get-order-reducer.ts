import { TGetOrderInfo } from "../../utils/types";
import { TGetOrderInfoAction } from "../actions/get-order-action";
import { GET_ORDER_INFO_FAILED, GET_ORDER_INFO_REQUEST, GET_ORDER_INFO_SUCCESS } from "../constants";
import { TRequestReducer } from "../types";



interface IOrderInitialState extends TRequestReducer {
    orderInfo: TGetOrderInfo[];
}

const initialState: IOrderInitialState = {
    isSuccess: false,
    isRequest: false,
    isFailed: false,
    orderInfo: [],
}

export const getOrderInfoReducer = (state=initialState, action: TGetOrderInfoAction): IOrderInitialState => {
    switch (action.type) {
        case GET_ORDER_INFO_REQUEST: {
            return {
                ...state,
                isRequest: true,
                isFailed: false,
                isSuccess: false
            }
        }
        case GET_ORDER_INFO_SUCCESS: {
            return {
                ...state,
                orderInfo: action.order,
                isFailed: false,
                isSuccess: true,
                isRequest: false
            }
        }
        case GET_ORDER_INFO_FAILED: {
            return {
                ...state,
                isRequest: false,
                isFailed: true,
                isSuccess: false
            }
        }
        default: {
            return state
        }
    }
}