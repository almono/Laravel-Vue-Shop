import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    loggedIn: false
};

const getters = {
    isUserLoggedIn: (state) => state.loggedIn
};

const actions = {
    login(context, data) {
        axios.post(`${backendUrl()}/login`, data).then(response => {
            context.dispatch('handleResponse', response)
            context.commit('setLoggedIn', true)
            router.push({ name: 'home' })
        }).catch(err => {
            context.dispatch('handleResponse', err.response)
        })
    },

    async registerUser(context, data) {
        await axios.post(`${backendUrl()}/registerUser`, data).then(response => {
            context.dispatch('handleResponse', response)
        }).catch(err => {
            context.dispatch('handleResponse', err.response)
        })
    },

    logout(context) {
        context.commit('setLoggedIn', false)
        router.push({ name: 'home' })
    }
};

const mutations = {
    setLoggedIn: (state, status) => ( state.loggedIn = status )
};

export default {
    state,
    getters,
    actions,
    mutations
}