import styles from './modal.module.css'

import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { HIDE_MODAL } from '../../services/actions/modal-action'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FunctionComponent, ReactNode } from 'react';

type TModalProps = {
    title?: string,
    children?: ReactNode
}

const Modal: FunctionComponent<TModalProps> = (props) => {
    const { children, title } = props
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <ModalOverlay>
            <div className={ styles.modal }>
                <div className={ styles.modal__close }>
                    <p className={ styles.modal__text }>{ title }</p>
                    <CloseIcon onClick={ () => {
                        navigate("/");
                        dispatch({
                            type: HIDE_MODAL,
                        })
                    } } type="primary" />
                </div>

                { children }

            </div>
        </ModalOverlay>
    )
}

export { Modal }