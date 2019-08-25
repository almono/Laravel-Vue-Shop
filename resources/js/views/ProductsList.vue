<template>
    <div class="container">
        <div class="col-12 justify-content-center">
            <div class="col-12 padding-fix card filters-card" style="margin-bottom: 15px;">
                <div class="card-body">
                    <ProductFilters></ProductFilters>
                </div>
            </div>
            <div class="col-12 padding-fix products-div">
                <div class="prod-list-div col-lg-3" style="display: inline-block;" v-for="prod in getProductList">
                    <ProductListCard :prod="prod"></ProductListCard>
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
        },
        watch: {
            "$route.params.category" (category) {
                this.loadProductList(this.$route.params.category)
            }
        }
    }
</script>

<style scoped>
    .filters-card {
        width: 100%;
    }
    .prod-list-div {
        height: 300px;
    }
</style>
