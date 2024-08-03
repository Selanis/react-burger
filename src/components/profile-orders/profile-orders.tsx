import { FunctionComponent, useEffect } from "react";
import styles from './profile-orders.module.css';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "../../utils/hooks";
import { logout } from "../../services/actions/token-action";
import { WS_CONNECTION_START } from "../../services/constants";
import { CardProfile } from "./card/profile-orders-card";

export const ProfileOrders: FunctionComponent = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const user = useSelector(store => store.loginInfo.userInfo);
    const data = useSelector(store => store.wsReducer.data)?.orders.reverse();

    const handleLogout = () => {
        dispatch(logout())
    }

    useEffect(
        () => {
            if (user) {
                dispatch( { type: WS_CONNECTION_START } );
            }
        },
        [user, dispatch]
    );

    return (
        <main className={ styles.profile_orders_main }>
            <div className={ styles.profile_orders_tabs }>
                <Link to="/profile" className={`text text_type_main-medium ${location.pathname !== "/profile" && styles.profile_orders__inactive}`}>Профиль</Link>
                <Link to="/profile/orders" className={`text text_type_main-medium ${location.pathname !== "/profile/orders" && styles.profile_orders__inactive}`}>История заказов</Link>
                <a className="text text_type_main-medium text_color_inactive" onClick={ handleLogout }>Выход</a>

                <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете
                изменить свои персональные данные</p>
            </div>

            <div className={styles.profileOrderCards}>
                { 
                    data && data.map(item => <CardProfile order={item} key={item._id} />)
                }
            </div>
        </main>
    )
}