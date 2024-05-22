import styles from './burger-card.module.css'
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { PropTypes } from "prop-types";

function BurgerCard(props) {
    const {image, price, name} = props;

    return (
        <div className={ styles.burger_main }>
            <Counter count={1} size="default" extraClass="m-1" />
            <img src={ image } className="pl-4 pr-4" alt={ name } />
            
            <h3 className={`text text_type_digits-default mt-1 mb-1 ${ styles.price }`}>{ price }&nbsp;<CurrencyIcon type="primary" /></h3>
            <p className={`text text_type_main-default ${styles.burger_main__text}`}>{ name }</p>
        </div>
    )
}

BurgerCard.propTypes = {
    image: PropTypes.string.isRequired,
    // order: PropTypes.arrayOf(PropTypes.object).isRequired,
    price: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}


export { BurgerCard }