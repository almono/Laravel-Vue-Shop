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
</style>