import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'
import router from '../router'

const state = {
    product: {},
    productList: {}
};

const getters = {
    getProductDetails: (state) => state.product,
    getProductList: (state) => state.productList
};

const actions = {
    getProductInformation(context, productId) {
        axios.post(`${backendUrl()}/product/` + productId,).then(response => {
            context.commit('setProductDetails', response.data)
        }).catch(err => {
            console.log(err)
        })
    },
    getProductList(context, category) {
        axios.get(`${backendUrl()}/product_list/${category}`).then(response => {
            context.commit('setProductList', response.data)
        }).catch(err => {
            console.log(err)
        })
    }
};

const mutations = {
    setProductDetails: (state, productDetails) => (state.product = productDetails),
    setProductList: (state, productList) => (state.productList = productList)
};

export default {
    state,
    getters,
    actions,
    mutations
}