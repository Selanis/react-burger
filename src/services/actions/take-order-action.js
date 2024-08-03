import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { CLEAR_CONSTRUCTOR } from './constructor-action';

export const TAKE_ORDER_REQUEST = 'TAKE_ORDER_REQUEST';
export const TAKE_ORDER_SUCCESS = 'TAKE_ORDER_SUCCESS';
export const TAKE_ORDER_FAILED = 'TAKE_ORDER_FAILED';

export function takeOrder(order, bun) {
    return function(dispatch) {
        const ingredientId = order.map((item) => (
            item.ingredient._id
        ));

        ingredientId.push(bun._id)
        ingredientId.unshift(bun._id)

        dispatch({
            type: TAKE_ORDER_REQUEST
        })

        // Запросик на заказ (с помощью постмена)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", localStorage.getItem("accessToken"));

        const raw = JSON.stringify({
            "ingredients": ingredientId
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${BASE_API_URL}/orders`, requestOptions)
        .then(checkResponse)
        .then((res) => {
            dispatch({
                type: TAKE_ORDER_SUCCESS,
                data: res
            })
        })
        .catch((err) => {
            dispatch({
                type: TAKE_ORDER_FAILED
            })
            console.log(err)
        })

        dispatch({
            type: CLEAR_CONSTRUCTOR
        })
    }
}