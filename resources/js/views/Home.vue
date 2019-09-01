<template>
    <div class="container">
        <div class="home-carousel">
            <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000;" fade indicators >
                <b-carousel-slide class="text-center">
                    <p>Electronics</p><br>
                    <router-link :to="{ name: 'products_list', params: { category: 'electronics'} }">
                        <button class="btn btn-primary">Explore</button>
                    </router-link>
                    <img slot="img" class="img-carousel" height="360" src="/vuetest/public/images/category1.jpg" alt="image slot">
                </b-carousel-slide>
            </b-carousel>
        </div>

        <div v-if="getHomepageProducts">
            <HomeProduct v-for="prod in getHomepageProducts" :key="prod.id" :prod="prod"></HomeProduct>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import HomeProduct from '../components/HomeProduct.vue'

    export default {
        name: 'home',
        components: {
            HomeProduct
        },
        computed: {
            ...mapGetters(['getHomepageProducts','getWelcomeMessage'])
        },
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
        }
    }
</script>

<style>
    .home-carousel {
        margin-top: 5px;
        margin-bottom: 10px;
        padding: 10px;
    }
    .img-carousel {
        width: 100%;
        max-width: 100%;
        max-height: 100%;
    }
    .carousel-caption {
        top: 0 !important;
        bottom: auto !important;
        width: 100%;
        left: 0 !important;
        right: 0 !important;
        text-align: left !important;
        font-size: 60px;
        font-weight: 600;
        padding: 20px;
    }
</style>