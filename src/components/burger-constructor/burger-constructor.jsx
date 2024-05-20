import styles from './burger-constructor.module.css';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { PropTypes } from "prop-types";

function BurgerConstructor() {

    return (
        <section className="pt-25" style={{maxWidth: 600, width: "100%"}}>
            <div className="pr-4 pl-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                    <div className={ styles.drag_div }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={100}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </div>
                    <div className={ styles.drag_div }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={100}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </div>
                    <div className={ styles.drag_div }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={100}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </div>
                    <div className={ styles.drag_div }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={100}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </div>
                    <div className={ styles.drag_div }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={100}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </div>
                    <div className={ styles.drag_div }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={100}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </div>
                    <div className={ styles.drag_div }>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Биокотлета из марсианской Магнолии"
                            price={100}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-01.png"
                        />
                    </div>
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

            <div className="mt-10 pr-4 pl-4" style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center'}}>
                <p className="text text_type_digits-medium pr-10">450 <CurrencyIcon type="primary" /></p>

                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </section>
    )
}

BurgerConstructor.propTypes = {
    // data: PropTypes.arrayOf(PropTypes.object).isRequired,
    order: PropTypes.arrayOf(PropTypes.object),
}

export { BurgerConstructor }