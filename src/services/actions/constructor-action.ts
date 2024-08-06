import { v4 as uuidv4 } from 'uuid'
import { IOrderContainer, TIngredientType } from '../../utils/types';
import { ADD_INGREDIENT, CHANGE_BUN, CLEAR_CONSTRUCTOR, DRAG_INGREDIENT, REMOVE_INGREDIENT } from '../constants';
import { AppDispatch } from '../types';

export interface IAddIngredientAction {
    readonly type: typeof ADD_INGREDIENT;
    readonly ingredient: IOrderContainer;
}

export interface IRemoveIngredientAction {
    readonly type: typeof REMOVE_INGREDIENT;
    readonly key: string
}

export interface IChangeBunAction {
    readonly type: typeof CHANGE_BUN;
    readonly ingredient: TIngredientType;
}

export interface IDragIngredientAction {
    readonly type: typeof DRAG_INGREDIENT;
    readonly order: IOrderContainer[];
}

export interface IClearConstructorAction {
    readonly type: typeof CLEAR_CONSTRUCTOR;
}

export type TConstructorAction = IAddIngredientAction |
    IRemoveIngredientAction |
    IChangeBunAction |
    IDragIngredientAction |
    IClearConstructorAction 

export const addIngredientAction = (ingredient: TIngredientType, key: string): TConstructorAction => ({
    type: ADD_INGREDIENT,
    ingredient: {
        ingredient: ingredient,
        key: key
    }
});

export const dragIngredientAction = (ingredients: IOrderContainer[]): TConstructorAction => ({
    type: DRAG_INGREDIENT,
    order: ingredients
});

export const clearConstructorAction = (): TConstructorAction => ({
    type: CLEAR_CONSTRUCTOR
});

export const removeIngredientAction = (key: string): TConstructorAction => ({
    type: REMOVE_INGREDIENT,
    key: key
});


export const changeBunAction = (item: TIngredientType): TConstructorAction => ({
    type: CHANGE_BUN,
    ingredient: item,
});

export function addIngredient(ingredient: TIngredientType) {
    return function(dispatch: AppDispatch) {
        const key = uuidv4()

        dispatch(addIngredientAction(ingredient, key))
    }
}

export function moveItem(fromIndex: number, toIndex: number, state: ReadonlyArray<IOrderContainer>) {
    return function(dispatch: AppDispatch) {
        const ingredients = [...state];
        ingredients.splice(toIndex, 0, ingredients.splice(fromIndex, 1)[0]);

        dispatch(dragIngredientAction(ingredients))
    }
}