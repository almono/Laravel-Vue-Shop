import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import Home from './views/Home.vue';
import ProductsList from './views/ProductsList.vue';
import NotFound from './views/404Error.vue';
import Login from './views/Login.vue';
import Register from './views/Register';


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
        },
        {
            path: `/vuetest/public/login`,
            name: 'login',
            component: Login
        },
        {
            path: `/vuetest/public/register`,
            name: 'register',
            component: Register
        },
        {
            path: '*',
            name: 'not_found',
            component: NotFound
        }
    ]
});

export default router
