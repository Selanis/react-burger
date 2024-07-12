import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useLocation } from "react-router-dom";

import styles from "./app-header.module.css";
import { FunctionComponent } from "react";

const AppHeader: FunctionComponent = () => {
    const location = useLocation();
    
    return (
        <header >
            <nav className="p-4">
                <ul className={ styles.selectContainer }>
                    <Link to="/" className={`pt-4 pr-5 pl-5 pb-4 ${styles.selectButton}` } >
                        <BurgerIcon type={ location.pathname === "/" ? "primary" : "secondary" } />
                        <p className={`pl-2 text ${ location.pathname !== "/" && "text_color_inactive" }`}>Конструктор</p>
                    </Link>

                    <li className={`pt-4 pr-5 pl-5 pb-4 ml-2 ${styles.selectButton}` }>
                        <ListIcon type="secondary" />
                        <p className="pl-2 text text_color_inactive">Лента заказов</p>
                    </li>
                </ul>

                <div className={ styles.logo }>
                    <Logo />
                </div>

                <Link className={`pt-4 pr-5 pl-5 pb-4 ${styles.profile}` } to="/profile">
                    <ProfileIcon type={ location.pathname === "/profile" ? "primary" : "secondary" } />
                    <p className={`pl-2 text ${ location.pathname !== "/profile" && "text_color_inactive" }`}>Личный кабинет</p>
                </Link>
                
            </nav>
        </header>
    )
}

export { AppHeader }