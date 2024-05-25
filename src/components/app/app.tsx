import React from 'react';
import styles from  './app.module.css';
// import { data } from '../../utils/data';
import { testOrder } from '../../utils/test-order';
import { API_URL } from '../../utils/config';

import { AppHeader } from '../app-header/app-header';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { BurgerConstructor } from '../burger-constructor/burger-constructor'; 

function App() {
  // const [ order, setOrder ] = React.useState([]);
  const [ data, setData ] = React.useState([]);
  const [ isLoading, setIsLoading ] = React.useState(false);

  React.useEffect(() => {
    fetch(API_URL)
    .then((res) => {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((res) => {
      res && setData(res)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setIsLoading(true)
    })
  }, [])

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.burger_container}>
        { isLoading ? <BurgerIngredients data={ data } {...data} /> : <p className='text text_type_main-default text_color_inactive'>Загрузка...</p>}
        <BurgerConstructor order={ testOrder } />
      </main>
    </div>
  );
}

export default App;
