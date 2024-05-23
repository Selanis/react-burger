import styles from './modal.module.css'
import { PropTypes } from "prop-types";

import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'


function Modal(props) {
    const { children, type, handleClickShowModal } = props

    
    return (
        <ModalOverlay handleClickShowModal={ handleClickShowModal }>
            <div className={ styles.modal }>
                <div className={ styles.modal__close }>
                    <p className={ styles.modal__text } style={{display: type === "order" && "none"}}>Детали ингредиента</p>
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
    type: PropTypes.string
}

export { Modal }