import React from 'react';
import styles from  './app.module.css';
import { data } from '../../utils/data';
import { testOrder } from '../../utils/test-order'

import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor'; 

function App() {
  // const [ order, setOrder ] = React.useState([]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.burger_container}>
        <BurgerIngredients data={ data } />
        <BurgerConstructor order={ testOrder } />
      </main>
    </div>
  );
}

export default App;
