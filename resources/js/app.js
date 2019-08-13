import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import {i18n} from './plugins/i18n'
import StarRating from 'vue-star-rating'
import Icon from 'vue-awesome/components/Icon'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'

window.Vue = require('vue');
import App from './views/App.vue'

Vue.use(BootstrapVue);
Vue.component('star-rating', StarRating);
Vue.component('v-icon', Icon);


const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    i18n,
    render: h => h(App)
});
