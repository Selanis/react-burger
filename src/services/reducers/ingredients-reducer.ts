import { TIngredientType } from "../../utils/types";
import { TGetIngredientsAction } from "../actions/ingredients-actions";
import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, SET_INGREDIENT_TAB } from "../constants"
import { TRequestReducer } from "../types";

interface IIngredientsInitialState extends TRequestReducer {
    data: TIngredientType[];
    currentTab: string;
}

const initialState: IIngredientsInitialState = {
    isSuccess: false,
    isRequest: false,
    isFailed: false,
    data: [],

    currentTab: 'one'
}

export const getIngredients = (state=initialState, action: TGetIngredientsAction): IIngredientsInitialState => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                isRequest: true,
                isFailed: false,
                isSuccess: false
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                isFailed: false,
                isSuccess: true,
                isRequest: false
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                isRequest: false,
                isFailed: true,
                isSuccess: false
            }
        }
        case SET_INGREDIENT_TAB: {
            return {
                ...state, 
                currentTab: action.currentTab
            }
        }
        default: {
            return state
        }
    }
}