import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";
import {apiKey} from '../axios/goods'
class Auth {
    token = JSON.parse(localStorage.getItem('token')) ?? null
    constructor() {
        makeAutoObservable(this)
    }

    async login(payload) {
        try {
            const {data} = await axios.post(
                `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
                {...payload, returnSecureToken: true})
            runInAction(()=> {
                this.token = data.idToken
                localStorage.setItem('token', JSON.stringify(data.idToken))
            })
        } catch (e) {
            console.log(e.message)
        }
    }
    logout() {
        runInAction(()=> {
            this.token = null
            localStorage.removeItem('token')
        })
    }
    get isAuth() {
        return !!this.token
    }
}
export default new Auth()