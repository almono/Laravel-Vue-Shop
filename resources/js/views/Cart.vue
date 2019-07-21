<template>
    <div class="container cart-div" style="padding-right: 0px; padding-left: 0px;">
        <div class="col-12" v-if="getCartProductQuantities">
            <div class="col-12 padding-fix cart-title">
                <h1>Your shopping cart</h1>
            </div>
            <div class="row cart-prod-row" v-for="prod in getCart" :key="prod.id">
                <div class="col-1 text-center">
                    <router-link :to="{ name: 'product', params: { id: prod.id} }">
                        <img :src="getImgSrc" class="img-responsive cart-prod-image">
                    </router-link>
                </div>
                <div class="col-10">
                    <div class="col-12 cart-prod-name padding-fix">
                        <router-link class="cart-prod-name" :to="{ name: 'product', params: { id: prod.id} }">
                            <h4 class="cart-prod-name">{{ prod.name }}</h4>
                        </router-link>
                    </div>
                    <div class="row col-12 cart-prod-info padding-fix" style="margin: 0px;">
                        <div class="cart-prod col-11 padding-fix" style="float: left;">
                            <b>Quantity: </b>{{ prod.quantity }}
                            <b>Price: </b>{{ prod.price }}
                        </div>
                    </div>
                </div>
                <div class="col-1">
                    <div class="cart-prod-remove">
                        <button class="btn btn-danger">X</button>
                    </div>
                </div>
            </div>
            <div class="row text-right" style="margin-top: 20px; border-top: 1px solid gray; padding-top: 20px; margin-right: 0px; margin-left: 0px; padding-right: 15px;">
                <div class="cart-total col-12 padding-fix text-right">
                    <h4 style="font-weight: 600; margin-bottom: 0px;">Total: {{ getCartProductTotal }}$</h4>
                    <button class="btn btn-success" style="margin-top: 5px">Checkout</button>
                </div>
            </div>
        </div>
        <div class="col-12 text-center" v-else>
            <h2>Your shopping cart is empty</h2>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Cart',
        data() {
            return {

            }
        },
        created() {

        },
        methods: {

        },
        computed: {
            ...mapGetters(['getCart','getCartProductTotal','getCartProductQuantities']),
            getImgSrc() {
                return '../product_images/product1.png'
            }
        }
    }
</script>

<style scoped>
    .cart-title {
        margin-bottom: 20px;
        border-bottom: 1px solid gray;
        padding-bottom: 10px;
    }
    .cart-div {
        border: 1px solid gray;
        padding: 20px;
    }
    .cart-prod-image {
        width: 100%;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
    }
    .cart-prod-row {
        margin-bottom: 10px;
    }
    .cart-prod-remove {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .cart-prod-name {
        color: black;
        text-decoration: none;
    }
    .cart-prod-name:hover, .cart-prod-name:focus, .cart-prod-name:active {
        text-decoration: none !important;
        border: none;
    }
</style>