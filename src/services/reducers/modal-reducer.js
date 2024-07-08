import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal-action'

const initialState = {
    isModal: false,
    modalItem: <></>,
    title: ''
}

export const modalReducer = (state=initialState, action) => {
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
                modalItem: null,
                title: ''
            }
        }
        default: {
            return state
        }
    }
}
