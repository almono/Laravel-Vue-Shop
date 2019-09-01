<template>
    <div style="width: 100%;">
        <div class="filters-div">
            <b-form inline>
                <b-input id="product-name" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Name..."></b-input>
                <b-input id="sort-order" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Name..."></b-input>

                <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0" v-model="form.inStock">Only in stock</b-form-checkbox>

                <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                    <b-form-select
                            id="input-3"
                            v-model="form.orderBy"
                            :options="orderBy"
                            required
                    ></b-form-select>
                </b-form-group>

                <b-button variant="primary">Sort</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ProductFilters',
        data() {
            return {
                form: {
                    orderBy: null,
                    inStock: false
                },
                orderBy: [{ text: 'Order by', value: null }, 'Value ASC', 'Value DESC', 'Price ASC', 'Price DESC'],
                show: true
            }
        }
    }
</script>

<style scoped>
    .filters-div {
        width: 100%;
    }
</style>