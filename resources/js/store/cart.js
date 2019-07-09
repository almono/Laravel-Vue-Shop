import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    cart: []
};

const getters = {
    getCart: (state) => state.cart
};

const actions = {
    async addProductToCart(context) {
        await axios.post(`${backendUrl()}/addToCart`, {productId: 1, quantity: 1}).then(response => {
            context.commit('setHomepageProducts', response.data)
        }).catch(err => {
            console.log(err)
        })
    }
};

const mutations = {
    setCart: (state, productDetails) => (state.cart = productDetails)
};

export default {
    state,
    getters,
    actions,
    mutations
}