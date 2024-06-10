import ReactDOM from 'react-dom'
import React from 'react'
import styles from './modal-overlay.module.css'
import { useDispatch } from 'react-redux';
import { PropTypes } from "prop-types";

import { HIDE_MODAL } from '../../services/actions/modal-action'

const modalRoot = document.getElementById('modals')

function ModalOverlay(props) {
    const dispatch = useDispatch();

    const handleClose = (e) => {
        
        if (e.target.tagName === "SECTION" | e.target.tagName === "svg") {
            dispatch({
                type: HIDE_MODAL,
            })
        }
    }

    const escapeDownFunc = (event) => {
        event.code === 'Escape' && dispatch({
            type: HIDE_MODAL,
        })
    }

    React.useEffect(() => {
        document.addEventListener('keydown', escapeDownFunc)

        return (() => {
                document.removeEventListener('keydown', escapeDownFunc)
            }
        )
    }, [])


    return ReactDOM.createPortal (
        (
        <section className={ styles.modal_overlay } onClick={ handleClose }>
            { props.children }
        </section>
    ), modalRoot)
}

ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired,
}

export { ModalOverlay }