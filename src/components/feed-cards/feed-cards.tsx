import { FunctionComponent } from "react";
import styles from "./feed-cards.module.css"
import { CardFeed } from "./card/card";
import { useSelector } from "../../utils/hooks";
import { TOrderSocket } from "../../utils/types";


export const FeedCards: FunctionComponent = () => {
    const data = useSelector(store => store.wsReducer.data);

    return (
        <div className={styles.feedCards}>
            { 
                data && data.orders.map((item: TOrderSocket) => <CardFeed order={item} key={item._id} />)
            }
        </div>
    )
}