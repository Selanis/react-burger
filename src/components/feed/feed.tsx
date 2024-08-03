import { FunctionComponent, useEffect } from "react";
import styles from './feed.module.css'
import { FeedCards } from "../feed-cards/feed-cards";
import { FeedOrders } from "../feed-orders/feed-orders";
import { useDispatch } from "../../utils/hooks";
import { WS_ALL_CONNECTION_START } from "../../services/constants";

export const Feed: FunctionComponent = () => {
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch( { type: WS_ALL_CONNECTION_START } );
        },
        [dispatch]
    );

    return (
        <main className={styles.feed}>
            <h1 className={styles.feed__text}>Лента заказов</h1>

            <section className={styles.feed__container}>
                <FeedCards />

                <FeedOrders />
            </section>
        </main>
    )
}