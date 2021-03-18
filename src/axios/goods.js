import axios from "axios";

const requestAxios = axios.create({
    baseURL: 'https://vue-online-shop-d594b-default-rtdb.europe-west1.firebasedatabase.app/'
})

export const apiKey = 'AIzaSyDKG0BmJ3R6MuiHwoiRxi9pOXj0veQ-Vc4'

// requestAxios.interceptors.response.use(null, (error)=> {
//     if(error.response.status = 401) {
//         router.push('/auth?message=auth')
//     }
//     return Promise.reject(error)
// })

export default requestAxios