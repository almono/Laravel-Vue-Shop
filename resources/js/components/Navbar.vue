<template>
    <div style="margin-bottom: 20px; padding-right: 0px; padding-left: 0px;">
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <div class="container">
                <b-link :to="{ name: 'home' }" router-tag="b-navbar-brand" class="hover-cursor">Vue Shopping</b-link>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item-dropdown text="Categories">
                            <b-link :to="{ name: 'products_list', params: { category: 'electronics'} }" router-tag="b-dropdown-item">Electronics</b-link>
                            <b-link :to="{ name: 'products_list', params: { category: 'clothes'} }" router-tag="b-dropdown-item">Clothes</b-link>
                            <b-link :to="{ name: 'products_list', params: { category: 'food'} }" router-tag="b-dropdown-item">Food</b-link>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item-dropdown text="Language" right>
                            <b-dropdown-item href="#">EN</b-dropdown-item>
                            <b-dropdown-item href="#">PL</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown right v-if="isUserLoggedIn">
                            <template slot="button-content">User</template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown v-else class="text-center" text="My account" right>
                            <b-link :to="{ name: 'auth' }" router-tag="b-dropdown-item">My account</b-link>
                            <b-dropdown-divider></b-dropdown-divider>
                            <div v-if="!isUserLoggedIn">
                                <b-link :to="{ name: 'login' }" router-tag="b-dropdown-item">Login</b-link>
                                <b-link :to="{ name: 'register' }" router-tag="b-dropdown-item">Register</b-link>
                            </div>
                            <b-link v-else :to="{ name: 'login' }" router-tag="b-dropdown-item">Logout</b-link>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown right class="cart-dropdown" v-if="getCart.length > 0">
                            <template slot="button-content">Cart <v-icon name="shopping-cart" scale="1.5" /><b-badge class="cart-quantity" variant="success">{{ getCartProductQuantities }}</b-badge></template>
                            <b-dropdown-item v-for="product in getCart" :key="product.id" class="cart-dropdown-div bt-1 bb-1 text-left">
                                <div class="col-12 padding-fix">
                                    <img :src="'../product_images/product1.png'" class="img-responsive" style="max-width: 50px; max-height: 50px;">
                                    <b>{{ product.name }} ({{ product.quantity}})</b>
                                </div>
                                <div class="col-12 padding-fix text-right" style="margin-top: -15px; margin-bottom: 5px;">
                                    {{ parseFloat(product.price * product.quantity).toFixed(2) }}$
                                </div>
                            </b-dropdown-item>
                            <b-dropdown-item class="checkout-div text-center">
                                <b-link :to="{ name: 'cart' }" router-tag="b-nav-item" class="btn btn-success btn-checkout">Checkout</b-link>
                            </b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-navbar-nav v-else>
                            <b-link :to="{ name: 'cart' }" router-tag="b-nav-item" style="position: relative;">Cart <v-icon name="shopping-cart" scale="1.5" /><b-badge class="cart-quantity" variant="success">{{ getCartProductQuantities }}</b-badge></b-link>
                        </b-navbar-nav>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Navbar',
        data() {
            return {
                cart: {}
            }
        },
        computed: {
            ...mapGetters(['isUserLoggedIn', 'getCart', 'getCartProductQuantities'])
        }
    }
</script>

<style>
    .hover-cursor {
        cursor: pointer !important;
    }
    .cart-quantity {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 11px;
        border-radius: 50%;
    }
    .cart-dropdown > .dropdown-toggle::after {
        display:none;
    }
    .cart-dropdown > ul {
        padding: 0px;
    }
    .cart-dropdown-div > a {
        padding: 5px 15px 5px 10px;
    }
    .btn-checkout {
        padding: 5px 10px 5px 10px;
        width: 100%;
    }
    .btn-checkout > a {
        padding: 0px !important;
        color: white !important;
    }
    .checkout-div {
        padding: 5px 0px;
    }
    .checkout-div > a:active, .checkout-div > a:focus {
        background-color: transparent;
    }
</style>