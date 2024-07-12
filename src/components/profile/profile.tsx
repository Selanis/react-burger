import React, { BaseSyntheticEvent, FunctionComponent } from "react";

import styles from './profile.module.css'
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateLogin } from "../../services/actions/token-action";
import { IRootState } from "../../utils/types";

export const Profile: FunctionComponent = () => {
    const dispatch = useDispatch<any>();
    
    const initialName = useSelector((state: IRootState) => state.loginInfo.userInfo.name)
    const initialEmail = useSelector((state: IRootState) => state.loginInfo.userInfo.email)
    const [login, setLogin] = React.useState<string>(initialEmail);
    const [name, setName] = React.useState<string>(initialName);

    const [editName, setEditName] = React.useState<boolean>(true)
    const [editLogin, setEditLogin] = React.useState<boolean>(true)

    const [password, setPassword] = React.useState<string>('123456')

    const loginRef = React.useRef<HTMLInputElement>(null!);
    const nameRef = React.useRef<HTMLInputElement>(null!);
    const onIconClick = (e: BaseSyntheticEvent) => {
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

    const initialForm = () => {
        setLogin(initialEmail);
        setName(initialName);
    }

    const sendForm = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        
        dispatch(updateLogin(nameRef.current.value, loginRef.current.value));
        alert("Успешно")
    }

    const onChange = (e: BaseSyntheticEvent) => {
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

            <form className="ml-15" onSubmit={ sendForm }>
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
                    onPointerEnterCapture={ undefined }
                    onPointerLeaveCapture={ undefined }
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
                    onPointerEnterCapture={ undefined }
                    onPointerLeaveCapture={ undefined }
                />

                <PasswordInput
                    onChange={onChange}
                    value={password}
                    name={'password'}
                    placeholder={'Пароль'}
                    extraClass="mt-6"
                    icon="EditIcon"
                />

                { (login !== initialEmail || name !== initialName) && <div className={ styles.profile_buttons }>
                    <Button htmlType="submit" type="primary" size="medium">
                        Сохранить
                    </Button>
                    
                    <Button htmlType="submit" type="secondary" size="medium" extraClass="ml-6" onClick={ initialForm }>
                        Отмена
                    </Button>
                </div> }
            </form>
        </main>
    )
}