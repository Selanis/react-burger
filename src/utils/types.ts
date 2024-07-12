import { ReactNode } from "react";

export type TIngredientType = {
    readonly _id: string;
    readonly name: string;
    readonly type: string;
    readonly proteins: number;
    readonly fat: number;
    readonly carbohydrates: number;
    readonly calories: number;
    readonly price: number;
    readonly image: string;
    readonly image_mobile: string;
    readonly image_large: string;
    readonly __v: number;
}

export interface IOrderContainer {
    ingredient: TIngredientType,
    key: string
}

export interface IRootState {
    modalReducer: {
        modalItem: ReactNode,
        isModal: boolean,
        title: string
    },   
    constructorReducer: {
        order: Array<IOrderContainer>,
        bun: TIngredientType
    },
    loginInfo: {
        readonly userInfo: {
            readonly email: string,
            readonly name: string
        }
    },
    getIngredients: {
        readonly data: Array<TIngredientType>,
        currentTab: string,
        isLoading: boolean
    },
    forgotReducer : {
        readonly response: {
            success: boolean
        }
    },
    takeOrderReducer: {
        isOrderSuccess: boolean,
        isOrderFailed: boolean,
        readonly orderInfo: {
            success: boolean,
            order: {
                number: number
            }
        }
    },
    tokenReducer : {
        isRequest: boolean
    },
    resetReducer: {
        readonly response: {
            success: boolean
        }
    }
}