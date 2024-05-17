import styles from './burger-card.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from 'react'
import { PropTypes } from "prop-types";

function BurgerCard(props) {
    const {image, counter, price, name} = props;

    return (
        <div style={{width: '100%', height: 208, position: "relative"}}>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={ image } className="pl-4 pr-4" alt={ name } />
            
            <h3 className={`text text_type_digits-default mt-1 mb-1 ${ styles.price }`}>{ price }&nbsp;<CurrencyIcon type="primary" /></h3>
            <p className="text text_type_main-default" style={{textAlign: 'center'}}>{ name }</p>
        </div>
    )
}

BurgerCard.propTypes = {
    image: PropTypes.string,
    order: PropTypes.arrayOf(PropTypes.object).isRequired,
    price: PropTypes.number,
    name: PropTypes.string
}


export { BurgerCard }