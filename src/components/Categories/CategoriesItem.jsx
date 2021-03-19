import React from 'react'
import {useHistory} from "react-router-dom";

const CategoriesItem = (props) => {
    const history = useHistory()
    const addQuery = (e) => {
        e.preventDefault()
        history.push(`/home?category=${props.type}`)
    }
    return (
        <li className="categories__item">
            <a href="/" onClick={addQuery} className="categories__link">{props.title}</a>
        </li>
    )
}

export default CategoriesItem;