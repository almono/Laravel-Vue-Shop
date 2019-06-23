import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    loggedIn: false
};

const getters = {
    isUserLoggedIn: (state) => state.loggedIn
};

const actions = {
    getProducts(context) {
        axios.post(`${backendUrl()}/test`).then(response => {
            console.log(response.data)
        }).catch(err => {
            console.log(err)
        })
    }
};

const mutations = {
    setLoggedIn: (state, status) => (state.loggedIn = status)
};

export default {
    state,
    getters,
    actions,
    mutations
}