import React from 'react';
import styles from  './app.module.css';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppHeader } from '../app-header/app-header';

import { Modal } from '../modal/modal';
import { getIngredientsRequest } from '../../services/actions/ingredients-actions';
import { Login, MainConstructor, Register, ForgotPassword, ResetPassword, Profile } from '../../pages/index'
import { OnlyAuth, OnlyUnAuth } from '../protected-route-element/protected-route-element';
import { getUserInfo } from '../../services/actions/token-action';
import { IngredientPage } from '../ingredient-page/ingredient-page';

function App() {
  const dispatch = useDispatch();
  const { modalShown, modalItem, title } = useSelector(state => ({
    modalShown: state.modalReducer.isModal,
    modalItem: state.modalReducer.modalItem,
    title: state.modalReducer.title
  }), shallowEqual)

  React.useEffect(() => {
    dispatch( getIngredientsRequest() );

    if (localStorage.getItem("refreshToken")) {
      dispatch( getUserInfo() );
    }
  }, [dispatch])

  return (
    <div className={styles.app}>
      <Router>
        { modalShown && <>
          <Modal title={ title } > 
              { modalItem }
          </Modal></> 
        }

        <AppHeader />
        <Routes>
          <Route path="/" element={  <MainConstructor /> }>
            <Route path={modalShown ? "/ingredients/:id" : "ingredientsNone"} element={ 
              <><Modal title={ title } > 
                  { modalItem }
              </Modal></> } />
          </Route>
          <Route path="/login" element={ <OnlyUnAuth component={ <Login /> } /> } />
          <Route path="/register" element={ <OnlyUnAuth component={ <Register /> } /> } />
          <Route path="/forgot-password" element={ <OnlyUnAuth component={ <ForgotPassword /> } /> } />
          <Route path="/reset-password" element={ <OnlyUnAuth component={ <ResetPassword /> } /> } />
          <Route path="/profile" element={ <OnlyAuth component={ <Profile /> } /> } />
          <Route path="/profile/order" element={ <OnlyAuth component={ <>Order</> } /> } />
          <Route path="/profile/order/:number" element={ <OnlyAuth component={ <>Order :Number</> } /> } />
          <Route path={!modalShown ? "/ingredients/:id" : "ingredientsNone"} element={<IngredientPage />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
