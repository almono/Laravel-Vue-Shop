<template>
    <div class="container">
        <b-jumbotron header="Vue Shopping" :lead="getWelcomeMessage">
            <hr class="my-4">
            <b-btn variant="primary" href="https://bootstrap-vue.js.org/">Products</b-btn>
        </b-jumbotron>
        <b-card-group deck >
            <b-card v-for="product in getHomepageProducts" :key="product.id" v-bind:title="product.name" img-src="https://www.t-systems.com/image/756224/large1x1/fc/200/200/c5da96a98d100550569846a93c4756c2/vB/im-mc-bg-smart-sd-wan-png.jpg" img-alt="Image" img-top>
                <b-card-text>
                    {{ product.description }}
                </b-card-text>
                <div slot="footer"><small class="text-muted">Last updated 3 mins ago</small></div>
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
            getProducts() {
                this.$store.dispatch('getProducts')
            }
        },
        created() {
            this.loadWelcomeMessage()
            this.getProducts()
        },
        computed: {
            ...mapGetters(['getHomepageProducts','getWelcomeMessage'])
        }
    }
</script>
