import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from  './main-constructor.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor'; 
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { SET_RESET_INITIAL } from "../../services/actions/reset-password-action";

export function MainConstructor() {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.getIngredients.isLoading)

    useEffect(() => {
        dispatch({
            type: SET_RESET_INITIAL
        })
    })

    return (
        <DndProvider backend={HTML5Backend}>
            <Outlet />

            <main className={styles.burger_container}>
                { !isLoading ? <BurgerIngredients /> : <p className='text text_type_main-default text_color_inactive'>Загрузка...</p>}
                <BurgerConstructor />
            </main>
        </DndProvider>
    )
}