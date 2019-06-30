<template>
    <div>
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

    export default {
        name: 'App',
        components: {
            Navbar,
            Footer
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
</style>