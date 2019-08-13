import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'

Vue.use(Router);

import Home from './views/Home.vue';
import ProductsList from './views/ProductsList.vue';
import NotFound from './views/404Error.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Product from './views/Product';
import Cart from './views/Cart'

let router = new Router({
    mode: 'history',
    base: '/',
    history: true,
    fallback: true,
    routes: [
        {
            path: `/vuetest`,
            name: 'home',
            component: Home
        },
        {
            path: `/vuetest/products/:category?`,
            name: 'products_list',
            component: ProductsList
        },
        {
            path: '/vuetest/product/:id',
            name: 'product',
            component: Product
        },
        {
            path: '/vuetest/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: `/vuetest/login`,
            name: 'login',
            component: Login
        },
        {
            path: `/vuetest/register`,
            name: 'register',
            component: Register
        },
        {
            path: '/vuetest/404',
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
