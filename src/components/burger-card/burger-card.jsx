import styles from './burger-card.module.css'
import { useMemo } from 'react';
import { useDrag } from "react-dnd";

import { ingredientType } from '../../utils/types'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientDetails } from '../ingredient-details/ingredient-details' 
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { SHOW_MODAL } from '../../services/actions/modal-action';
import { Link } from 'react-router-dom';

function BurgerCard(props) {
    const { item } = props;
    const dispatch = useDispatch()

    const { order, bun } = useSelector((store) => ({
        order: store.constructorReducer.order,
        bun: store.constructorReducer.bun
    }), shallowEqual)

    const [ , dragRef] = useDrag({
        type: "ingredient",
        item: item,
    });

    const counter = useMemo(() => {
        return item.type === "bun" ? 
        
        (bun && bun._id === item._id) && 2 :
        
        order ? (
            order.filter((orderItem) => orderItem.ingredient._id === item._id).length
        ) : null
    }, [order, bun, item._id, item.type])

    return (
        <Link to={`ingredients/${item._id}`}>
            <div className={ styles.burger_main } onClick={ () => {
                dispatch({
                    type: SHOW_MODAL,
                    item: <IngredientDetails item={ item } />,
                    title: "Детали ингредиента"
                })
            } } ref={ dragRef }>
            

                { counter ? <Counter count={ counter } size="default" extraClass="m-1" /> : null }
                <img src={ item.image } className="pl-4 pr-4" alt={ item.name } />
                
                <h3 className={`text text_type_digits-default mt-1 mb-1 ${ styles.price }`}>{ item.price }&nbsp;<CurrencyIcon type="primary" /></h3>
                <p className={`text text_type_main-default ${styles.burger_main__text}`}>{ item.name }</p>
            </div>
        </Link>
        
    )
}

BurgerCard.propTypes = {
    item: ingredientType.isRequired,
}


export { BurgerCard }