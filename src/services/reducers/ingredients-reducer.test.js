import { getIngredients } from './ingredients-reducer';
import * as types from '../constants';

const initialState = {
    isSuccess: false,
    isRequest: false,
    isFailed: false,
    data: [],

    currentTab: 'one'
}

describe("Get Ingredients reducer test", () => {
    it("should return initial state of get ingredients reducer", () => {
        expect(getIngredients(initialState, {})).toEqual(
            {
                isSuccess: false,
                isRequest: false,
                isFailed: false,
                data: [],

                currentTab: 'one'
            }
        )
    })

    it("should handle GET_INGREDIENTS_REQUEST", () => {
        expect(getIngredients(initialState, {
            type: types.GET_INGREDIENTS_REQUEST
        })).toEqual(
            {
                isRequest: true,
                isFailed: false,
                isSuccess: false,
                data: [],
                currentTab: 'one'
            }
        )
    })

    it("should handle GET_INGREDIENTS_SUCCESS", () => {
        expect(getIngredients(initialState, {
            type: types.GET_INGREDIENTS_SUCCESS,
            data: [
                {
                    _id:"643d69a5c3f7b9001cfa0941",
                    name:"Биокотлета из марсианской Магнолии",
                    type:"main",
                    proteins:420,
                    fat:142,
                    carbohydrates:242,
                    calories:4242,
                    price:424,
                    image:"https://code.s3.yandex.net/react/code/meat-01.png",
                    image_mobile:"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                    image_large:"https://code.s3.yandex.net/react/code/meat-01-large.png",
                    __v:0
                },
                {
                    _id:"643d69a5c3f7b9001cfa093d",
                    name:"Флюоресцентная булка R2-D3",
                    type:"bun",
                    proteins:44,
                    fat:26,
                    carbohydrates:85,
                    calories:643,
                    price:988,
                    image:"https://code.s3.yandex.net/react/code/bun-01.png",
                    image_mobile:"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                    image_large:"https://code.s3.yandex.net/react/code/bun-01-large.png",
                    __v:0
                }
            ]
        })).toEqual(
            {
                isFailed: false,
                isSuccess: true,
                isRequest: false,
                data: [
                    {
                        _id:"643d69a5c3f7b9001cfa0941",
                        name:"Биокотлета из марсианской Магнолии",
                        type:"main",
                        proteins:420,
                        fat:142,
                        carbohydrates:242,
                        calories:4242,
                        price:424,
                        image:"https://code.s3.yandex.net/react/code/meat-01.png",
                        image_mobile:"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
                        image_large:"https://code.s3.yandex.net/react/code/meat-01-large.png",
                        __v:0
                    },
                    {
                        _id:"643d69a5c3f7b9001cfa093d",
                        name:"Флюоресцентная булка R2-D3",
                        type:"bun",
                        proteins:44,
                        fat:26,
                        carbohydrates:85,
                        calories:643,
                        price:988,
                        image:"https://code.s3.yandex.net/react/code/bun-01.png",
                        image_mobile:"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
                        image_large:"https://code.s3.yandex.net/react/code/bun-01-large.png",
                        __v:0
                    }
                ],
                currentTab: 'one'
            }
        )
    })

    it("should handle GET_INGREDIENTS_FAILED", () => {
        expect(getIngredients(initialState, {
            type: types.GET_INGREDIENTS_FAILED
        })).toEqual(
            {
                isRequest: false,
                isFailed: true,
                isSuccess: false,
                data: [],
                currentTab: 'one'
            }
        )
    })

    it("should handle SET_INGREDIENT_TAB", () => {
        expect(getIngredients(initialState, {
            type: types.SET_INGREDIENT_TAB,
            currentTab: "two"
        })).toEqual(
            {
                isRequest: false,
                isFailed: false,
                isSuccess: false,
                data: [],
                currentTab: 'two'
            }
        )
    })
})
