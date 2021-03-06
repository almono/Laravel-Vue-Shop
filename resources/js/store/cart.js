import axios from 'axios'
import { backendUrl } from '../helpers/backendUrl.js'

const state = {
    cart: []
};

const getters = {
    getCart: (state) => state.cart,
    getCartProductQuantities: (state) => {
        let amount = 0;
        for (var i=0; i < state.cart.length; i++) {
            amount += state.cart[i].quantity
        }
        return amount
    },
    getCartProductTotal: (state) => {
        let total = 0;
        for (var i=0; i < state.cart.length; i++) {
            total += state.cart[i].price * state.cart[i].quantity
        }
        return total
    }
};

const actions = {
    async addProductToCart(context, data) {
        await axios.post(`${backendUrl()}/addToCart`, {
                productId: data.productId,
                quantity: parseInt(data.quantity),
                productName: data.productName,
                productPrice: data.productPrice
        }).then(response => {
            if(response.data.status === 'success') {
                let productFound = false

                // if product is found then just update the quantity
                for (var i=0; i < this.state.cart.cart.length; i++) {
                    if (this.state.cart.cart[i].id === response.data.data.productId) {
                        this.state.cart.cart[i].quantity += parseInt(response.data.data.quantity)
                        productFound = true
                    }
                }

                // if product is not found create new product instance in cart
                if (!productFound) {
                    this.state.cart.cart.push({'id': response.data.data.productId, 'quantity': response.data.data.quantity, 'name': response.data.data.productName, 'price': response.data.data.productPrice});
                }
            }
        }).catch(err => {
            console.log(err)
        })
    }
};

const mutations = {
    setCart: (state, productDetails) => (state.cart = productDetails)
};

export default {
    state,
    getters,
    actions,
    mutations
}