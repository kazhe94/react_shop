import React from "react";
import './product.scss'
import ProductControls from "./ProductControls";
import {Tooltip} from '@material-ui/core'
import {observer} from "mobx-react-lite";
import {useHistory, useRouteMatch} from "react-router-dom";
import {computed} from "mobx";
import favorites from "../../store/favorites";

const ProductItem = observer((props) => {
    const history = useHistory()
    const { url } = useRouteMatch()
    const inFavorites = computed(() => favorites.isInFavorites(props.product.id)).get()
    const toggleFavorites = (e) => {
        e.stopPropagation()
        if(inFavorites) {
            favorites.removeFromFavorites(props.product.id)
        } else {
            favorites.addToFavorites(props.product.id)
        }
    }


    return (
        <li className={'product'} onClick={()=> history.push(`${url}/product/${props.product.id}`)}>
            <Tooltip title={inFavorites ? 'Удалить из избранного' : 'Добавить в избранное'} placement="right">
                <button className={`product__favorites ${inFavorites ? 'product__favorites--active' : null}`} onClick={toggleFavorites}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path
                            d="M21 8.5C21 5.805 19.621 4 17.282 4 14.969 4 13 5.743 13 8h-2c0-2.257-1.97-4-4.282-4C4.378 4 3 5.805 3 8.5c0 2.93 2.398 6.212 9 11.246 6.602-5.035 9-8.317 9-11.246zM17.282 2c3.58 0 5.717 2.8 5.718 6.5 0 3.816-2.885 7.664-10.4 13.3l-.6.45-.6-.45C3.886 16.164 1 12.317 1 8.5 1 4.8 3.139 2 6.718 2 8.884 2 10.864 3.069 12 4.742 13.136 3.069 15.115 2 17.282 2z"
                        ></path>
                    </svg>
                </button>
            </Tooltip>
            <div className="product__img">
                <img src={props.product.img} alt="img"/>
            </div>
            <h3 className={'product__title'}>{props.product.title}</h3>
            {
                props.product.count ?
                <ProductControls price={props.product.price} id={props.product.id} count={props.product.count}/>
                : <p className={'empty-text'}>Нет в наличии</p>
            }
        </li>
    )
})
export default ProductItem;