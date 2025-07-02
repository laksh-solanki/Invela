<template>
  <Navbar />
  <router-view class="main"/>
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.main{
  width: 100%;
  height: 100%;
}
</style>