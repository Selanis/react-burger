import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, SET_INGREDIENT_TAB } from '../actions/ingredients-actions'

const initialState = {
    isSuccess: false,
    isLoading: false,
    isFailed: false,
    data: [],

    currentTab: 'one'
}

export const getIngredients = (state=initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS_REQUEST: {
            return {
                ...state,
                isLoading: true,
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
                isLoading: false
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                isLoading: false,
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