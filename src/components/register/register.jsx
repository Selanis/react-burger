import styles from './register.module.css';
import React from "react";
import { Link, Navigate } from "react-router-dom";

import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../../services/actions/register-action';


export function Register() {
    const dispatch = useDispatch();
    const userInfo = useSelector(state => state.loginInfo.userInfo ? state.loginInfo.userInfo.email : null)

    const [login, setLogin] = React.useState('')
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const onChange = e => {
        setPassword(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch( registerRequest(login, name, password) )
    }


    return (
        <main className={ styles.register_main }>
            { userInfo && <Navigate to='/' /> }

            <div className={ styles.register_container }>
                <form onSubmit={ submitForm }>
                    <p className="text text_type_main-medium">Регистрация</p>

                    <Input
                        placeholder={'Имя'}
                        onChange={e => setName(e.target.value)}
                        name={'name'}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mt-6"
                        value={name}
                    />
                
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

                    <Button htmlType="submit" type="primary" size="medium" extraClass="mt-6">
                        Зарегистрироваться
                    </Button>
                </form>

                <div className="mt-20">
                    <p className="text text_type_main-default text_color_inactive ">Уже зарегистрированы? <Link to="/login" className={ styles.register_container__link }>Войти</Link></p>
                </div>
            </div>
        </main>
    )
}