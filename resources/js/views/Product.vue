<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6 product-left">

            </div>
            <div class="col-sm-12 col-md-6 col-lg-6 product-right">

            </div>
        </div>
        <div class="row">
            <div class="col-12 padding-fix ba-1">
                <b-tabs content-class="mt-3">
                    <b-tab title="Description" active><p>I'm the first tab</p></b-tab>
                    <b-tab title="Second"><p>I'm the second tab</p></b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        created() {
            this.getProductInformation(this.$route.params.id)
        },
        methods: {
            getProductInformation(productId) {
                this.$store.dispatch('getProductInformation', productId )
            }
        }
    }
</script>

<style scoped>
    .product-left {
        min-height: 600px;
    }
    .product-right {
        min-height: 600px;
    }
</style>