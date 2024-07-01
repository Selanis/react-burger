import styles from './modal.module.css'
import { PropTypes } from "prop-types";

import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { HIDE_MODAL } from '../../services/actions/modal-action'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Modal(props) {
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

Modal.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string
}

export { Modal }