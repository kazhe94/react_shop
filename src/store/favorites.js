import {makeAutoObservable} from "mobx";

class Favorites {
    favorites = JSON.parse(localStorage.getItem('favorites')) ?? []
    constructor() {
        makeAutoObservable(this)
    }

    addToFavorites(productId) {
        this.favorites.push(productId)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
    removeFromFavorites(productId) {
        this.favorites = this.favorites.filter(el => el !== productId)
        localStorage.setItem('favorites', JSON.stringify(this.favorites))
    }
    isInFavorites(productId) {
        return !!this.favorites.find(el => el === productId)
    }
    get allFavorites() {
        console.log(this.favorites)
        return this.favorites
    }
}

export default new Favorites()