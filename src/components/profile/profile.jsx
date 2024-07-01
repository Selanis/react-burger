import React from "react";

import styles from './profile.module.css'
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateLogin } from "../../services/actions/token-action";

export function Profile() {
    const dispatch = useDispatch();
    
    const initialName = useSelector(state => state.loginInfo.userInfo.name)
    const initialEmail = useSelector(state => state.loginInfo.userInfo.email)
    const [login, setLogin] = React.useState(initialEmail);
    const [name, setName] = React.useState(initialName);

    const [editName, setEditName] = React.useState(true)
    const [editLogin, setEditLogin] = React.useState(true)

    const [password, setPassword] = React.useState('123456')

    const loginRef = React.useRef(null);
    const nameRef = React.useRef(null);
    const onIconClick = (e) => {
        const typeInput = e.target.parentNode.parentNode.parentNode.querySelector("label").innerText;

        switch (typeInput) {
            case 'Имя': {
                setEditName(!editName)
                setTimeout(() => nameRef.current.focus(), 50)
                break
            }
            case 'Логин': {
                setEditLogin(!editLogin)
                setTimeout(() => loginRef.current.focus(), 50)
                break
            }
            default: {
                return null;
            }
        }
    }

    const sendForm = (e) => {
        switch (e.target.innerText) {
            case "Сохранить": {
                dispatch(updateLogin(nameRef.current.value, loginRef.current.value));
                break;
            }
            case "Отмена": {
                setLogin(initialEmail);
                setName(initialName);
                break;
            }
            default: {
                return null;
            }
        }
    }

    const onChange = e => {
        setPassword(e.target.value)
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <main className={ styles.profile_main }>
            <div className={ styles.profile_tabs }>
                <Link to="/profile" className="text text_type_main-medium">Профиль</Link>
                <Link to="/profile/order" className="text text_type_main-medium text_color_inactive">История заказов</Link>
                <a className="text text_type_main-medium text_color_inactive" onClick={ handleLogout }>Выход</a>

                <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете
                изменить свои персональные данные</p>
            </div>

            <form className="ml-15">
                <Input
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    name={'name'}
                    error={false}
                    ref={nameRef}
                    icon="EditIcon"
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    disabled={editName}
                    extraClass=""
                    value={name}
                />

                <Input
                    placeholder={'Логин'}
                    onChange={e => setLogin(e.target.value)}
                    name={'login'}
                    error={false}
                    ref={loginRef}
                    icon="EditIcon"
                    onIconClick={onIconClick}
                    errorText={'Ошибка'}
                    size={'default'}
                    extraClass="mt-6"
                    disabled={editLogin}
                    value={login}
                />

                <PasswordInput
                    onChange={onChange}
                    value={password}
                    name={'password'}
                    placeholder={'Пароль'}
                    extraClass="mt-6"
                    icon="EditIcon"
                />

                <div className={styles.profile_buttons}>
                    <Button htmlType="button" type="primary" size="medium" onClick={sendForm}>
                        Сохранить
                    </Button>
                    
                    <Button htmlType="button" type="secondary" size="medium" extraClass="ml-6" onClick={sendForm}>
                        Отмена
                    </Button>
                </div>
            </form>
        </main>
    )
}