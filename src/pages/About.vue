<template>
  <div class="about-hero">
    <div class="about-hero-content">
      <h1>Meet Our Team</h1>
      <p>
        We are a creative group of developers and designers passionate about
        building impactful digital experiences.
      </p>
    </div>
  </div>

  <section class="about-team">
    <h2>Who We Are</h2>
    <div class="team-grid">
      <div class="team-member">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Alex" />
        <h3>Alex Johnson</h3>
        <span>Lead Developer</span>
      </div>
      <div class="team-member">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Sara"
        />
        <h3>Sara Lee</h3>
        <span>UI/UX Designer</span>
      </div>
      <div class="team-member">
        <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Mike" />
        <h3>Mike Brown</h3>
        <span>Cloud Engineer</span>
      </div>
    </div>
  </section>

  <section class="about-values">
    <h2>Our Values</h2>
    <div class="values-grid">
      <div class="value-card">
        <i class="fas fa-lightbulb"></i>
        <h4>Innovation</h4>
        <p>
          We embrace new ideas and technologies to deliver the best solutions.
        </p>
      </div>
      <div class="value-card">
        <i class="fas fa-users"></i>
        <h4>Teamwork</h4>
        <p>
          Collaboration and communication are at the heart of everything we do.
        </p>
      </div>
      <div class="value-card">
        <i class="fas fa-heart"></i>
        <h4>Passion</h4>
        <p>
          We love what we do and strive to make a difference for our clients.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.about-hero {
  background: linear-gradient(90deg, #4361ee 60%, #4cc9f0 100%);
  color: #fff;
  padding: 3rem 1rem 2rem 1rem;
  text-align: center;
}

.about-hero-content h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.7rem;
}

.about-hero-content p {
  font-size: 1.15rem;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0.95;
}

.about-team {
  max-width: 900px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
  text-align: center;
}

.about-team h2 {
  color: var(--primary, #4361ee);
  font-size: 1.7rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.team-grid {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.team-member {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.08);
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-member:hover {
  transform: translateY(-8px) scale(1.03);
  box-shadow: 0 8px 32px rgba(67, 97, 238, 0.15);
}

.team-member img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid var(--primary, #4361ee);
}

.team-member h3 {
  margin: 0.5rem 0 0.2rem 0;
  font-size: 1.15rem;
  color: #222;
  font-weight: 600;
}

.team-member span {
  color: #4361ee;
  font-size: 0.98rem;
  font-weight: 500;
}

.about-values {
  max-width: 900px;
  margin: 3rem auto 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

.about-values h2 {
  color: var(--primary, #4361ee);
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 600;
}

.values-grid {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.value-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.08);
  padding: 1.5rem 1rem 1.2rem 1rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.value-card i {
  font-size: 2rem;
  color: #ffc107;
  margin-bottom: 0.7rem;
}

.value-card h4 {
  margin-bottom: 0.5rem;
  color: #4361ee;
  font-size: 1.1rem;
  font-weight: 600;
}

.value-card p {
  color: #444;
  font-size: 0.98rem;
  margin: 0;
}

/* Responsive styles */
@media (max-width: 700px) {
  .about-hero-content h1 {
    font-size: 1.5rem;
  }
  .about-hero-content p {
    font-size: 1rem;
  }
  .team-grid,
  .values-grid {
    flex-direction: column;
    gap: 1.2rem;
  }
  .team-member,
  .value-card {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }
}
</style>
