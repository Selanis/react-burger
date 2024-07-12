import ReactDOM from 'react-dom'
import React, { BaseSyntheticEvent, FunctionComponent, ReactNode, SyntheticEvent } from 'react'
import styles from './modal-overlay.module.css'
import { useDispatch } from 'react-redux';

import { HIDE_MODAL } from '../../services/actions/modal-action'
import { useNavigate } from 'react-router-dom';

type TModalOverlayProps = {
    children: ReactNode
}

const modalRoot = document.getElementById('modals')!

const ModalOverlay: FunctionComponent<TModalOverlayProps> = (props) => {
    const dispatch = useDispatch<any>();
    const navigate = useNavigate()

    const handleClose = (e: BaseSyntheticEvent) => {
        
        if (e.target.tagName === "SECTION" || e.target.tagName === "svg") {
            navigate("/");
            dispatch({
                type: HIDE_MODAL,
            })
        }
    }

    const escapeDownFunc = (e: KeyboardEvent) => {
        if (e.code === 'Escape') { 
            navigate("/");
            dispatch({
                type: HIDE_MODAL,
            });
        }
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

export { ModalOverlay }