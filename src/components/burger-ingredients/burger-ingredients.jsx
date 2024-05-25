import styles from './burger-ingredients.module.css';
import React from 'react';
import { PropTypes } from "prop-types";

import { ingredientType } from '../../utils/types'
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerCard } from '../burger-card/burger-card';


function BurgerIngredients(props) {
    const {data} = props;
    const [current, setCurrent] = React.useState('one')
    
    return (
        <section>
            <h1 className="text text_type_main-large mt-10 " id='text'>Соберите бургер</h1>

            <div className={ styles.tabs_ingredient }>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>

            <div className={`${styles.ingredients_container} custom-scroll mt-10 pb-13`}>
                <h2 className="text text_type_main-medium mb-6">Булки</h2>

                <div className={`${styles.ingredients_grid} pl-4 pr-4`}>
                    { data.map( (item) => (
                        item.type === "bun" && <BurgerCard item={ item } counter={ 1 } key={item._id} />
                    ) ) }
                    
                </div>

                <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>

                <div className={`${styles.ingredients_grid} pl-4 pr-4`}>
                    { data.map( (item) => (
                        item.type === "sauce" && <BurgerCard item={ item } { ...item } key={item._id} />
                    ) ) }
                    
                </div>

                <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>

                <div className={`${styles.ingredients_grid} pl-4 pr-4`}>
                    { data.map( (item) => (
                        item.type === "main" && <BurgerCard item={ item } { ...item } key={item._id} />
                    ) ) }
                    
                </div>
            </div>
        </section>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientType).isRequired,
}

export { BurgerIngredients }