import styles from './burger-card.module.css'
import React from 'react';

import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { PropTypes } from "prop-types";
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { Modal } from '../modal/modal';
import { IngredientDetails } from '../ingredient-details/ingredient-details' 

function BurgerCard(props) {
    const {item} = props;
    const [isModalShown, setIsModalShown] = React.useState(false)

    const handleClickShowModal = (e) => {
        setIsModalShown(!isModalShown);
    }

    return (
        <>
            { isModalShown && <> <ModalOverlay handleClickShowModal={ handleClickShowModal }>
                <Modal handleClickShowModal={handleClickShowModal}> 
                    <IngredientDetails item={ item } />
                </Modal>
            </ModalOverlay></> }

            <div className={ styles.burger_main } onClick={ handleClickShowModal }>
            

            <Counter count={1} size="default" extraClass="m-1" />
            <img src={ item.image } className="pl-4 pr-4" alt={ item.name } />
            
            <h3 className={`text text_type_digits-default mt-1 mb-1 ${ styles.price }`}>{ item.price }&nbsp;<CurrencyIcon type="primary" /></h3>
            <p className={`text text_type_main-default ${styles.burger_main__text}`}>{ item.name }</p>
        </div>
        </>
        
    )
}

BurgerCard.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number,
    }).isRequired,
}


export { BurgerCard }