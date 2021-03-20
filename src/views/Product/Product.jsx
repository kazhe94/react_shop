import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from "react-router-dom";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import Loader from "../../components/Loader/Loader";
import ProductControls from "../../components/Product/ProductControls";
import './product.scss'
import Feedback from "../../components/Feedback/Feedback";


const Product = observer(() => {
    const [product, setProduct] = useState()
    const [feedback, setFeedback] = useState(null)
    const history = useHistory()
    const {id} = useParams()
    useEffect(() => {
        (async () => {
            const product = await store.fetchOne(id)
            const feedback = await store.fetchFeedback(id)
            setFeedback(feedback ?? [])
            setProduct(product)
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
                <Feedback id={id} feedback={feedback}/>
            </div>
        )
    } else {
        return <Loader/>
    }
})

export default Product;