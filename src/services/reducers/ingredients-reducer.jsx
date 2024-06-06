import { GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, SET_INGREDIENT_TAB } from '../actions/ingredients-actions'

const initialState = {
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
            }
        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                data: action.data,
                isFailed: false
            }
        }
        case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                isLoading: false,
                isFailed: true
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