<template>
    <div class="container">
        <b-jumbotron header="Vue Shopping" :lead="getWelcomeMessage">
            <hr class="my-4">
            <b-btn variant="primary" href="https://bootstrap-vue.js.org/">Products</b-btn>
        </b-jumbotron>

        <b-card-group deck >
            <b-card v-for="product in getHomepageProducts" :key="product.id">
                <b-link :to="{ name: 'product', params: { id: product.id} }" >
                    <h3>{{ product.name }}</h3>
                    <img src="product_images/product1.png" class="home-product-image">
                    <b-card-text>
                        {{ product.description }}
                    </b-card-text>
                    <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
                </b-link>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'home',
        methods: {
            loadWelcomeMessage() {
                this.$store.dispatch('getWelcomeMessage')
            },
            getHomeProducts() {
                this.$store.dispatch('getHomeProducts')
            },
            getImgSrc(productId) {
               // return require('public/product_images/' + productId + '.png')
            }
        },
        created() {
            this.loadWelcomeMessage()
            this.getHomeProducts()
        },
        computed: {
            ...mapGetters(['getHomepageProducts','getWelcomeMessage'])
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