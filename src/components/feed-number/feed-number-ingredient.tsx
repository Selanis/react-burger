import { FunctionComponent } from "react";
import { FeedIcon } from "../feed-cards/card/feed-icon";
import styles from './feed-number.module.css'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "../../utils/hooks";
import { TGetOrderInfo } from "../../utils/types";

type TIngredientProps = {
    item: string;
}

export const FeedNumberIngredient: FunctionComponent<TIngredientProps> = (props) => {
    const data = useSelector(store => store.getIngredients.data);
    const ingredients = useSelector(store => store.getOrderInfoReducer.orderInfo)[0].ingredients;
    const { item } = props;

    const currentItem = data.find(it => it._id === item);
    const count = ingredients.filter(it => it === item).length;

    
    return (
        <div className={styles.feedNumber__ingredient}>
            <FeedIcon itemId={item} />
            <h2 className="text text_type_main-small">{currentItem?.name}</h2>
            <p className="text text_type_digits-default">{count} x {currentItem?.price}&nbsp;<CurrencyIcon type="primary" /></p>
        </div>
    )
}