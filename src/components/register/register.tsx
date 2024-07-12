import styles from './register.module.css';
import React, { BaseSyntheticEvent, FunctionComponent } from "react";
import { Link, Navigate } from "react-router-dom";

import { Input, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from 'react-redux';
import { registerRequest } from '../../services/actions/register-action';
import { IRootState } from '../../utils/types';


export const Register: FunctionComponent = () => {
    const dispatch = useDispatch<any>();
    const userInfo = useSelector((state: IRootState) => state.loginInfo.userInfo ? state.loginInfo.userInfo.email : null)

    const [login, setLogin] = React.useState<string>('')
    const [name, setName] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const inputRef = React.useRef<HTMLInputElement>(null!)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const onChange = (e: BaseSyntheticEvent) => {
        setPassword(e.target.value)
    }

    const submitForm = (e: BaseSyntheticEvent) => {
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
                        onPointerEnterCapture={ undefined }
                        onPointerLeaveCapture={ undefined }
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
                        onPointerEnterCapture={ undefined }
                        onPointerLeaveCapture={ undefined }
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