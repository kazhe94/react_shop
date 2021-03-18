import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import './auth.scss'
import auth from "../../store/auth";

const Auth = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [submit, setSubmit] = useState(false)
    const [disabled, setDisabled] = useState(true)

    const history = useHistory()

    useEffect(() => {
        if(password && email) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }, [email, password])

    const handleSubmit = async (event) => {
       event.preventDefault()
       setSubmit(true)
       await auth.login({email, password})
       setEmail('')
       setPassword('')
       setSubmit(false)
       history.replace('/admin')

    }
    return (
        <div className="container">
            <div className={'auth'}>
                <form className="auth__form">
                    <div className="form-control">
                        <label htmlFor={'email'}>Email</label>
                        <input id={'email'} required
                               value={email} type="email"
                               placeholder={'Введите email'}
                               onChange={(e)=> setEmail(e.target.value.trim())}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor={'password'}>Пароль</label>
                        <input id={'password'} required
                               value={password} type="password"
                               placeholder={'Введите пароль'}
                               onChange={(e)=> setPassword(e.target.value.trim())}/>
                    </div>
                    <button type={'submit'}
                            disabled={disabled || submit}
                            className="btn"
                            onClick={handleSubmit}
                    >Войти</button>
                </form>
            </div>
        </div>
    )
}

export default Auth;