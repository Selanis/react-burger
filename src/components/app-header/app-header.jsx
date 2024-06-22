import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

import styles from "./app-header.module.css";

function AppHeader() {

    return (
        <header >
            <nav className="p-4">
                <ul className={ styles.selectContainer }>
                    <Link to="/" className={`pt-4 pr-5 pl-5 pb-4 ${styles.selectButton}` } >
                        <BurgerIcon type="primary" />
                        <p className="pl-2 text">Конструктор</p>
                    </Link>

                    <li className={`pt-4 pr-5 pl-5 pb-4 ml-2 ${styles.selectButton}` }>
                        <ListIcon type="secondary" />
                        <p className="pl-2 text text_color_inactive">Лента заказов</p>
                    </li>
                </ul>

                <Logo className={ styles.logo } />

                <Link className={`pt-4 pr-5 pl-5 pb-4 ${styles.profile}` } to="/profile">
                    <ProfileIcon type="secondary" />
                    <p className="pl-2 text text_color_inactive">Личный кабинет</p>
                </Link>
                
            </nav>
            
        </header>
    )
}

export { AppHeader }