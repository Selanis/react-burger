import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from  './main-constructor.module.css';
import { useDispatch, useSelector } from '../../utils/hooks';

import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor'; 
import { Outlet } from "react-router-dom";
import { FunctionComponent, useEffect } from "react";
import { setResetInitialAction } from "../../services/actions/reset-password-action";

export const MainConstructor: FunctionComponent = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector((state) => state.getIngredients.isRequest)

    useEffect(() => {
        dispatch(setResetInitialAction())
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