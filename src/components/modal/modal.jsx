import styles from './modal.module.css'
import { PropTypes } from "prop-types";

import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'


function Modal(props) {
    const { children, title, handleClickShowModal } = props

    
    return (
        <ModalOverlay handleClickShowModal={ handleClickShowModal }>
            <div className={ styles.modal }>
                <div className={ styles.modal__close }>
                    <p className={ styles.modal__text }>{ title }</p>
                    <CloseIcon onClick={ handleClickShowModal } type="primary" />
                </div>

                { children }

            </div>
        </ModalOverlay>
    )
}

Modal.propTypes = {
    children: PropTypes.element.isRequired,
    handleClickShowModal: PropTypes.func.isRequired,
    title: PropTypes.string
}

export { Modal }