import React from "react";
import './product.scss'
import cart from "../../store/cart";
import {observer} from "mobx-react-lite";
import {currency} from "../../utils/currency";
import {computed} from "mobx";

const ProductControls = observer((props) => {
    const inCart = computed(() => cart.cartItem(props.id)).get()
    const removeProduct = (e) => {
        e.stopPropagation()
        cart.removeProduct(props.id)
    }
    const addProduct = (e) => {
        e.stopPropagation()
        cart.addProduct(props.id)
    }
    const addToCart = (e) => {
        e.stopPropagation()
        cart.addToCart(props.id)
    }
    if(inCart) {
        return (
            <div className={'product__controls'}>
                <button className={'product__btn'} onClick={removeProduct}>-</button>
                <div className={'product__counter'}>{inCart}</div>
                <button className={'product__btn'} disabled={inCart >= props.count} onClick={addProduct}>+</button>
            </div>
        )
    } else {
        return <div className={'product__controls'}>
            <button className="product__price" onClick={addToCart}>{currency(props.price)}</button>
        </div>
    }
})

export default ProductControls;