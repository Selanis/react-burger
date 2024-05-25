import ReactDOM from 'react-dom'
import React from 'react'
import { PropTypes } from "prop-types";
import styles from './modal-overlay.module.css'

const modalRoot = document.getElementById('modals')

function ModalOverlay(props) {
    const { handleClickShowModal } = props

    const handleClose = (e) => {
        
        if (e.target.tagName === "SECTION" | e.target.tagName === "svg") {
            handleClickShowModal()
        }
    }

    const escapeDownFunc = (event) => {
        event.code === 'Escape' && handleClickShowModal()
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
    handleClickShowModal: PropTypes.func.isRequired
}

export { ModalOverlay }