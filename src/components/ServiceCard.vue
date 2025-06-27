<template>
  <div class="service-card">
    <img :src="image" alt="Service Image" class="service-image" />
    <h3 class="service-title">{{ title }}</h3>
    <p class="service-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.service-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: #fff;
  transition: transform 0.2s;
}

.service-card:hover {
  transform: scale(1.05);
}

.service-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

.service-title {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}

.service-description {
  color: #666;
}
</style>