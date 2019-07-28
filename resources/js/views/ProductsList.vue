<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="card filters-card">
                <div class="card-body">
                    <ProductFilters></ProductFilters>
                </div>
            </div>
            <div class="card filters-card">
                <div class="card-body">
                    <div v-for="prod in getProductList">
                        <ProductListCard :prod="prod"></ProductListCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import ProductFilters from '../components/ProductFilters.vue'
    import ProductListCard from '../components/ProductListCard.vue'
    
    export default {
        name: 'products_list',
        components: {
            ProductFilters,
            ProductListCard
        },
        computed: {
            ...mapGetters(['getProductList'])
        },
        methods: {
            loadProductList(category) {
                this.$store.dispatch('getProductList', category)
            }
        },
        created() {
            this.loadProductList(this.$route.params.category)
        }
    }
</script>

<style scoped>
    .filters-card {
        width: 100%;
    }
</style>
