import React from "react";

import styles from './profile.module.css'
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

export function Profile() {
    const [name, setName] = React.useState('Марк')
    const [login, setLogin] = React.useState('mail@stellar.burgers')

    const [editName, setEditName] = React.useState(true)
    const [editLogin, setEditLogin] = React.useState(true)

    const [password, setPassword] = React.useState('123456')

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
    }

    const onChange = e => {
        setPassword(e.target.value)
    }

    return (
        <main className={ styles.profile_main }>
            <div className={ styles.profile_tabs }>
                <Link to="/profile" className="text text_type_main-medium">Профиль</Link>
                <Link to="/profile/order" className="text text_type_main-medium text_color_inactive">История заказов</Link>
                <Link to="/login" className="text text_type_main-medium text_color_inactive">Выход</Link>

                <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы можете
                изменить свои персональные данные</p>
            </div>

            <form className="ml-15">
                <Input
                    placeholder={'Имя'}
                    onChange={e => setName(e.target.value)}
                    name={'name'}
                    error={false}
                    ref={inputRef}
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
                    ref={inputRef}
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
            </form>
        </main>
    )
}