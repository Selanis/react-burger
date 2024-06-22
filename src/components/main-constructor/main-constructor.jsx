import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from  './main-constructor.module.css';
import { useSelector } from 'react-redux';

import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor'; 

export function MainConstructor() {
    const isLoading = useSelector(state => state.getIngredients.isLoading)

    return (
        <DndProvider backend={HTML5Backend}>
            <main className={styles.burger_container}>
                { isLoading ? <BurgerIngredients /> : <p className='text text_type_main-default text_color_inactive'>Загрузка...</p>}
                <BurgerConstructor />
            </main>
        </DndProvider>
    )
}