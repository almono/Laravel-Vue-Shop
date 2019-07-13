<template>
    <div style="margin-bottom: 20px;">
        <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
            <div class="container">
                <b-link :to="{ name: 'home' }" router-tag="b-navbar-brand" class="hover-cursor">Vue Shopping</b-link>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item-dropdown>
                            <template slot="button-content">Categories</template>
                            <b-dropdown-item href="#">Electronics</b-dropdown-item>
                            <b-dropdown-item href="#">Clothes</b-dropdown-item>
                            <b-dropdown-item href="#">Food</b-dropdown-item>
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
                        <b-navbar-nav v-else>
                            <b-link :to="{ name: 'auth' }" router-tag="b-nav-item">Login/Register</b-link>
                        </b-navbar-nav>
                        <b-navbar-nav>
                            <b-nav-item style="position: relative;">Cart <v-icon name="shopping-cart" scale="1.5" /><b-badge class="cart-quantity" variant="success">{{ getCartProductQuantities }}</b-badge></b-nav-item>
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
            ...mapGetters(['isUserLoggedIn','getCartProductQuantities'])
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
        font-size: 12px;
        border-radius: 50%;
    }
</style>