import styles from './order-details.module.css'
import image from '../../images/done-image.svg'
import { shallowEqual, useSelector } from 'react-redux'

function OrderDetails() {
    const { orderDetails, isSuccess, isError } = useSelector(state => ({
        orderDetails: state.takeOrderReducer.orderInfo,
        isSuccess: state.takeOrderReducer.isOrderSuccess,
        isError: state.takeOrderReducer.isOrderFailed
    }), shallowEqual)

    return (
        <div className={ styles.order_container }>
            { isSuccess && <h1 className={ `text text_type_digits-large ${ styles.order_num }` }>{ orderDetails.order.number }</h1> }
            { isError && <h1 className={ `text text_type_main-large ${ styles.order_num }` }>👾Ошибка👾</h1> }
            <h2 className="text text_type_main-medium mt-8">идентификатор заказа</h2>
            <img src={ image } className='mt-15' alt="done" />
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export { OrderDetails }