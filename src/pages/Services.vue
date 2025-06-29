<template>
  <div class="Services">
    <div class="services-page">
      <h1 class="services-title">Our Services</h1>
      <p class="services-subtitle">
        We offer a wide range of solutions to help your business grow and
        succeed.
      </p>
      <div class="services-grid">
        <div class="service-card">
          <i class="fas fa-laptop-code service-icon"></i>
          <h3>Web Development</h3>
          <p>
            Custom websites and web apps built with the latest technologies for
            performance and scalability.
          </p>
        </div>
        <div class="service-card">
          <i class="fas fa-mobile-alt service-icon"></i>
          <h3>Mobile Apps</h3>
          <p>
            Cross-platform mobile applications for Android and iOS to reach your
            customers everywhere.
          </p>
        </div>
        <div class="service-card">
          <i class="fas fa-paint-brush service-icon"></i>
          <h3>UI/UX Design</h3>
          <p>
            Beautiful, user-friendly interfaces and experiences that delight
            your users and drive engagement.
          </p>
        </div>
        <div class="service-card">
          <i class="fas fa-cloud service-icon"></i>
          <h3>Cloud Solutions</h3>
          <p>
            Scalable cloud infrastructure and DevOps services to keep your
            business running smoothly.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for static UI
</script>

<style scoped>
.services-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  text-align: center;
}

.services-title {
  font-size: 2.5rem;
  color: var(--primary, #4361ee);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.services-subtitle {
  color: #555;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
}

.service-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.08);
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 32px rgba(67, 97, 238, 0.15);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--primary, #4361ee);
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  color: var(--primary, #4361ee);
  font-weight: 600;
}

.service-card p {
  color: #444;
  font-size: 1rem;
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 700px) {
  .services-title {
    font-size: 1.6rem;
  }
  .services-grid {
    gap: 1.2rem;
  }
  .service-card {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
  }
  .service-icon {
    font-size: 2rem;
  }
}
</style>
