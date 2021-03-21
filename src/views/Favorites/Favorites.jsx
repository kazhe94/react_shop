import React, {useEffect, useState} from "react";
import Loader from "../../components/Loader/Loader";
import favorites from "../../store/favorites";
import store from "../../store/store";
import ProductItem from "../../components/Product/ProductItem";
import {observer} from "mobx-react-lite";

const Favorites = observer(() => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        favorites.allFavorites.forEach(async (id) => {
            const data = await store.fetchOne(id)
            setProducts(prevState => prevState.concat(data))
        })
    }, [])
    const removeFromFavorites = () => {

    }
    if(products.length) {
        return (
            <div className="container">
                <h1 className={'title'}>Избранное</h1>
                <ul className="product__list">
                    {
                        products.map(item => {
                            return <ProductItem product={item} key={item.id}></ProductItem>
                        })
                    }
                </ul>
            </div>
        )
    } else  {
        return <Loader/>
    }
})

export default Favorites;