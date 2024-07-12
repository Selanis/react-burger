import styles from './burger-ingredients.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerCard } from '../burger-card/burger-card';
import { SET_INGREDIENT_TAB } from '../../services/actions/ingredients-actions';
import { FunctionComponent, SyntheticEvent } from 'react';
import { IRootState } from '../../utils/types';

const BurgerIngredients: FunctionComponent = () => {
    const data = useSelector((store: IRootState) => store.getIngredients.data)
    const current = useSelector((store: IRootState) => store.getIngredients.currentTab)
    const dispatch = useDispatch<any>()

    const scrollTabs = (e: SyntheticEvent) => {
        const positionContainer = document.getElementById('ingredients_container')!.getBoundingClientRect().y
        
        const positionBun = positionContainer - document.getElementById("bunsTab")!.getBoundingClientRect().y
        const positionSouce = positionContainer - document.getElementById("souceTab")!.getBoundingClientRect().y
        const positionMain = positionContainer - document.getElementById("mainTab")!.getBoundingClientRect().y

        switch (Math.min(
            Math.abs(positionBun), 
            Math.abs(positionSouce), 
            Math.abs(positionMain)
        )) {
            case Math.abs(positionBun): 
                dispatch({
                    type: SET_INGREDIENT_TAB,
                    currentTab: "one"
                })
                break;
            case Math.abs(positionSouce): 
                dispatch({
                    type: SET_INGREDIENT_TAB,
                    currentTab: "two"
                })
                break;
            case Math.abs(positionMain): 
                dispatch({
                    type: SET_INGREDIENT_TAB,
                    currentTab: "three"
                })
                break;
            default:
                dispatch({
                    type: SET_INGREDIENT_TAB,
                    currentTab: "one"
                })
                break;
        }
    }

    const tabClick = () => {

    }
    
    return (
        <section>
            <h1 className="text text_type_main-large mt-10 " id='text'>Соберите бургер</h1>

            <div className={ styles.tabs_ingredient }>
                <Tab value="one" active={current === 'one'} onClick={ tabClick }>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={ tabClick }>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={ tabClick }>
                    Начинки
                </Tab>
            </div>

            <div className={`${styles.ingredients_container} custom-scroll mt-10 pb-13`} onScroll={scrollTabs}  id="ingredients_container">
                <h2 className="text text_type_main-medium mb-6" id="bunsTab">Булки</h2>

                <div className={`${styles.ingredients_grid} pl-4 pr-4`}>
                    { data.map( (item) => (
                        item.type === "bun" && <BurgerCard item={ item } key={item._id} />
                    ) ) }
                    
                </div>

                <h2 className="text text_type_main-medium mt-10 mb-6" id="souceTab">Соусы</h2>

                <div className={`${styles.ingredients_grid} pl-4 pr-4`}>
                    { data.map( (item) => (
                        item.type === "sauce" && <BurgerCard item={ item } { ...item } key={item._id} />
                    ) ) }
                    
                </div>

                <h2 className="text text_type_main-medium mt-10 mb-6" id="mainTab">Начинки</h2>

                <div className={`${styles.ingredients_grid} pl-4 pr-4`}>
                    { data.map( (item) => (
                        item.type === "main" && <BurgerCard item={ item } { ...item } key={item._id} />
                    ) ) }
                    
                </div>
            </div>
        </section>
    )
}

export { BurgerIngredients }