import React from 'react';
import styles from  './app.module.css';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { Modal } from '../modal/modal';
import { BurgerConstructor } from '../burger-constructor/burger-constructor'; 
import { getIngredientsRequest } from '../../services/actions/ingredients-actions';

function App() {
  const dispatch = useDispatch();
  const { isLoading, modalShown, modalItem, title } = useSelector(state => ({
    isLoading: state.getIngredients.isLoading,
    modalShown: state.modalReducer.isModal,
    modalItem: state.modalReducer.modalItem,
    title: state.modalReducer.title
  }), shallowEqual)

  React.useEffect(() => {
    dispatch( getIngredientsRequest() )
  }, [dispatch])

  return (
    <div className={styles.app}>
        { modalShown && <>
          <Modal title={ title } > 
              { modalItem }
          </Modal></> 
        }
        <AppHeader />
        <DndProvider backend={HTML5Backend}>
          <main className={styles.burger_container}>
            { isLoading ? <BurgerIngredients /> : <p className='text text_type_main-default text_color_inactive'>Загрузка...</p>}
            <BurgerConstructor />
          </main>
        </DndProvider>
    </div>
  );
}

export default App;
