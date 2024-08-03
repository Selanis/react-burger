import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { IOrderContainer, TIngredientType, TOrderInfo } from '../../utils/types';
import { CLEAR_CONSTRUCTOR, TAKE_ORDER_FAILED, TAKE_ORDER_REQUEST, TAKE_ORDER_SUCCESS } from '../constants';
import { AppDispatch } from '../types';
import { clearConstructorAction } from './constructor-action';

export interface ITakeOrderRequestAction {
    readonly type: typeof TAKE_ORDER_REQUEST;
}

export interface ITakeOrderSuccessAction {
    readonly type: typeof TAKE_ORDER_SUCCESS;
    readonly data: TOrderInfo;
}

export interface ITakeOrderFailedAction {
    readonly type: typeof TAKE_ORDER_FAILED;
}

export type TTakeOrderAction = ITakeOrderRequestAction |
    ITakeOrderSuccessAction |
    ITakeOrderFailedAction;

export const takeOrderRequestAction = (): TTakeOrderAction => ({
    type: TAKE_ORDER_REQUEST,
});

export const takeOrderSuccessAction = (res: any): TTakeOrderAction => ({
    type: TAKE_ORDER_SUCCESS,
    data: res
});

export const takeOrderFailedAction = (): TTakeOrderAction => ({
    type: TAKE_ORDER_FAILED,
});

export function takeOrder(order: IOrderContainer[], bun: TIngredientType) {
    return function(dispatch: AppDispatch) {
        const ingredientId = order.map((item) => (
            item.ingredient._id
        ));

        ingredientId.unshift(bun._id)

        dispatch( takeOrderRequestAction() )

        // Запросик на заказ (с помощью постмена)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem("accessToken")!);

        const raw = JSON.stringify({
            "ingredients": ingredientId
        });

        const requestOptions: RequestInit = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/orders`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            dispatch( takeOrderSuccessAction(res) )
        })
        .catch((err) => {
            dispatch( takeOrderFailedAction() )
            console.log(err)
        })

        dispatch( clearConstructorAction() ) 
    }
}