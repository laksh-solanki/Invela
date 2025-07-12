<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-brand">
        <i class="fa-brands fa-slack" style="color: #B197FC;"></i>
        <span class="footer-logo">Invela</span>
      </div>
      <ul class="footer-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/services">Services</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div class="footer-social">
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="footer-bottom">
      &copy; {{ new Date().getFullYear() }} My-App. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
// No script needed
</script>

<style scoped>
.footer {
  background: linear-gradient(90deg, #22223b 0%, #4a4e69 100%);
  color: #f2e9e4;
  padding: 2rem 0 0.5rem 0;
  font-size: 1rem;
  position: relative;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 1rem auto;
  padding: 0 1rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 700;
}

.footer-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
}

.footer-links a {
  color: #f2e9e4;
  text-decoration: none;
  transition: color 0.2s;
}

.footer-links a:hover {
  color: #9a8c98;
}

.footer-social {
  display: flex;
  gap: 1.2rem;
}

.footer-social a {
  color: #f2e9e4;
  font-size: 1.3rem;
  transition: color 0.2s;
}

.footer-social a:hover {
  color: #c9ada7;
}

.footer-bottom {
  text-align: center;
  font-size: 0.95rem;
  color: #c9ada7;
  border-top: 1px solid #4a4e69;
  padding-top: 0.5rem;
  margin-top: 1rem;
}

@media (max-width: 700px) {
  .footer-container {
    flex-direction: column;
    gap: 1.5rem;
    align-items: flex-start;
  }

  .footer-links {
    gap: 1rem;
  }

  .footer-social {
    gap: 0.8rem;
  }
}
</style>
