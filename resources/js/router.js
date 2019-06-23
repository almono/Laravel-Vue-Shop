import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './views/Home.vue';
import ProductsList from './views/ProductsList.vue';


let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    fallback: true,
    routes: [
        {
            path: `/vuetest/public/`,
            name: 'home',
            component: Home
        },
        {
            path: `/vuetest/public/products`,
            name: 'products_list',
            component: ProductsList
        }
    ]
});

export default router
