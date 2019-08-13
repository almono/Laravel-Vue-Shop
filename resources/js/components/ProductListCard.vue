<template>
    <div class="prod-mini-prod">
        <b-card>
            <b-link :to="{ name: 'product', params: { id: prod.id} }" :title="prod.description" >

                <div class="prod-mini-img text-center">
                    <img :src="'../product_images/product1.png'" class="img-responsive">
                </div>
                <div class="prod-mini-title text-center">
                    <h5>{{ prod.name }}</h5>
                </div>
                <div class="prod-mini-footer text-center">
                    <h5 class="prod-mini-price">{{ prod.price }}$</h5>
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
        }
    }
</script>

<style scoped>
    .prod-mini-prod {
        height: 100%;
    }
    .prod-mini-prod > .card {
        height: 100%;
        max-height: 200px;
    }
    .prod-mini-title {
        height: 50px;
    }
    .prod-mini-title {
        margin-bottom: 0px;
    }
    .prod-mini-img {
        height: 100px;
        max-width: 100%;
    }
    .prod-mini-footer {
        height: 50px;
    }
    .prod-mini-price {
        color: #b50000;
        font-size: 20px;
        font-weight: 600;
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
</style>