<template>
    <div id="content">
        <Navbar></Navbar>
        <ResponseInfo></ResponseInfo>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import ResponseInfo from '../components/ResponseInfo.vue'

    export default {
        name: 'App',
        components: {
            Navbar,
            Footer,
            ResponseInfo
        }
    }
</script>

<style>
    body {
        padding-top: 50px;
        padding-bottom: 50px;
    }
    .padding-fix {
        padding-left: 0px;
        padding-right: 0px;
    }
    .bt-1 {
        border-top: 1px solid #dee2e6;
    }
    .bb-1 {
        border-bottom: 1px solid #dee2e6;
    }
    .bl-1 {
        border-left: 1px solid #dee2e6;
    }
    .br-1 {
        border-right: 1px solid #dee2e6;
    }
    .ba-1 {
        border: 1px solid #dee2e6;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition-duration: .3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    .img-responsive {
        max-width: 100%;
        max-height: 100%;
    }
</style>