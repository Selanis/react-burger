import { FunctionComponent } from "react";
import styles from "./card.module.css";
import { FeedIcon } from "./feed-icon";
import { TOrderSocket } from "../../../utils/types";
import { orderPrice } from "../../../utils/orderPrice";
import { useDispatch, useSelector } from "../../../utils/hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { getDate } from "../../../utils/getDate";
import { showModalAction } from "../../../services/actions/modal-action";
import { FeedNumber } from "../../feed-number/feed-number";

type TCardFeed = {
    order: TOrderSocket;
}

export const CardFeed: FunctionComponent<TCardFeed> = (props) => {
    const data = useSelector(store => store.getIngredients.data);
    const dispatch = useDispatch();
    const { name, number, ingredients, createdAt } = props.order;

    const price: number = data ? orderPrice(ingredients, data) : 0;
    
    const goOrderNumber = () => {
        dispatch(showModalAction(<FeedNumber number={number} />, ''))
    }

    return (
        <Link to={`${number}`}>
            <div className={styles.cardFeed} onClick={goOrderNumber}>
                <div className={styles.cardFeed__number}>
                    <h2 className="text text_type_digits-default">#{number}</h2>
                    <h3 className="text text_type_main-small text_color_inactive">{getDate(createdAt)}</h3>
                </div>

                <h1 className="text text_type_main-medium mt-6">{name}</h1>

                <div className={styles.cardFeed__price_container}>
                    <div className={styles.cardFeed__icons}>
                        {
                            ingredients.map((item, index) => index < 5 ? <FeedIcon itemId={item} key={index} /> : index === 6 && <FeedIcon itemId={item} key={index} more={ingredients.length - index + 1} />)
                        }
                    </div>

                    <h2 className={styles.cardFeed__price}>{price}&nbsp;<CurrencyIcon type="primary" /></h2>
                </div>
            </div>
        </Link>
    )
}

