<template>
  <div id="app">
    <app-navbar></app-navbar>
    <app-products></app-products>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./Navbar"
import Products from "./Products"
export default {
    name: "Home",
    components: {
        appNavbar: Navbar,
        appProducts: Products
    },
    data() {
        return{

        }
    }
}
</script>
