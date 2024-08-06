import React, { FunctionComponent } from 'react';
import styles from  './app.module.css';
import { useDispatch, useSelector } from '../../utils/hooks';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppHeader } from '../app-header/app-header';

import { Modal } from '../modal/modal';
import { getIngredientsRequest } from '../../services/actions/ingredients-actions';
import { Login, MainConstructor, Register, ForgotPassword, ResetPassword, Profile } from '../../pages/index'
import { OnlyAuth, OnlyUnAuth } from '../protected-route-element/protected-route-element';
import { getUserInfo } from '../../services/actions/token-action';
import { IngredientPage } from '../ingredient-page/ingredient-page';
import { Feed } from '../feed/feed';
import { FeedNumberPage } from '../feed-number-page/feed-number-page';
import { ProfileOrders } from '../profile-orders/profile-orders';

const App: FunctionComponent = () => {
    const dispatch = useDispatch();
    const modalShown = useSelector((state) => state.modalReducer.isModal);
    const modalItem = useSelector((state) => state.modalReducer.modalItem);
    const title = useSelector((state) => state.modalReducer.title);

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
            <Route path="/feed" element={  <Feed /> }>
                <Route path={modalShown ? "/feed/:number" : ''} element={  <><Modal title={ title } > 
                    { modalItem }
                </Modal></> } />
            </Route>
            <Route path={!modalShown ? "/feed/:number" : ""} element={  <FeedNumberPage /> } />
            <Route path="/forgot-password" element={ <OnlyUnAuth component={ <ForgotPassword /> } /> } />
            <Route path="/reset-password" element={ <OnlyUnAuth component={ <ResetPassword /> } /> } />
            <Route path="/profile" element={ <OnlyAuth component={ <Profile /> } /> } />
            <Route path="/profile/orders" element={ <OnlyAuth component={ <ProfileOrders /> } /> }>
                <Route path={modalShown ? "profile/orders/:number" : ''} element={  <><Modal title={ title } > 
                        { modalItem }
                    </Modal></> } />
            </Route>
            <Route path={!modalShown ? "/profile/orders/:number" : ""} element={  <FeedNumberPage /> } />
            <Route path={!modalShown ? "/ingredients/:id" : "ingredientsNone"} element={<IngredientPage />} /> 
            </Routes>
        </Router>
        </div>
    );
}

export default App;
