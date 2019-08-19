import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    welcomeMessage: '',
    homepageProducts: {},
    response: {}
};

const getters = {
    getWelcomeMessage: (state) => state.welcomeMessage,
    getHomepageProducts: (state) => state.homepageProducts,
    getResponse: (state) => state.response
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
    },

    handleResponse(context, response) {
        /* if(response.data.httpCode == 503){
            router.push('/404')
        } else if(response.data.httpCode == 401) {
            vuecookie.remove('token')
            context.commit('setLoggedIn', false)
            router.push('/')
        } */
        context.commit('showResponse', response.data)
        context.commit('hideResponse')
    },
};

const mutations = {
    setWelcomeMessage: (state, welcomeMessage) => ( state.welcomeMessage = welcomeMessage ),
    setHomepageProducts: (state, homepageProducts) => ( state.homepageProducts = homepageProducts ),
    showResponse: (state, info) => (state.response = info),
    hideResponse: () => (
        setTimeout( function(){
            if(state.response) {
                state.response = 0
            }
        }, 3000)
    )
};

export default {
    state,
    getters,
    actions,
    mutations
}