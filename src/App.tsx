import React from 'react';
import './App.css';
import { data } from './utils/data';

import { AppHeader } from './components/app-header/app-header';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';
import { BurgerConstructor } from './components/burger-constructor/burger-constructor'; 

function App() {
  const [ order, setOrder ] = React.useState([]);

  return (
    <div className="App">
      <AppHeader />
      <main className="burger-container">
        <BurgerIngredients data={ data } order={ order } />
        <BurgerConstructor order={ order } />
      </main>
    </div>
  );
}

export default App;
