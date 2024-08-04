import { checkResponse } from "../../utils/checkResponse"
import { BASE_API_URL } from "../../utils/config"
import { TGetOrderInfo } from "../../utils/types";
import { GET_ORDER_INFO_FAILED, GET_ORDER_INFO_REQUEST, GET_ORDER_INFO_SUCCESS } from "../constants"
import { AppDispatch } from "../types"

type TReponseType = {
    success: true;
    orders: TGetOrderInfo[];
}
export interface IGetOrderInfoSuccessAction {
    readonly type: typeof GET_ORDER_INFO_SUCCESS;
    readonly order: TGetOrderInfo[];
}

export interface IGetOrderInfoRequestAction {
    readonly type: typeof GET_ORDER_INFO_REQUEST
}

export interface IGetOrderInfoFailedAction {
    readonly type: typeof GET_ORDER_INFO_FAILED
}

export type TGetOrderInfoAction = IGetOrderInfoFailedAction |
    IGetOrderInfoRequestAction |
    IGetOrderInfoSuccessAction;

export const getOrderInfoSuccessAction = (res: TReponseType): TGetOrderInfoAction => ({
    type: GET_ORDER_INFO_SUCCESS,
    order: res.orders
});

export const getOrderInfoRequestAction = (): TGetOrderInfoAction => ({
    type: GET_ORDER_INFO_REQUEST,
});

export const getOrderInfoFailedAction = (): TGetOrderInfoAction => ({
    type: GET_ORDER_INFO_FAILED,
});


export function getOrderInfo(number: string) {
    return function (dispatch: AppDispatch) {
        
        dispatch(getOrderInfoRequestAction())

        fetch(`${BASE_API_URL}/orders/${number}`)
            .then(checkResponse)
            .then(res => dispatch(getOrderInfoSuccessAction(res)))
            .catch((err) => {
                dispatch(getOrderInfoFailedAction())
                console.log(err)
        })
    }
}