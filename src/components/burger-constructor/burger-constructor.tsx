import styles from './burger-constructor.module.css';
import { FunctionComponent, useMemo } from 'react';
import { useDispatch, useSelector } from '../../utils/hooks';
import { useDrop } from "react-dnd";

import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from '../order-details/order-details';
import { addIngredient, changeBunAction } from '../../services/actions/constructor-action'
import { DragItem } from './constructor-drag';
import { takeOrder } from '../../services/actions/take-order-action';
import { totalPrice } from '../../utils/totalPrice';
import { IOrderContainer } from '../../utils/types';
import { showModalAction } from '../../services/actions/modal-action';

const BurgerConstructor: FunctionComponent = () => {
    const dispatch = useDispatch();
    const order = useSelector((store) => store.constructorReducer.order);
    const bun = useSelector((store) => store.constructorReducer.bun);
    const user = useSelector((store) => store.loginInfo.userInfo);
    
    const totalPriceCounter = useMemo( () => { return totalPrice(order, bun) }, [order, bun] )

    const [{ isHover } , dropRef] = useDrop({
        accept: "ingredient",
        collect: monitor => ({
            isHover: monitor.isOver(),
        }),
        drop(item: any) {
            dispatch(
                item.type === "bun" ? changeBunAction(item) : addIngredient(item)
            );
        },
    });

    const containerStyle = isHover ? {
        border: "2px solid #4C4CFF"
    } : {}

    const dragItem = (orderItem: IOrderContainer, index: number) => {
        return (
            <DragItem item={ orderItem } key={ orderItem.key } index={index} />
        )
    }

    const takeOrderButton = () => {
        if (user) {
            dispatch(showModalAction(<OrderDetails />, ''));
    
            dispatch(takeOrder(order, bun!))
        } else {
            alert("Для оформления заказа, авторизуйтесь")
        }
    }

    const orderButton = () => {
        (order.length && bun) ? (
            takeOrderButton()
        ) : alert("Выберите ингридиенты!")
    }

    return (
        <section className={`pt-25 ${styles.constructor}`} style={ containerStyle }>

            <div className={`pr-4 pl-4 ${styles.constructor__main_container}`} ref={ dropRef }>
                {
                    bun ? 
                        <div className={ styles.drag_div }>
                            <ConstructorElement
                                type="top"
                                isLocked={true}
                                text={ bun.name }
                                price={ bun.price }
                                thumbnail={ bun.image_mobile }
                            />
                        </div> :
                        <div className={ styles.default }>
                            <div className={ styles.drag_bunTop }>
                                <p className="text text_type_main-default">Выберите булку</p>
                            </div>
                        </div>
                }
                
                
                <div className={ styles.scroll_Div }>
                    { order.length !== 0 ? 
                        order.map((orderItem, index) => (
                            dragItem(orderItem, index)
                        )) :
                        
                        <div className={ styles.default }>
                            <div className={ styles.drag_choose }>
                                <p className="text text_type_main-default">Выберите начинку</p>
                            </div>
                        </div>
                        
                    }
                </div>
                
                {
                    bun ? 
                        <div className={ styles.drag_div }>
                            <ConstructorElement
                                type="bottom"
                                isLocked={true}
                                text={ bun.name }
                                price={ bun.price }
                                thumbnail={ bun.image_mobile }
                            />
                        </div> :
                        <div className={ styles.default }>
                            <div className={ styles.drag_bunBottom }>
                                <p className="text text_type_main-default">Выберите булку</p>
                            </div>
                        </div>
                }
            </div>

            <div className={`mt-10 pr-4 pl-4 ${styles.constructor__take_order}`}>
                <p className="text text_type_digits-medium pr-10">{ totalPriceCounter } <CurrencyIcon type="primary" /></p>

                <Button htmlType="button" type="primary" size="large" onClick={ orderButton } >
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

export { BurgerConstructor }