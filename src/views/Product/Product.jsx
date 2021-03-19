import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from "react-router-dom";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import Loader from "../../components/Loader/Loader";
import ProductControls from "../../components/Product/ProductControls";
import './product.scss'


const Product = observer(() => {
    const [product, setProduct] = useState()
    const history = useHistory()
    const {id} = useParams()
    useEffect(() => {
        (async () => {
            const data = await store.fetchOne(id)
            setProduct(data)
        })()
    }, [id])
    if(product) {
        return (
            <div className="container">
                <div className="cart__top">
                    <h1 className={'title'}>{product.title}</h1>
                    <button className="btn" onClick={() => history.goBack()}>Назад</button>
                </div>
                <div className="product-page">
                    <div className="product-page__info">
                        <div className="product-page__img">
                            <img src={product.img} alt={product.title}/>
                        </div>
                        <div className="product-page__balance">Осталось на складе: {product.count}</div>
                        <ProductControls id={id} count={product.count} price={product.price}/>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Loader/>
    }
})

export default Product;