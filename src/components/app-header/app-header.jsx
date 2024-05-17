import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./app-header.module.css";

function AppHeader() {

    return (
        <header className="p-10">
            <nav className="p-4">
                <ul className={ styles.selectContainer }>
                    <li className={`pt-4 pr-5 pl-5 pb-4 ${styles.selectButton}` }>
                        <BurgerIcon type="primary" />
                        <p className="pl-2 text">Конструктор</p>
                    </li>

                    <li className={`pt-4 pr-5 pl-5 pb-4 ml-2 ${styles.selectButton}` }>
                        <ListIcon type="secondary" />
                        <p className="pl-2 text text_color_inactive">Лента заказов</p>
                    </li>
                </ul>

                <Logo className={ styles.logo } />

                <div className={`pt-4 pr-5 pl-5 pb-4 ${styles.profile}` }>
                    <ProfileIcon type="secondary" />
                    <p className="pl-2 text text_color_inactive">Личный кабинет</p>
                </div>
            </nav>
            
        </header>
    )
}

export { AppHeader }