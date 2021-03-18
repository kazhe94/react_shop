import React, {useEffect, useState} from "react";
import './cart.scss'
import cart from "../../store/cart";
import {observer} from "mobx-react-lite";
import CartItem from "../../components/Cart/CartItem/CartItem";
import store from "../../store/store";
import BottomPanel from "../../components/Cart/BottomPanel/BottomPanel";
import Loader from "../../components/Loader/Loader";

const Cart = observer(()=> {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            await store.fetchCategories()
            await store.fetchProducts()
            setLoading(false)
        })()
        return null
    }, [])
    if(!cart.isEmpty) {
        return (
           <>
               {
                   !loading ?
                       <>
                           <div className={'container'}>
                               <div className="cart">
                                   <div className={'cart__top'}>
                                       <h2 className="title">Корзина</h2>
                                       <button className="btn" onClick={() => cart.clear()}>Очистить корзину</button>
                                   </div>

                                   <ul className={'cart__list'}>
                                       {Object.keys(cart.cart).map((key) => {
                                           return <CartItem key={key} id={key}/>
                                            })
                                       }
                                   </ul>
                               </div>
                           </div>
                           <BottomPanel/>
                       </>
                       : <Loader/>
               }
           </>
        )
    } else {
        return (
            <div className="container">
                <h2 className={'title'}>Корзина пуста</h2>
            </div>
        )
    }
})

export default Cart;