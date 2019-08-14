import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    welcomeMessage: '',
    homepageProducts: {}
};

const getters = {
    getWelcomeMessage: (state) => state.welcomeMessage,
    getHomepageProducts: (state) => state.homepageProducts
};

const actions = {
    async getWelcomeMessage(context) {
        await axios.post(`${backendUrl()}/getWelcomeMessage`).then(response => {
            context.commit('setWelcomeMessage', response.data)
        }).catch(err => {
            console.log(err)
        })
    },

    getHomeProducts(context) {
        axios.post(`${backendUrl()}/homepageProducts`).then(response => {
            context.commit('setHomepageProducts', response.data)
            console.log(context.state.homepageProducts)
        }).catch(err => {
            console.log(err)
        })
    }
};

const mutations = {
    setWelcomeMessage: (state, welcomeMessage) => ( state.welcomeMessage = welcomeMessage ),
    setHomepageProducts: (state, homepageProducts) => ( state.homepageProducts = homepageProducts )
};

export default {
    state,
    getters,
    actions,
    mutations
}