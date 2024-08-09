
import { constructorReducer } from './constructor-reducer';
import * as types from '../constants';

const initialState = {
    bun: null,
    order: [],
}

const initialRemoveState = {
    bun: null,
    order: [
        {
            ingredient: {
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
            key: "52750569-99f5-4355-8c23-3e5567c6b8c6"
        },

        {
            ingredient: {
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
            key: "52750569-99f5-4355-8c23-3e5567c6b8c7"
        }
    ]
}


describe("Constructor reducer test", () => {
    it("should return initial state of constructor reducer", () => {
        expect(constructorReducer(initialState, {})).toEqual(
            {
                bun: null,
                order: []
            }
        )
    })

    it("should handle CHANGE_BUN", () => {
        expect(constructorReducer(initialState, {
            type: types.CHANGE_BUN,
            ingredient: {
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
        })).toEqual(
            {
                bun: {
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
                },
                order: []
            }
        )
    })

    it("should handle ADD_INGREDIENT", () => {
        expect(constructorReducer(initialState, {
            type: types.ADD_INGREDIENT,
            ingredient: {
                ingredient: {
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
                key: "52750569-99f5-4355-8c23-3e5567c6b8c6"
            }
        })).toEqual(
            {
                bun: null,
                order: [
                    {
                        ingredient: {
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
                        key: "52750569-99f5-4355-8c23-3e5567c6b8c6"
                    }
                ]
            }
        )
    })

    it("should handle DRAG_INGREDIENT", () => {
        expect(constructorReducer(initialState, {
            type: types.DRAG_INGREDIENT,
            order: [{
                ingredient: {
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
                key: "52750569-99f5-4355-8c23-3e5567c6b8c6"
            },
        
            {
                ingredient: {
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
                key: "52750569-99f5-4355-8c23-3e5567c6b8c7"
            }
        ]
        })).toEqual(
            {
                bun: null,
                order: [
                    {
                        ingredient: {
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
                        key: "52750569-99f5-4355-8c23-3e5567c6b8c6"
                    },

                    {
                        ingredient: {
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
                        key: "52750569-99f5-4355-8c23-3e5567c6b8c7"
                    }
                ]
            }
        )
    })

    it("should handle REMOVE_INGREDIENT", () => {
        expect(constructorReducer(initialRemoveState, {
            type: types.REMOVE_INGREDIENT,
            key: "52750569-99f5-4355-8c23-3e5567c6b8c7"
        })).toEqual(
            {
                bun: null,
                order: [
                    {
                        ingredient: {
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
                        key: "52750569-99f5-4355-8c23-3e5567c6b8c6"
                    }
                ]
            }
        )
    })

    it("should handle CLEAR_CONSTRUCTOR", () => {
        expect(constructorReducer(initialRemoveState, {
            type: types.CLEAR_CONSTRUCTOR
        })).toEqual(
            {
                bun: null,
                order: []
            }
        )
    })

    it("should handle CLEAR_CONSTRUCTOR", () => {
        expect(constructorReducer(initialRemoveState, {
            type: types.CLEAR_CONSTRUCTOR
        })).toEqual(
            {
                bun: null,
                order: []
            }
        )
    })
})

