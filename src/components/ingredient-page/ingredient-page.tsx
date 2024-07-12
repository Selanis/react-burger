import { useSelector } from 'react-redux';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import styles from './ingredient-page.module.css'

import { useParams } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { IRootState } from '../../utils/types';

const IngredientPage: FunctionComponent = () => {
    const param = useParams();
    const item = useSelector((store: IRootState) => store.getIngredients.data.find(item => item._id === param.id))
    
    return (
            <div className={ styles.ingredient }>
                <p className={ styles.ingredient__text }>Детали ингридиента</p>

                { !item ? <p>Loading...</p> : <IngredientDetails item={ item } /> }
            </div>
    )
}

export { IngredientPage }