import { useDispatch, useSelector } from 'react-redux';
import { IngredientDetails } from '../ingredient-details/ingredient-details';
import styles from './ingredient-page.module.css'

import { useParams } from 'react-router-dom';
import { getIngredientsRequest } from '../../services/actions/ingredients-actions';


function IngredientPage() {
    const param = useParams();
    const dispatch = useDispatch();
    const success = useSelector(store => store.getIngredients.isSuccess)
    const loading = useSelector(store => store.getIngredients.isLoading)

    if (!success) {
        dispatch(getIngredientsRequest())
    }

    const item = useSelector(store => store.getIngredients.data.find(item => item._id === param.id))
    
    return (
            <div className={ styles.ingredient }>
                <p className={ styles.ingredient__text }>Детали ингридиента</p>

                { loading ? <p>Loading...</p> : <IngredientDetails item={ item } /> }
            </div>
    )
}

export { IngredientPage }