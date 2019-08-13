<template>
    <b-card>
        <b-link :to="{ name: 'product', params: { id: product.id} }" >
            <h3 class="text-center">{{ product.name }}</h3>
            <img src="/vuetest/public/product_images/product1.png" class="img-responsive home-product-image">
            <b-card-text class="text-center">
                {{ product.description }}
            </b-card-text>
            <div slot="footer" class="text-center"><star-rating :increment="0.5" :star-size="16" :show-rating="false" :read-only="true" :rating="5"></star-rating></div>
        </b-link>
    </b-card>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'HomeProduct',
        props: {
            product: Object
        }
    }
</script>

<style scoped>
    a {
        color: black !important;
    }
    a:hover {
        text-decoration: none !important;
    }
    .home-product-image {
        max-height: 100%;
        max-width: 100%;
    }
</style>