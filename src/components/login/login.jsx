import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import styles from "./login.module.css";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { loginRequest } from "../../services/actions/login-action";
import { useDispatch, useSelector } from "react-redux";

export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userInfo = useSelector(state => state.loginInfo.userInfo ? state.loginInfo.userInfo.email : null)

    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const onChange = e => {
        setPassword(e.target.value)
    }

    const formSubmit = async () => {
        dispatch( loginRequest(login, password) )
    }

    return (
        <main className={ styles.main_login }>
            { userInfo && <Navigate to='/' /> }

            <div className={ styles.login_container }>
                <form>
                    <p className="text text_type_main-medium">Вход</p>

                    <Input
                        placeholder={'E-mail'}
                        onChange={e => setLogin(e.target.value)}
                        name={'eMail'}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mt-6"
                        value={login}
                    />

                    <PasswordInput
                        onChange={onChange}
                        value={password}
                        name={'password'}
                        placeholder={'Пароль'}
                        extraClass="mt-6"
                    />

                    <Button htmlType="button" type="primary" size="medium" extraClass="mt-6" onClick={ formSubmit }>
                        Войти
                    </Button>
                </form>
                
                <div className="mt-20">
                    <p className="text text_type_main-default text_color_inactive">Вы — новый пользователь? <Link to="/register" className={ styles.login_container__link }>Зарегистрироваться</Link></p>

                    <p className="text text_type_main-default text_color_inactive mt-4">Забыли пароль? <Link to="/forgot-password" className={ styles.login_container__link }>Восстановить пароль</Link></p>
                </div>
            </div>
        </main>
    )
}