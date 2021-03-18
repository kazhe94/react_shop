import React from "react";
import './product.scss'
import ProductControls from "./ProductControls";

import {observer} from "mobx-react-lite";
import {useHistory, useRouteMatch} from "react-router-dom";

const ProductItem = observer((props) => {
    const history = useHistory()
    const { url } = useRouteMatch()

    return (
        <li className={'product'} onClick={()=> history.push(`${url}/product/${props.product.id}`)}>
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