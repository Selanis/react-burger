import { modalReducer } from './modal-reducer';
import * as types from '../constants';

const initialState = {
    isModal: false,
    modalItem: <></>,
    title: ''
}

const hideInitialState = {
    isModal: true,
    modalItem: <h1>Element</h1>,
    title: 'Title'
}

describe("Modal test", () => {
    it("should return initial state of modal reducer", () => {
        expect(modalReducer(initialState, {})).toEqual(
            {
                isModal: false,
                modalItem: <></>,
                title: ''
            }
        )
    })

    it("should handle SHOW_MODAL", () => {
        expect(modalReducer(initialState, {
            type: types.SHOW_MODAL,
            item: <h1>Element</h1>,
            title: "Title"
        })).toEqual(
            {
                isModal: true,
                modalItem: <h1>Element</h1>,
                title: 'Title'
            }
        )
    })

    it("should handle HIDE_MODAL", () => {
        expect(modalReducer(hideInitialState, {
            type: types.HIDE_MODAL
        })).toEqual(
            {
                isModal: false,
                modalItem: <></>,
                title: ''
            }
        )
    })
})