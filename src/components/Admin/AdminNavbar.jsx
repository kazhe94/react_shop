import React from "react";
import {NavLink, useHistory, useRouteMatch} from 'react-router-dom'
import logo from '../../logo.svg'
import './navbar.scss'
import cart from '../../store/cart'
import {observer} from "mobx-react-lite";
import auth from "../../store/auth";

const AdminNavbar = observer(()=> {
    const history = useHistory()
    const { url } = useRouteMatch()
    const logout = (e)=> {
        e.preventDefault()
        auth.logout()
        history.push('/home')
    }
    return (
        <nav className={'navbar'}>
            <div className="navbar__inner">
                <NavLink className={'logo'} to={'/admin'}>
                    <img className={'logo__img'} src={logo} alt={'logo'}/>
                    <span className={'logo__text'}>React shop</span>
                </NavLink>
                <div className={'form__inner'}>
                    <form className={'search-form'}>
                        <input className={'search-form__input'} type="text" placeholder={'Искать на ReactShop'}/>
                        <button className={'search-form__btn'} type={'submit'}>Найти</button>
                    </form>
                </div>
                <ul className="controls">
                    <li className={'controls__item'}>
                        <NavLink className={'controls__link'} to={`${url}`}>
                            Склад
                        </NavLink>
                    </li>
                    <li className={'controls__item'}>
                        <NavLink className={'controls__link'} to={`${url}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path data-v-414055a2="" fill="currentColor"
                                      d="M21 8.5C21 5.805 19.621 4 17.282 4 14.969 4 13 5.743 13 8h-2c0-2.257-1.97-4-4.282-4C4.378 4 3 5.805 3 8.5c0 2.93 2.398 6.212 9 11.246 6.602-5.035 9-8.317 9-11.246zM17.282 2c3.58 0 5.717 2.8 5.718 6.5 0 3.816-2.885 7.664-10.4 13.3l-.6.45-.6-.45C3.886 16.164 1 12.317 1 8.5 1 4.8 3.139 2 6.718 2 8.884 2 10.864 3.069 12 4.742 13.136 3.069 15.115 2 17.282 2z"></path>
                            </svg>
                            <span className={'controls__link-text'}>Категории</span>
                        </NavLink>
                    </li>
                    <li className={'controls__item'}>
                        <NavLink className={'controls__link'} to={`${url}/orders`}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                 className="c6h2">
                                <g fill="none" fillRule="evenodd">
                                    <path d="M0 0h24v24H0z"></path>
                                    <path d="M6 6a4 4 0 014-4h4a4 4 0 014 4v2h5.133L21.82 18.496A4 4 0 0117.85 22H6.149a4 4 0 01-3.969-3.504L.867 8H6V6zm6 2a1 1 0 010 2H3.133l1.03 8.248A2 2 0 006.149 20h11.704a2 2 0 001.984-1.752L20.867 10H16V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2h4z"
                                          fill="currentColor" fillRule="nonzero"></path>
                                </g>
                            </svg>
                            <span className={'controls__link-text'}>Заказы</span>
                            <span className={'badge'}>{cart.cartItemCount}</span>
                        </NavLink>
                    </li>
                    <li className={'controls__item'}>
                        <a className={'controls__link'} href={'/'} onClick={logout}>
                            Выход
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
})
export default AdminNavbar;