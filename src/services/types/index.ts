import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { TConstructorAction } from "../actions/constructor-action";
import { store } from "../root-reducer";
import { TForgotAction } from "../actions/forgot-password-action";
import { TGetIngredientsAction } from "../actions/ingredients-actions";
import { TLoginAction } from "../actions/login-action";
import { TRegisterAction } from "../actions/register-action";
import { TResetAction } from "../actions/reset-password-action";
import { TTakeOrderAction } from "../actions/take-order-action";
import { TSetAuthorizationAction } from "../actions/token-action";
import { TModalAction } from "../actions/modal-action";
import { TWsConnectionAction } from "../middleware/socket-middleware";
import { TGetOrderInfoAction } from "../actions/get-order-action";

export type TRequestReducer = {
    isSuccess: boolean;
    isRequest: boolean;
    isFailed: boolean;
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

export interface IMessageResponse {
    orders: TOrderSocket[];
    success: boolean;
    total: number;
    totalToday: number;
    messages?: string;
}

export interface IMessage extends Omit<IMessageResponse, 'success'> {}

export type TApplicationActions = TConstructorAction |
    TForgotAction |
    TGetIngredientsAction |
    TLoginAction |
    TRegisterAction |
    TResetAction |
    TTakeOrderAction |
    TSetAuthorizationAction |
    TModalAction |
    TWsConnectionAction | 
    TGetOrderInfoAction;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;