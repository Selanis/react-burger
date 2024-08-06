import { ReactElement } from 'react';
import { SHOW_MODAL, HIDE_MODAL } from '../constants'
import { TModalAction } from '../actions/modal-action';

type TModalInitialState = {
    isModal: boolean;
    modalItem: ReactElement;
    title: string;
}

const initialState: TModalInitialState = {
    isModal: false,
    modalItem: <></>,
    title: ''
}

export const modalReducer = (state=initialState, action: TModalAction): TModalInitialState => {
    switch (action.type) {
        case SHOW_MODAL: {
            return {
                ...state,
                isModal: true,
                modalItem: action.item,
                title: action.title
            }
        }
        case HIDE_MODAL: {
            return {
                ...state,
                isModal: false,
                modalItem: <></>,
                title: ''
            }
        }
        default: {
            return state
        }
    }
}
