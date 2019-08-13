import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    loggedIn: false,
    welcomeMessage: '',
    homepageProducts: {}
};

const getters = {
    isUserLoggedIn: (state) => state.loggedIn,
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
    setLoggedIn: (state, status) => ( state.loggedIn = status ),
    setWelcomeMessage: (state, welcomeMessage) => ( state.welcomeMessage = welcomeMessage ),
    setHomepageProducts: (state, homepageProducts) => ( state.homepageProducts = homepageProducts )
};

export default {
    state,
    getters,
    actions,
    mutations
}