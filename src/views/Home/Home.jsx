import React from "react";
import {useEffect, useState} from 'react'
import store from '../../store/store'
import Loader from "../../components/Loader/Loader";
import ProductItem from "../../components/Product/ProductItem";
import './home.scss'

const Home = () => {
    const [loading, setLoading] = useState(true)
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
            <h1 className={'title'}>Товары</h1>
            <ul className={'product__list'}>
                {store.allProducts.map(p => {
                    return <ProductItem product={p} key={p.id}/>
                })}
            </ul>
        </div>
        )
    }
}

export default Home;