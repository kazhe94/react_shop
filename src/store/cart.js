import {makeAutoObservable} from "mobx";
import store from "./store";

class Cart {
    cart = JSON.parse(localStorage.getItem('cart')) || {}
    constructor() {
        makeAutoObservable(this)
    }

    addToCart(productId) {
        this.cart[productId] = 1
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    addProduct(productId) {
        const quantity = this.cart[productId]
        this.cart[productId] = quantity + 1
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    removeProduct(productId) {
        const quantity = this.cart[productId]
        this.cart[productId] = quantity - 1
        if(this.cart[productId] === 0) {
            delete this.cart[productId]
            localStorage.setItem('cart', JSON.stringify(this.cart))
        }
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    clear() {
        this.cart = {}
        localStorage.removeItem('cart')
    }
    removeFromCart(id) {
        delete this.cart[id]
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }
    cartItem(id) {
        return this.cart[id] ?? 0
    }
    get cartItemCount() {
        return Object.keys(this.cart).reduce((acc, current)=> acc + this.cart[current], 0)
    }
    get isEmpty() {
        return Object.keys(this.cart).length === 0
    }
    get total() {
        return Object.keys(this.cart).reduce((acc, id) => {
            return acc += store.products.find(item => item.id === id).price * this.cart[id]
        }, 0)
    }
}

export default new Cart()