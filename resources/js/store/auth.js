import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    loggedIn: false
};

const getters = {
    isUserLoggedIn: (state) => state.loggedIn,
};

const actions = {
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