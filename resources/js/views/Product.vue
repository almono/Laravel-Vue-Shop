<template>
    <div class="container">
        <div v-if="this.product && this.product.id == this.$route.params.id">
            <div class="row pt-3">
                <div class="col-sm-12 col-md-6 col-lg-8 product-left text-center">
                    <img :src="'../product_images/product1.png'" class="img-responsive product-image">
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4 product-right bl-1">
                    <div class="product-title text-left">
                        <h3 class="product-name">{{ getProductDetails.name }}</h3>
                        <p class="product-category">{{ getProductDetails.category.name }}</p>
                        <div class="product-ratings">
                            <star-rating :increment="0.5" :star-size="16" :show-rating="false" :read-only="true" :rating="averageProductRating"></star-rating>
                            <p class="product-reviews">{{ ratingsAmount }} review(s)</p>
                        </div>
                    </div>
                    <div class="product-info">
                        <p class="product-price">{{ getProductDetails.price }} $</p>
                        <!-- <p class="product-price-discount">{{ getProductDetails.price }} $</p> -->
                        <p>
                            <b-input-group class="product-quantity">
                                <b-input-group-prepend>
                                    <b-btn variant="outline-secondary btn-minus text-center" v-on:click="substractQuantity()">-</b-btn>
                                </b-input-group-prepend>
                                <b-form-input class="quantity-box text-center" type="number" min="1" v-model="quantity"></b-form-input>
                                <b-input-group-append>
                                    <b-btn variant="outline-secondary btn-plus text-center" v-on:click="addQuantity()">+</b-btn>
                                </b-input-group-append>
                            </b-input-group>
                            <b-button variant="success" class="product-add-cart" v-on:click="addProductToCart">Add to cart</b-button>
                        </p>
                    </div>
                    <div class="product-right-btns"></div>
                </div>
            </div>
            <div class="col-12 padding-fix ba-1">
                <b-tabs content-class="mt-3">
                    <b-tab title="Description" active><p class="product-desc">{{ getProductDetails.description }}</p></b-tab>
                    <b-tab title="Reviews">
                        <div class="col-12 product-opinions" v-if="productRatings.length > 0">
                            <b-card class="col-12 padding-fix" :title="opinion.user.username" v-for="opinion in productRatings" :key="opinion.id">
                                <h6 class="cart-subtitle text-muted mb-2">
                                    <star-rating :increment="0.5" :star-size="16" :show-rating="false" :read-only="true" :rating="opinion.rating"></star-rating>
                                </h6>
                                <b-card-text>
                                    {{ opinion.comment }}
                                </b-card-text>
                            </b-card>
                        </div>
                        <div class="col-12 product-opinions text-center mb-3" v-else>
                            There are no reviews for this product :(
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
        <div v-else class="text-center">
            <b-spinner class="loading-spinner" variant="success"></b-spinner>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Product',
        data() {
            return {
                quantity: 1,
                product: {}
            }
        },
        created() {
            this.loadProduct(this.$route.params.id)
            this.product = this.$store.state.products.product
        },
        watch: {
            getProductDetails() {
                this.product = this.getProductDetails
            }
        },
        methods: {
            loadProduct(productId) {
                this.$store.dispatch('getProductInformation', productId )
            },
            addQuantity() {
                if(this.quantity < 999) {
                    this.quantity += 1;
                }
            },
            substractQuantity() {
                if(this.quantity > 1) {
                    this.quantity -= 1;
                }
            },
            addProductToCart() {
                this.$store.dispatch('addProductToCart',
                    { productId: this.product.id, quantity: this.quantity, productName: this.product.name, productPrice: this.product.price }
                    )
            }
        },
        computed: {
            ...mapGetters(['getProductDetails']),
            ratingsAmount() {
                return this.$store.state.products.product.ratings.length
            },
            averageProductRating() {
                return this.$store.state.products.product.average_rating
            },
            productRatings() {
                return this.$store.state.products.product.ratings
            }
        }
    }
</script>

<style scoped>
    .product-left {
        height: 400px;
    }
    .product-right {
        height: 400px;
        position: relative;
        padding-left: 20px;
    }
    .product-desc {
        padding: 10px;
    }
    .product-opinions {
        padding: 10px;
    }
    .product-quantity {
        max-width: 160px;
    }
    .product-right-btns {
        position: absolute;
        bottom: 50px;
        left: 15px;
    }
    .product-image {
        max-width: 100%;
        max-height: 100%;
    }
    .product-category {
        font-size: 12px;
        color: dimgray;
        margin-bottom: 5px;
    }
    .product-name {
        margin-bottom: 0px;
    }
    .product-price {
        font-size: 24px;
        color: #4381ff;
        font-weight: 600;
        margin-bottom: 5px;
        margin-top: 10px;
    }
    .product-price-discount {
        font-size: 20px;
        color: red;
        font-weight: 700;
    }
    .product-add-cart {
        width: 160px;
        border-radius: 0px;
        margin-top: 5px;
    }
    .product-stars {
        margin-bottom: 0px;
    }
    .product-reviews {
        color: dimgray;
        font-size: 14px;
    }
    .btn-minus {
        width: 40px;
    }
    .quantity-box {
        width: 50px;
        border: 1px solid dimgray;
    }
    .btn-plus {
        width: 40px;
    }
    .card-title {
        margin-bottom: 0px;
    }
    .loading-spinner {
        width: 7rem;
        height: 7rem;
        position: fixed;
        top: 47%;
        left: 47%;
    }
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
        margin: 0 !important;
    }
    input[type=number] {
        -moz-appearance:textfield; /* Firefox */
    }
</style>