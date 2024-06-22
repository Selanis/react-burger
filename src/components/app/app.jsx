import React from 'react';
import styles from  './app.module.css';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppHeader } from '../app-header/app-header';

import { Modal } from '../modal/modal';
import { getIngredientsRequest } from '../../services/actions/ingredients-actions';
import { Login, MainConstructor, Register, ForgotPassword, ResetPassword, Profile } from '../../pages/index'

function App() {
  const dispatch = useDispatch();
  const { modalShown, modalItem, title } = useSelector(state => ({
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
      <Router>
        { modalShown && <>
          <Modal title={ title } > 
              { modalItem }
          </Modal></> 
        }

        <AppHeader />
        <Routes>
          <Route path="/" element={ <MainConstructor /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/forgot-password" element={ <ForgotPassword /> } />
          <Route path="/reset-password" element={ <ResetPassword /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/profile/order" element={ <>Order</> } />
          <Route path="/profile/order/:number" element={ <>Order :Number</> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
