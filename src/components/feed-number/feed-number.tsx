import { FunctionComponent, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "../../utils/hooks";
import styles from './feed-number.module.css'
import { getOrderInfo } from "../../services/actions/get-order-action";
import { getStatus } from "../../utils/getStatus";
import { FeedNumberIngredient } from "./feed-number-ingredient";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { orderPrice } from "../../utils/orderPrice";
import { getDate } from "../../utils/getDate";
import { TGetOrderInfo } from "../../utils/types";

type TFeedNumberProps = {
    number: number;
}

export const FeedNumber: FunctionComponent<TFeedNumberProps> = (props) => {
    const { number } = props;
    const dispatch = useDispatch();
    const data = useSelector(store => store.getIngredients.data);
    const order = useSelector(store => store.getOrderInfoReducer.orderInfo)[0];
    useEffect(() => {
        number && dispatch(getOrderInfo(number.toString()));
    }, [])

    const newSetIngredients = new Set(order?.ingredients);
    const ingredients = Array.from(newSetIngredients);

    return (
        <main className={styles.feedNumber}>
            <div className={styles.feedNumber__container}>
                <h4 className="text text_type_digits-default">#{number}</h4>
                <h1 className="text text_type_main-medium mt-10">{order?.name}</h1>
                <h3 className="text text_type_main-small mt-3" style={{color: order?.status === "done" ? "#00CCCC" : "white" }}>{order && getStatus(order.status)}</h3>

                <h1 className="text text_type_main-medium mt-15">Состав:</h1>
                <div className={styles.feedNumber__list}>
                    { ingredients.map((it, index) => <FeedNumberIngredient item={it} key={index} />) }
                </div>

                <div className={styles.feedNumber__totalPrice}>
                    <span className="text text_type_main-small text_color_inactive">{getDate(order?.createdAt)}</span>
                    <h2 className="text text_type_digits-default">{data && order && orderPrice(order?.ingredients, data)}&nbsp;<CurrencyIcon type="primary" /></h2>
                </div>
            </div>
        </main>
        
    )
}