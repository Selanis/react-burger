import styles from './burger-card.module.css'
import { FunctionComponent, useMemo } from 'react';
import { useDrag } from "react-dnd";

import { IRootState, TIngredientType } from '../../utils/types'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientDetails } from '../ingredient-details/ingredient-details' 
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_MODAL } from '../../services/actions/modal-action';
import { Link } from 'react-router-dom';

type TBurgerProps = {
    readonly item: TIngredientType;
}

const BurgerCard: FunctionComponent<TBurgerProps> = (props) => {
    const dispatch = useDispatch()
    const { item } = props;
    const order = useSelector((store: IRootState) => store.constructorReducer.order);
    const bun = useSelector((store: IRootState) => store.constructorReducer.bun);

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

export { BurgerCard }