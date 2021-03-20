import React, {useState} from "react";
import {NavLink, useHistory, useRouteMatch} from 'react-router-dom'
import logo from '../../logo.svg'
import './navbar.scss'
import cart from '../../store/cart'
import {observer} from "mobx-react-lite";

const Navbar = observer(()=> {
    const [search, setSearch] = useState('')
    const history = useHistory()
    let { url } = useRouteMatch();
    const inputSearch = (e) => {
        e.preventDefault()
        history.push(`${url}?title=${search}`)
        setSearch('')
    }
    return (
        <nav className={'navbar'}>
            <div className="navbar__inner">
                <NavLink className={'logo'} to={`${url}`}>
                    <img className={'logo__img'} src={logo} alt={'logo'}/>
                    <span className={'logo__text'}>React shop</span>
                </NavLink>
                <div className={'form__inner'}>
                    <form className={'search-form'}>
                        <input className={'search-form__input'}
                               value={search} type="text"
                               placeholder={'Искать на ReactShop'}
                               onChange={(e) => setSearch(e.target.value)}/>
                        {search ? <span onClick={() => setSearch('')}>&#10006;</span> : null}
                        <button className={'search-form__btn'} type={'submit'} onClick={inputSearch}>Найти</button>
                    </form>
                </div>
                <ul className="controls">
                    <li className={'controls__item'}>
                        <NavLink className={'controls__link'} to={`${url}/favorites`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path data-v-414055a2="" fill="currentColor"
                                      d="M21 8.5C21 5.805 19.621 4 17.282 4 14.969 4 13 5.743 13 8h-2c0-2.257-1.97-4-4.282-4C4.378 4 3 5.805 3 8.5c0 2.93 2.398 6.212 9 11.246 6.602-5.035 9-8.317 9-11.246zM17.282 2c3.58 0 5.717 2.8 5.718 6.5 0 3.816-2.885 7.664-10.4 13.3l-.6.45-.6-.45C3.886 16.164 1 12.317 1 8.5 1 4.8 3.139 2 6.718 2 8.884 2 10.864 3.069 12 4.742 13.136 3.069 15.115 2 17.282 2z"></path>
                            </svg>
                            <span className={'controls__link-text'}>Избранное</span>
                        </NavLink>
                    </li>
                    <li className={'controls__item'}>
                        <NavLink className={'controls__link'} to={`${url}/cart`}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                                 className="c6h2">
                                <g fill="none" fillRule="evenodd">
                                    <path d="M0 0h24v24H0z"></path>
                                    <path d="M6 6a4 4 0 014-4h4a4 4 0 014 4v2h5.133L21.82 18.496A4 4 0 0117.85 22H6.149a4 4 0 01-3.969-3.504L.867 8H6V6zm6 2a1 1 0 010 2H3.133l1.03 8.248A2 2 0 006.149 20h11.704a2 2 0 001.984-1.752L20.867 10H16V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v2h4z"
                                          fill="currentColor" fillRule="nonzero"></path>
                                </g>
                            </svg>
                            <span className={'controls__link-text'}>Корзина</span>
                            <span className={'badge'}>{cart.cartItemCount}</span>
                        </NavLink>
                    </li>
                    <li className="controls__item">
                        <NavLink className={'controls__link'} to={`${url}/auth`}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="du"
                                 data-v-414055a2="">
                                <g fill="none" fillRule="evenodd" data-v-414055a2="">
                                    <path d="M0 0h24v24H0z" data-v-414055a2=""></path>
                                    <path
                                        d="M7 12.1c-.26 0-.52-.11-.71-.292a1.062 1.062 0 01-.29-.714c0-.262.11-.524.29-.715a1.042 1.042 0 011.42 0c.18.191.29.453.29.715 0 .261-.11.523-.29.714-.19.181-.45.292-.71.292zm10 0c-.26 0-.52-.11-.71-.29-.09-.1-.16-.21-.21-.331a.998.998 0 01-.08-.38c0-.13.03-.261.08-.381s.12-.23.21-.33c.28-.271.72-.371 1.09-.211.13.05.23.12.33.21.09.1.16.21.21.33.05.12.08.251.08.381s-.03.26-.08.381c-.05.12-.12.23-.21.33-.19.18-.45.291-.71.291zm-8.207 4.704a1 1 0 011.414-1.414c.99.99 2.596.99 3.586 0a1 1 0 011.414 1.414 4.537 4.537 0 01-6.414 0zM3.5 11.864c0 5.071 4.405 9.027 9.51 8.442 3.77-.433 6.876-3.455 7.402-7.204.411-2.927-.66-5.734-2.79-7.614a8.473 8.473 0 00-3.496-1.857 1 1 0 01.498-1.937 10.473 10.473 0 014.32 2.294c2.63 2.32 3.955 5.792 3.449 9.392-.653 4.653-4.48 8.376-9.156 8.912C6.943 23.014 1.5 18.127 1.5 11.863c0-4.819 3.273-8.985 7.876-10.17l1.249-.32v1.29a3.45 3.45 0 003.45 3.45h.3a1 1 0 010 2h-.3A5.453 5.453 0 018.789 3.99 8.507 8.507 0 003.5 11.863z"
                                        fill="currentColor" fillRule="nonzero" data-v-414055a2=""></path>
                                </g>
                            </svg>
                            <span className={'controls__link-text'}>Войти</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
})
export default Navbar;