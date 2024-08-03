import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import {thunk} from 'redux-thunk'

import { getIngredients } from './reducers/ingredients-reducer';
import { constructorReducer } from './reducers/constructor-reducer';
import { modalReducer } from './reducers/modal-reducer';
import { takeOrderReducer } from './reducers/take-order-reducer';
import { forgotReducer } from './reducers/forgot-password-reducer';
import { registerReducer } from './reducers/register-reducer';
import { loginInfo } from './reducers/login-reducer';
import { resetReducer } from './reducers/reset-password-reducer';
import { tokenReducer } from './reducers/token-reducer'; 
import { socketMiddleware } from './middleware/socket-middleware';
import { socketMiddlewareAll } from './middleware/socket-middleware-all';
import { wsReducer } from './reducers/socket-reducer';
import { getOrderInfoReducer } from './reducers/get-order-reducer';
import { wsReducerAll } from './reducers/socket-reducer-all';

// Ни под каким предлогом не перестаёт ругаться на __REDUX_DEVTOOLS_EXTENSION_COMPOSE__.
// Я попробовала и декларации, и composeWithDevTools, не помогает. Бороться сил нет. А остальное всё в файлике типизировано, честно!
export const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose; 

export const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddlewareAll('wss://norma.nomoreparties.space/orders/all'), socketMiddleware(`wss://norma.nomoreparties.space/orders?token=${localStorage.getItem('accessToken')?.slice(7)}`)));

export const rootReducer = combineReducers({
    getIngredients,
    constructorReducer,
    modalReducer,
    takeOrderReducer,
    forgotReducer,
    resetReducer,
    registerReducer,
    loginInfo,
    tokenReducer,
    wsReducer,
    wsReducerAll,
    getOrderInfoReducer
});

export const store = createStore(rootReducer, enhancer);