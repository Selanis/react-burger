import { ReactElement } from "react";
import { HIDE_MODAL, SHOW_MODAL } from "../constants";


export interface IShowModalAction {
    readonly type: typeof SHOW_MODAL;
    readonly item: ReactElement;
    readonly title: string;
}

export interface IHideModalAction {
    readonly type: typeof HIDE_MODAL;
}

export type TModalAction = IShowModalAction | 
    IHideModalAction;

export const showModalAction = (element: ReactElement, title: string): TModalAction => ({
    type: SHOW_MODAL,
    item: element,
    title: title
});

export const hideModalAction = (): TModalAction => ({
    type: HIDE_MODAL,
});