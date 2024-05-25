import styles from './order-details.module.css'
import image from '../../images/done-image.svg'

function OrderDetails() {

    return (
        <div className={ styles.order_container }>
            <h1 className={ styles.order_num }>034536</h1>
            <h2 className="text text_type_main-medium mt-8">идентификатор заказа</h2>
            <img src={ image } className='mt-15' alt="done" />
            <p className="text text_type_main-default mt-15">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive mt-2">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}

export { OrderDetails }