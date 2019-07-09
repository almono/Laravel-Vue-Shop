import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'
import router from '../router'

const state = {
    product: {}
};

const getters = {
    getProductDetails: (state) => state.product
};

const actions = {
    getProductInformation(context, productId) {
        axios.post(`${backendUrl()}/product/` + productId,).then(response => {
            context.commit('setProductDetails', response.data)
        }).catch(err => {
            console.log(err)
        })
    }
};

const mutations = {
    setProductDetails: (state, productDetails) => (state.product = productDetails)
};

export default {
    state,
    getters,
    actions,
    mutations
}