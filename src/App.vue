<template>
  <Navbar />
  <router-view class="mt-6"/>
  <Footer />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<style scoped>
.mt-6{
  margin-top: 5%;
}
</style>