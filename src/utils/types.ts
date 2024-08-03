

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

export type TGetOrderInfo = {
    _id: string;
    ingredients: string[];
    owner: string;
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    __v: number;
}

export type TOrderSocket = {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    status: string;
    updatedAt: string;
    _id: string;
}

export type TOrderInfo = {
    name: string,
    order: {
        number: number
    },
    success: boolean
}

export interface IOrderContainer {
    ingredient: TIngredientType,
    key: string
}

export type TUserInfo = {
    name: string;
    email: string;
}