import React from "react";
import './cartitem.scss'
import ProductControls from "../../Product/ProductControls";
import {observer} from "mobx-react-lite";
import {computed} from "mobx";
import store from "../../../store/store";
import {currency} from "../../../utils/currency";
import cart from "../../../store/cart";

const CartItem = observer((props) => {
    const product = computed(() => store.getProduct(props.id)).get()
    const inCart = computed(() => cart.cartItem(props.id)).get()
    const category = computed(() => store.getCategory(product.category)).get()
    return (
        <li className={'cart__item'}>
            <div className={'cart__item-img'}>
                <img src={product.img} alt="img"/>
            </div>
            <div className="cart__item-desc">
                <h3 className="cart__item-title">{product.title}</h3>
                <p className="cart__item-category">Категория: {category}</p>
            </div>
            <div className="cart__item-price">
                <p>Цена: {currency(product.price)}</p>
                <p>Сумма: {currency(product.price * inCart)}</p>
            </div>
            <div className="cart__item-controls">
                <ProductControls quantity={inCart} count={product.count} id={props.id}/>
                <button className="btn" onClick={() => cart.removeFromCart(props.id)}>Удалить</button>
            </div>
        </li>
    )
})

export default CartItem;