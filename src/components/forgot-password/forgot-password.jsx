import React from 'react';

import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './forgot-password.module.css'
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SET_FORGOT_INITIAL, passwordRequest } from '../../services/actions/forgot-password-action';

export function ForgotPassword() {
    const dispatch = useDispatch();
    const success = useSelector(state => state.forgotReducer.response ? state.forgotReducer.response.success : false)

    const [email, setEmail] = React.useState('')

    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const submitForm = (e) => {
        e.preventDefault()
        dispatch( passwordRequest(email) )
    }

    React.useEffect(() => {
        dispatch({
            type: SET_FORGOT_INITIAL
        })
    }, [dispatch])

    return (
        <main className={ styles.main_forgot_password }>
            <div className={ styles.forgot_password_container }>
                <form onSubmit={ submitForm }>
                    <p className="text text_type_main-medium">Восстановление пароля</p>

                    <Input
                        placeholder={'E-mail'}
                        onChange={e => setEmail(e.target.value)}
                        name={'email'}
                        error={false}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                        extraClass="mt-6"
                        value={email}
                    />

                    <Button htmlType="submit" type="primary" size="medium" extraClass="mt-6">
                        Восстановить
                    </Button>
                </form>
                
                <div className="mt-20">
                    <p className="text text_type_main-default text_color_inactive">Вспомнили пароль? <Link to="/login" className={ styles.forgot_password_container__link }>Войти</Link></p>
                </div>
            </div>

            { success && <Navigate to='/reset-password' /> }
        </main>
    )
}