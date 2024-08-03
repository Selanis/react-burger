import { FunctionComponent } from "react";
import styles from './card.module.css'
import { useSelector } from "../../../utils/hooks";

type TFeedIconProps = {
    itemId: string;
    more?: number;
}

export const FeedIcon: FunctionComponent<TFeedIconProps> = (props) => {
    const data = useSelector(store => store.getIngredients.data);

    const { itemId, more } = props;
    const image = data.find(item => item._id === itemId)

    const imageSource = image!.image_mobile

    return (
        <div className={styles.cardFeed__border}>
            <div className={styles.cardFeed__icon_background}>
                { !more ? <div className={styles.cardFeed__image} style={{background: `url("${imageSource}") center/cover no-repeat`}}></div> : <div className={styles.cardFeed__image} style={{background: `url("${imageSource}") center/cover no-repeat`}}>
                    <h4 className={styles.cardFeed__inactive}>+{more}</h4>
                </div>}
            </div>
        </div>
    )
}