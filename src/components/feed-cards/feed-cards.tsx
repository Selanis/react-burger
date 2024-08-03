import { FunctionComponent } from "react";
import styles from "./feed-cards.module.css"
import { CardFeed } from "./card/card";
import { useSelector } from "../../utils/hooks";


export const FeedCards: FunctionComponent = () => {
    const data = useSelector(store => store.wsReducerAll.data);

    return (
        <div className={styles.feedCards}>
            { 
                data && data.orders.map(item => <CardFeed order={item} key={item._id} />)
            }
        </div>
    )
}