<template>
    <div class="container">
        <b-jumbotron header="Vue Shopping" :lead="getWelcomeMessage"></b-jumbotron>

        <b-card-group deck v-if="getHomepageProducts">
            <HomeProduct v-for="product in getHomepageProducts" :key="product.id" :product="product"></HomeProduct>
        </b-card-group>
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

<style scoped>

</style>