<template>
    <div>
        <transition name="fade">
            <div v-if="getResponse.message" v-bind:class="{'success-response' : (getResponse.status == 'Success'), 'error-response' : (getResponse.status == 'Error')}" class="response-popup">
                <p v-bind:class="{'form-success' : (getResponse.status == 'Success'), 'form-error' : (getResponse.status == 'Error')}">{{ getResponse.message }}</p>
            </div>
        </transition>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters(['getResponse']),
        }
    }
</script>

<style>
    .response-popup {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 600px;
        height: 50px;
        left: 50%;
        bottom: 100px;
        transform: translateX(-50%);
        z-index: 5;
        max-width: 100vw;
        margin-bottom: 0px;
        padding: 10px;
        border-radius: 5px;
    }
    .response-popup > p {
        color: white;
        font-weight: 600;
        margin-bottom: 0px;
    }
    .success-response {
        border: 3px solid #31a060;
        background-color: #3ab572;
    }
    .error-response {
        border: 3px solid #bd4444;
        background-color: indianred;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
