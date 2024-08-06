import { checkResponse } from '../../utils/checkResponse';
import { BASE_API_URL } from '../../utils/config';
import { TIngredientType } from '../../utils/types';
import { GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, GET_INGREDIENTS_REQUEST, SET_INGREDIENT_TAB } from '../constants';
import { AppDispatch } from '../types';

type TResponseType = {
    success: boolean;
    data: TIngredientType[];
}

export interface IGetIngredientsFailedAction {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IGetIngredientsSuccessAction {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly data: TIngredientType[];
}

export interface IGetIngredientsRequestAction {
    readonly type: typeof GET_INGREDIENTS_REQUEST;
}

export interface ISetIngredientAction {
    readonly type: typeof SET_INGREDIENT_TAB;
    readonly currentTab: "one" | "two" | "three";
}

export type TGetIngredientsAction = IGetIngredientsFailedAction |
    IGetIngredientsRequestAction |
    IGetIngredientsSuccessAction |
    ISetIngredientAction

export const getIngredientSuccessAction = (res: TResponseType): TGetIngredientsAction => ({
    type: GET_INGREDIENTS_SUCCESS,
    data: res.data
});

export const getIngredientFailedAction = (): TGetIngredientsAction => ({
    type: GET_INGREDIENTS_FAILED,
});

export const getIngredientRequestAction = (): TGetIngredientsAction => ({
    type: GET_INGREDIENTS_REQUEST,
});

export const setIngredientTabAction = (tab: "one" | "two" | "three"): TGetIngredientsAction => ({
    type: SET_INGREDIENT_TAB,
    currentTab: tab
});

export function getIngredientsRequest() {
    return function(dispatch: AppDispatch) {

        dispatch(getIngredientRequestAction())

        fetch(`${BASE_API_URL}/ingredients`)
            .then(checkResponse)
            .then(res => dispatch(getIngredientSuccessAction(res)))
            .catch((err) => {
                dispatch(getIngredientFailedAction())
                console.log(err)
            })
    }
}