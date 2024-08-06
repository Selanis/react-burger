import ReactDOM from 'react-dom'
import React, { BaseSyntheticEvent, FunctionComponent, ReactNode } from 'react'
import styles from './modal-overlay.module.css'
import { useDispatch } from '../../utils/hooks';

import { useNavigate } from 'react-router-dom';
import { hideModalAction } from '../../services/actions/modal-action';

type TModalOverlayProps = {
    children: ReactNode
}

const modalRoot = document.getElementById('modals')!

const ModalOverlay: FunctionComponent<TModalOverlayProps> = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClose = (e: BaseSyntheticEvent) => {
        
        if (e.target.tagName === "SECTION" || e.target.tagName === "svg") {
            navigate(-1)
            dispatch(hideModalAction())
        }
    }

    const escapeDownFunc = (e: KeyboardEvent) => {
        if (e.code === 'Escape') { 
            navigate(-1)
            dispatch(hideModalAction());
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