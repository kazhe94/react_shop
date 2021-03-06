import {makeAutoObservable, runInAction} from "mobx";
import axios from "../axios/goods";
import {nanoid} from 'nanoid'

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
    async fetchFeedback(id) {
        const {data} = await axios.get(`/feedback/${id}.json`)
            if(data) {
                return  Object.keys(data).map(key => {
                    return {
                        ...data[key],
                        id: key
                    }
                })
            }
    }
    async sendFeedback(payload) {
        const id = nanoid(8)
        await axios.put(`/feedback/${payload.id}/${id}.json`, {
            name: payload.name,
            text: payload.text,
            date: new Date().toLocaleDateString()
        })
        runInAction(() => {
            this.feedback.push({
                id: id,
                name: payload.name,
                text: payload.text
            })
        })
    }
    getProduct(id) {
        return this.products.find(item => item.id === id)
    }
    getCategory(type) {
        return this.categories.find(c => c.type === type).title
    }
    getFeedback(id) {
        console.log(this.feedback)
        return this.feedback.find(f => f.id === id)
    }
    get allProducts() {
        return [...this.products.filter(item => item.count !== 0).concat(
                this.products.filter(item => item.count === 0)
            )
        ]
    }
}
export default new Store()