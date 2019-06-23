import Vue from 'vue'
import Vuex from 'vuex'
import mainStore from './store/mainStore'

Vue.use(Vuex);

let store = new Vuex.Store({
    modules:{
        mainStore
    }
});

export default store
