import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    loggedIn: false
};

const getters = {
    isUserLoggedIn: (state) => state.loggedIn
};

const actions = {
    async registerUser(context, data) {
        console.log(data)
        await axios.post(`${backendUrl()}/registerUser`, data).then(response => {
            context.dispatch('handleResponse', response)
        }).catch(err => {
            context.dispatch('handleResponse', err.response)
        })
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