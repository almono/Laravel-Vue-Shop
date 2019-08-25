<template>
    <div class="prod-mini-prod">
        <b-card>
            <b-link :to="{ name: 'product', params: { id: prod.id} }" :title="prod.description" >

                <div class="prod-mini-img text-center">
                    <img :src="'../product_images/product1.png'" class="img-responsive">
                </div>
                <div class="col-12 prod-mini-title text-center">
                    <h5>{{ prod.name }}</h5>
                </div>
                <div class="prod-mini-rating">
                    <star-rating :increment="0.5" :star-size="16" :show-rating="false" :read-only="true" :rating="5"></star-rating>
                </div>
                <div class="col-12 padding-fix prod-mini-footer text-center">
                    <div class="footer-mini-div col-12">
                        <div v-if="prod.discount_price <= 0 && prod.stock > 0" class="col-8 padding-fix text-right" style="display: inline-block;">
                            <h5 class="prod-mini-price">{{ prod.price }}$</h5>
                        </div>
                        <div v-else-if="prod.discount_price <= 0 && prod.stock == 0" class="col-8 padding-fix text-right" style="display: inline-block;">
                            <h5 class="prod-mini-price out-of-stock">Out of stock</h5>
                        </div>
                        <div v-else  class="col-8 padding-fix text-right" style="display: inline-block;">
                            <h5 class="prod-mini-price prod-old-price">{{ prod.price }}$</h5>
                            <h4 class="prod-discount-price">{{ prod.discount_price }}$</h4>
                        </div>
                        <div class="col-4 padding-fix text-center" style="display: inline;">
                            <button v-if="prod.stock > 0" class="btn btn-primary"><v-icon name="shopping-cart" scale="1" /></button>
                            <button v-else class="btn btn-secondary"><v-icon name="times-circle" scale="1.5" /></button>
                        </div>
                    </div>
                </div>
            </b-link>
        </b-card>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'ProductListCard',
        props: {
            prod: Object
        },
        computed: {
            isProdDiscounted() {
                let currentDate = new Date();
            }
        },
        created() {
            console.log(new Date().getDate())
        }
    }
</script>

<style scoped>
    .prod-mini-prod {
        height: 100%;
    }
    .prod-mini-prod > .card {
        height: 100%;
        max-height: 300px;
    }
    .prod-mini-rating {
        display: flex;
        height: 40px;
        align-items: baseline;
    }
    .prod-mini-title {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        margin-bottom: 0px;
    }
    .prod-mini-title > h5 {
        font-size: 18px;
        font-weight: 600;
        color: #444;
        margin-bottom: 0px;
    }
    .prod-mini-img {
        height: 160px;
        max-width: 100%;
    }
    .prod-mini-footer {
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .prod-mini-price {
        color: #4693b5;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 0px;
    }
    a {
        color: black !important;
    }
    a:hover {
        text-decoration: none !important;
    }
    .card-body {
        padding: 5px;
    }
    .vue-star-rating {
        margin-left: auto;
        margin-right: auto;
    }
    .footer-mini-div {
        padding: 5px;
        border: 1px solid rgba(0, 0, 0, 0.125);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .prod-old-price {
        font-size: 14px;
        text-decoration: line-through;
        display: inline-block;
        margin-bottom: 0px;
    }
    .prod-discount-price {
        font-weight: 600;
        font-size: 20px;
        color: red;
        display: inline-block;
        margin-bottom: 0px;
    }
    .out-of-stock {
        color: #666363;
    }
</style>