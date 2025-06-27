<template>
  <div class="card" :style="{ backgroundColor: color }">
    <h2>{{ title }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>

<script setup>
defineProps(['title', 'desc', 'color'])
</script>

<style scoped>
.card {
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-6px);
}

.card h2 {
  margin-bottom: 1.7rem;
}

.card p {
  margin: 0;
}
</style>
