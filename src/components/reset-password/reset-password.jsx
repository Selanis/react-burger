import React from 'react';

import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './reset-password.module.css'
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { resetRequest } from '../../services/actions/reset-password-action';

export function ResetPassword() {
    const dispatch = useDispatch();
    const success = useSelector(state => state.resetReducer.response ? state.resetReducer.response.success : false);
    const forgotSuccess = useSelector(state => state.forgotReducer.response ? state.forgotReducer.response.success : false);

    const [code, setCode] = React.useState('')
    const [password, setPassword] = React.useState('')

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const onChange = e => {
        setPassword(e.target.value)
    }

    const submitForm = () => {
        dispatch( resetRequest(code, password) )
    }

    return (
        <main className={ styles.main_reset_password }>
            <div className={ styles.reset_password_container }>
                <form>
                    <p className="text text_type_main-medium">Восстановление пароля</p>

                    <PasswordInput
                        onChange={onChange}
                        value={password}
                        name={'password'}
                        placeholder={'Введите новый пароль'}
                        extraClass="mt-6"
                    />

                    <Input
                        placeholder={'Введите код из письма'}
                        onChange={e => setCode(e.target.value)}
                        name={'code'}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mt-6"
                        value={code}
                    />

                    <Button htmlType="button" type="primary" size="medium" extraClass="mt-6" onClick={ submitForm }>
                        Сохранить
                    </Button>
                </form>
                
                <div className="mt-20">
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to="/login" className={ styles.reset_password_container__link }>Войти</Link></p>
                </div>
            </div>

            { success && <Navigate to="/" /> }
            { !forgotSuccess && <Navigate to="/forgot-password" /> }
        </main>
    )
}