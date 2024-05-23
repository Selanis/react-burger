import styles from './burger-constructor.module.css';
import { PropTypes } from "prop-types";
import React from 'react';

import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { Modal } from '../modal/modal';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from '../order-details/order-details';

function BurgerConstructor(props) {
    const { order } = props
    const [isModalShown, setIsModalShown] = React.useState(false)

    const handleClickShowModal = (e) => {
        setIsModalShown(!isModalShown);
    }

    return (
        <section className={`pt-25 ${styles.constructor}`}>
            { isModalShown && <> <ModalOverlay handleClickShowModal={ handleClickShowModal }>
                <Modal handleClickShowModal={handleClickShowModal} type="order"> 
                    <OrderDetails />
                </Modal>
            </ModalOverlay></> }

            <div className={`pr-4 pl-4 ${styles.constructor__main_container}`}>
                <div className={ styles.drag_div }>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                    />
                </div>
                
                <div className={ styles.scroll_Div }>
                    { order.map((orderItem, index) => (
                        <div className={ styles.drag_div } key={index}>
                            <DragIcon type="primary" />
                            <ConstructorElement
                                text={ orderItem.name }
                                price={ orderItem.price }
                                thumbnail={ orderItem.image }
                            />
                        </div>
                    )) }
                </div>
                
                <div className={ styles.drag_div }>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                    />
                </div>
            </div>

            <div className={`mt-10 pr-4 pl-4 ${styles.constructor__take_order}`}>
                <p className="text text_type_digits-medium pr-10">450 <CurrencyIcon type="primary" /></p>

                <Button htmlType="button" type="primary" size="large" onClick={ handleClickShowModal } >
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    order: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export { BurgerConstructor }