import {makeAutoObservable, runInAction} from "mobx";
import axios from "../axios/goods";

class Store {
    products = []
    categories = []
    constructor() {
        makeAutoObservable(this)
    }

    async fetchProducts() {
        const {data} = await axios.get(`/products.json`)
        runInAction(()=> {
            this.products = Object.keys(data).map(key => {
                return {
                    ...data[key],
                    id: key
                }
            })
        })
    }
    async fetchCategories() {
        const {data} = await axios.get(`/categories.json`)
        runInAction(()=> {
            this.categories = Object.keys(data).map(key => {
                return {
                    ...data[key],
                    id: key
                }
            })
        })
    }
    async fetchOne(id) {
        const {data} = await axios.get(`/products/${id}.json`)
        return data
    }
    getProduct(id) {
        return this.products.find(item => item.id === id)
    }
    getCategory(type) {
        return this.categories.find(c => c.type === type).title
    }
    get allProducts() {
        return [...this.products.filter(item => item.count !== 0).concat(
                this.products.filter(item => item.count === 0)
            )
        ]
    }
}
export default new Store()