import React from 'react'
import store from "../../store/store";
import './categories.scss'
import CategoriesItem from "./CategoriesItem";

const Categories = () => {
    return (
        <div className="categories">
            <h3 className={'categories__title'}>Категории</h3>
            <ul className="categories__list">
                {store.categories.map(c => {
                    return <CategoriesItem {...c} key={c.type}/>
                })}
            </ul>
        </div>
    )
}

export default Categories;