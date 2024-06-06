import { combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'

import { getIngredients } from './reducers/ingredients-reducer';
import { constructorReducer } from './reducers/constructor-reducer';
import { modalReducer } from './reducers/modal-reducer';
import { takeOrderReducer } from './reducers/take-order-reducer';

export const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose; 

export const enhancer = composeEnhancers(applyMiddleware(thunk));

export const rootReducer = combineReducers({
    getIngredients,
    constructorReducer,
    modalReducer,
    takeOrderReducer
})

