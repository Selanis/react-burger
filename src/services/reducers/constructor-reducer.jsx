import { ADD_INGREDIENT, REMOVE_INGREDIENT, CHANGE_BUN, DRAG_INGREDIENT, CLEAR_CONSTRUCTOR } from '../actions/constructor-action'

const initialState = {
    bun: null,
    order: [],
}

export const constructorReducer = (state=initialState, action) => {
    switch (action.type) {
        case CHANGE_BUN: {
            return {
                ...state,
                bun: action.ingredient
            }
        }
        case ADD_INGREDIENT: {
            return {
                ...state,
                order: [
                    ...state.order,
                    action.ingredient
                ]
            }
        }
        case REMOVE_INGREDIENT: {
            return {
                ...state,
                order: state.order.filter((item) => item.key !== action.key)
            }
        }
        case DRAG_INGREDIENT: {
            return {
                ...state,
                order: action.order
            }
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ...state,
                bun: null,
                order: []
            }
        }
        default: {
            return state
        }
    }
}