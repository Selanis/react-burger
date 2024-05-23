import styles from './ingredient-details.module.css'
import { PropTypes } from "prop-types";

function IngredientDetails(props) {
    const { image_large, name, proteins, fat, carbohydrates, calories } = props.item

    return (
        <div className={ styles.ingredient_container }>
            <img src={ image_large } alt={ name } />

            <h1 className='text text_type_main-medium mt-4'>{ name }</h1>

            <div className={ styles.properties }> 
                <div className={ styles.properties__value }>
                    <h2 className='text text_type_main-default text_color_inactive'>Калории,ккал</h2>
                    <p className="text text_type_digits-default text_color_inactive">{ calories }</p>
                </div>

                <div className={ styles.properties__value }>
                    <h2 className='text text_type_main-default text_color_inactive'>Белки, г</h2>
                    <p className="text text_type_digits-default text_color_inactive">{ proteins }</p>
                </div>

                <div className={ styles.properties__value }>
                    <h2 className='text text_type_main-default text_color_inactive'>Жиры, г</h2>
                    <p className="text text_type_digits-default text_color_inactive">{ fat }</p>
                </div>

                <div className={ styles.properties__value }>
                    <h2 className='text text_type_main-default text_color_inactive'>Углеводы, г</h2>
                    <p className="text text_type_digits-default text_color_inactive">{ carbohydrates }</p>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        type: PropTypes.string,
        proteins: PropTypes.number,
        fat: PropTypes.number,
        carbohydrates: PropTypes.number,
        calories: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        image_mobile: PropTypes.string,
        image_large: PropTypes.string,
        __v: PropTypes.number,
    }).isRequired,
}

export {IngredientDetails}