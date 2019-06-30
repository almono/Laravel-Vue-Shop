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
    async getProductInformation(context, productId) {
        await axios.post(`${backendUrl()}/product/` + productId ).then(response => {
            if (response.status == '200') {
                context.commit('setProductDetails', response.data)
            } else {
                router.push({ name: 'error404'});
            }
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