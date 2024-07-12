import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';

export const GET_INGREDIENTS_FAILED = 'GET_INGREDIENTS_FAILED';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';

export const SET_INGREDIENT_TAB = 'SET_INGREDIENT_TAB';

export function getIngredientsRequest() {
    return function(dispatch) {

        dispatch({
            type: GET_INGREDIENTS_REQUEST
        })

        fetch(`${BASE_API_URL}/ingredients`)
            .then(checkResponse)
            .then((res) => {
                dispatch({
                    type: GET_INGREDIENTS_SUCCESS,
                    data: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED
                })
                console.log(err)
            })
    }
}