import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router);

import Home from './views/Home.vue';
import ProductsList from './views/ProductsList.vue';
import NotFound from './views/404Error.vue';
import Auth from './views/Auth.vue';
import Product from './views/Product';

let router = new Router({
    mode: 'history',
    base: '/',
    history: true,
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
        },
        {
            path: '/vuetest/public/product/:id',
            name: 'product',
            component: Product
        },
        {
            path: `/vuetest/public/auth`,
            name: 'auth',
            component: Auth
        },
        {
            path: '/vuetest/public/404',
            name: 'error404',
            component: NotFound
        },
        {
            path: '*',
            name: 'not_found',
            component: NotFound
        }
    ]
});

export default router
