import { FunctionComponent } from "react";
import { FeedNumber } from "../feed-number/feed-number";
import styles from "./feed-number-page.module.css"
import { useParams } from "react-router-dom";

export const FeedNumberPage: FunctionComponent = () => {
    const param = useParams();

    return (
        <div className={styles.feedPage}>
            <FeedNumber number={Number(param.number)} />
        </div>
    )
}