<template>
    <div>
        <b-card-group deck>
            <b-card>
                <b-link :to="{ name: 'product', params: { id: prod.id} }" >
                    <h3>{{ prod.name }}</h3>
                    <img src="public/product_images/product1.png" class="home-product-image">
                    <b-card-text>
                        {{ prod.description }}
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
        name: 'ProductListCard',
        props: {
            prod: Object
        }
    }
</script>