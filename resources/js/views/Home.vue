<template>
    <div class="container">
        <b-jumbotron header="Vue Shopping" :lead="getWelcomeMessage"></b-jumbotron>

        <b-card-group deck v-if="getHomepageProducts">
            <b-card v-for="product in getHomepageProducts" :key="product.id">
                <b-link :to="{ name: 'product', params: { id: product.id} }" >
                    <h3>{{ product.name }}</h3>
                    <img src="public/product_images/product1.png" class="home-product-image">
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
    import { mapGetters, mapState } from 'vuex'

    export default {
        name: 'home',
        methods: {
            loadWelcomeMessage() {
                this.$store.dispatch('getWelcomeMessage')
            },
            getHomeProducts() {
                this.$store.dispatch('getHomeProducts')
            }
        },
        created() {
            if(!this.$store.state.mainStore.welcomeMessage) {
                this.loadWelcomeMessage();
            }
            if(Object.entries(this.$store.state.mainStore.homepageProducts).length === 0) {
                this.getHomeProducts()
            }
        },
        computed: {
            ...mapGetters(['getHomepageProducts','getWelcomeMessage']),
            getImgSrc() {
                return 'public/product_images/product1.png'
            }
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