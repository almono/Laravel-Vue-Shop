import Vue from 'vue'
import Vuex from 'vuex'
import mainStore from './store/mainStore'
import cart from './store/cart'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules:{
        mainStore,
        cart
    }
});

export default store
