import styles from './burger-ingredients.module.css';
import { useDispatch, useSelector } from '../../utils/hooks';

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerCard } from '../burger-card/burger-card';
import { FunctionComponent, SyntheticEvent } from 'react';
import { setIngredientTabAction } from '../../services/actions/ingredients-actions';

const BurgerIngredients: FunctionComponent = () => {
    const data = useSelector((store) => store.getIngredients.data)
    const current = useSelector((store) => store.getIngredients.currentTab)
    const dispatch = useDispatch()

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
                dispatch(setIngredientTabAction("one"))
                break;
            case Math.abs(positionSouce): 
            dispatch(setIngredientTabAction("two"))
                break;
            case Math.abs(positionMain): 
            dispatch(setIngredientTabAction("three"))
                break;
            default:
                dispatch(setIngredientTabAction("one"))
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