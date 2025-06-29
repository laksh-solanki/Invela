<template>
  <div class="Home">
    <main class="container">
      <section class="hero">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-content">
              <h1>Build Amazing Layouts with <span>CSS Grid</span></h1>
              <p>
                Create responsive, modern web designs with our powerful CSS Grid
                system. Perfect for any project from simple websites to complex
                applications.
              </p>
              <div class="hero-buttons">
                <button class="btn btn-primary">
                  <i class="fas fa-rocket"></i> Start Building
                </button>
                <button class="btn btn-outline">
                  <i class="fas fa-play-circle"></i> Watch Demo
                </button>
              </div>
            </div>
            <div class="hero-image">
              <div class="image-container">
                <img
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                  alt="CSS Grid Layout"
                />
              </div>
              <div class="decoration dec-1"></div>
              <div class="decoration dec-2"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".feature-card, .stat-item").forEach((card) => {
    observer.observe(card);
  });
});
</script>

<style scoped>

.btn {
  padding: 12px 24px;
  border-radius: var(--radius);
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  border: none;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-primary {
  background: var(--primary);
  color: white;
  box-shadow: 0 4px 6px rgba(67, 97, 238, 0.3);
}

.btn-primary:hover {
  background: var(--secondary);
  transform: translateY(-3px);
  box-shadow: 0 10px 15px rgba(67, 97, 238, 0.4);
}

.btn-outline {
  background: transparent;
  border: 2px solid var(--primary);
  color: var(--primary);
}

.btn-outline:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-3px);
}

/* Hero Section */
.hero {
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.hero-content {
  animation: fadeInLeft 0.8s ease-out forwards;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  color: var(--dark);
}

.hero-content h1 span {
  color: var(--primary);
  position: relative;
}

.hero-content h1 span::after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  height: 15px;
  background: rgba(67, 97, 238, 0.2);
  z-index: -1;
  border-radius: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.hero-image {
  position: relative;
  animation: fadeInRight 0.8s ease-out forwards;
}

.image-container {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transform: perspective(1000px) rotateY(-5deg);
  transition: var(--transition);
}

.image-container:hover {
  transform: perspective(1000px) rotateY(0deg);
}

.image-container img {
  width: 100%;
  height: auto;
  display: block;
}

.decoration {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--primary));
  opacity: 0.1;
  z-index: -1;
}

.dec-1 {
  top: -50px;
  left: -50px;
  animation: float 6s ease-in-out infinite;
}

.dec-2 {
  bottom: -80px;
  right: -50px;
  width: 250px;
  height: 250px;
  animation: float 8s ease-in-out infinite;
  animation-delay: 1s;
}
</style>
