import React from "react";
import {useEffect, useState} from 'react'
import queryString from 'query-string'
import store from '../../store/store'
import Loader from "../../components/Loader/Loader";
import ProductItem from "../../components/Product/ProductItem";
import Categories from "../../components/Categories/Categories";
import './home.scss'
import {useHistory} from "react-router-dom";

const Home = () => {
    const [loading, setLoading] = useState(true)
    // eslint-disable-next-line no-restricted-globals
    const query = queryString.parse(location.search);
    const history = useHistory()
    useEffect(()=> {
        (async () => {
            await store.fetchCategories()
            await store.fetchProducts()
            setLoading(false)
        })()
        return null
    }, [])

    if(loading) {
        return (
            <Loader/>
        )
    } else {
        return (
        <div className={'container'}>
            <div className="cart__top">
                <h1 className={'title'}>Товары</h1>
                {query.title || query.category ? <button className="btn" onClick={() => history.replace('/home')}>Показать все</button> : null}
            </div>
            <div className="product__inner">
                <Categories/>
                <ul className={'product__list'}>
                    {store.allProducts
                        .filter(p => query.title ? p.title.toLowerCase() === query.title.toLowerCase() : p)
                        .filter(p => query.category ? p.category.toLowerCase() === query.category.toLowerCase() : p)
                        .map(p => {
                        return <ProductItem product={p} key={p.id}/>
                    })}
                </ul>
            </div>
        </div>
        )
    }
}

export default Home;