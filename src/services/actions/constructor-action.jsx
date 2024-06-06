import { v4 as uuidv4 } from 'uuid'

export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const CHANGE_BUN = 'CHANGE_BUN';
export const DRAG_INGREDIENT = "DRAG_INGREDIENT";
export const CLEAR_CONSTRUCTOR = "CLEAR_CONSTRUCTOR";

export function addIngredient(ingredient) {
    return function(dispatch) {
        const key = uuidv4()

        dispatch({
            type: ADD_INGREDIENT,
            ingredient: {
                ingredient: ingredient,
                key: key
            },
        })
    }
}

export function moveItem(fromIndex, toIndex, state) {
    return function(dispatch) {
        const ingredients = [...state];
        ingredients.splice(toIndex, 0, ingredients.splice(fromIndex, 1)[0]);

        dispatch({
            type: DRAG_INGREDIENT,
            order: ingredients
        })
    }
}