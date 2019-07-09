import Vue from 'vue'
import Vuex from 'vuex'
import mainStore from './store/mainStore'
import cart from './store/cart'
import products from './store/products'
import auth from './store/auth'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules:{
        mainStore,
        cart,
        products,
        auth
    },
    state: {
        contentLoading: false
    },
    mutations: {
        setLoading: (state, loadingStatus) => (state.contentLoading = loadingStatus)
    },
    getters: {
        isLoading: (state) => state.contentLoading
    },
    actions: {
        changeLoadingStatus(context) {
            setTimeout( function() {
                context.commit('setLoading', false)
            }, 1500)
        }
    }
});

export default store
