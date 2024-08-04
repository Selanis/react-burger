import { FunctionComponent } from "react";
import styles from "./feed-order.module.css";
import { useSelector } from "../../utils/hooks";

export const FeedOrders: FunctionComponent = () => {
    const data = useSelector(store => store.wsReducer.data);
    const dataDone = data?.orders.filter(item => item.status === "done");
    const dataWork = data?.orders.filter(item => item.status === "pending");

    return (
        <div className={styles.feedOrders}>
            <div className={styles.feedOrders__orders}>
                <div>
                    <h3 className="text text_type_main-medium mb-6">Готовы:</h3>

                    <div className={styles.feedOrders__numbers}>
                        { dataDone && dataDone.slice(0, 10).map((item, index: number) => <p className={styles.feedDone} key={index}>{item.number}</p>) }
                    </div>
                </div>
                
                <div>
                    <h3 className="text text_type_main-medium mb-6">В работе:</h3>

                    <div className={styles.feedOrders__numbers}>
                        { dataWork && dataWork.slice(0, 10).map((item, index: number) => <p className="text text_type_digits-default" key={index}>{item.number}</p>) }
                    </div>
                </div>
            </div>

            <div className="mt-15">
                <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
                <h1 className={styles.feed__bigNum}>{data?.total}</h1>
            </div>

            <div className="mt-15">
                <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
                <h1 className={styles.feed__bigNum}>{data?.totalToday}</h1>
            </div>
        </div>
    )
}