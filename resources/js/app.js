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

// make translation function globally available to all functions
Vue.mixin({
    methods: {
        t(str, fallbackStr) {
            // $t returns translation, $te checks if the translation exists and returns true/false
            // if there is no translation and translation for default language (EN) doesnt exist then return the 2nd parameter as default translation
            // str => message key used to find the translation
            // change commented returns and fallback locale in i18n.js to make the function return just the key as message shown in case the translation doesnt exist
            if (this.$t && this.$te) {
                if(this.$t(str) != fallbackStr && this.$t(str) != '' && str != this.$t(str)) {
                    return this.$t(str)
                }
                if (this.$te(str)) {
                    return this.$t(str)
                } else {
                    //return this.$t(str)
                    return fallbackStr
                }
            } else {
                if (fallbackStr) {
                    //return this.$t(str)
                    return fallbackStr
                } else {
                    return str
                }
            }
        }
    }
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
    i18n,
    beforeCreate() {
        //get the site configuration
        store.dispatch('getLangData', localStorage.getItem('vueCurrentLang') || 'EN')
    },
    render: h => h(App)
});
