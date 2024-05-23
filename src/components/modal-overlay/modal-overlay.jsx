import ReactDOM from 'react-dom'
import React from 'react'
import { PropTypes } from "prop-types";
import styles from './modal-overlay.module.css'

const modalRoot = document.getElementById('root')

function ModalOverlay(props) {
    const { handleClickShowModal } = props

    const handleClose = (e) => {
        
        if (e.target.tagName === "SECTION" | e.target.tagName === "svg") {
            handleClickShowModal()
        }
    }

    React.useEffect(() => {
        document.addEventListener('keydown', (e) => {
            e.code === 'Escape' && handleClickShowModal()
        })

        return (
            document.removeEventListener('keydown', (e) => {
                e.code === 'Escape' && handleClickShowModal()
            })
        )
        
    })


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