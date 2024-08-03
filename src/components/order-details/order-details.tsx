import styles from './order-details.module.css'
import image from '../../images/done-image.svg'
import { useSelector } from '../../utils/hooks'
import { FunctionComponent } from 'react'

const OrderDetails: FunctionComponent = () => {
    const orderDetails = useSelector((state) => state.takeOrderReducer.orderInfo);
    const isSuccess = useSelector((state) => state.takeOrderReducer.isSuccess)
    const isError = useSelector((state) => state.takeOrderReducer.isFailed)

    return (
        <div className={ styles.order_container }>
            { isSuccess && <h1 className={ `text text_type_digits-large ${ styles.order_num }` }>{ orderDetails!.order.number }</h1> }
            { isError && <h1 className={ `text text_type_main-large ${ styles.order_num }` }>👾Ошибка👾</h1> }
            <h2 className="text text_type_main-medium mt-8">идентификатор заказа</h2>
            <img src={ image } className='mt-15' alt="done" />
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export { OrderDetails }