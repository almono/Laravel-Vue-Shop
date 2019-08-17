import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    loggedIn: false
};

const getters = {
    isUserLoggedIn: (state) => state.loggedIn,
};

const actions = {
    async registerUser(context, data) {
        console.log(data)
        await axios.post(`${backendUrl()}/registerUser`, data).then(response => {
            //console.log(response.data)
        }).catch(err => {
            //console.log(err)
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