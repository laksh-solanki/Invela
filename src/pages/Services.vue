<template>
  <div class="Services">
    <div class="services-hero">
      <div class="services-hero-bg"></div>
      <div class="services-hero-content animate__animated animate__fadeInDown">
        <h1 class="services-title">Our Services</h1>
        <p class="services-subtitle">
          We offer a wide range of solutions to help your business grow and succeed.
        </p>
        <button class="cta-btn">
          <i class="fa fa-envelope"></i> Get a Free Consultation
        </button>
      </div>
    </div>
    <div class="services-page animate__animated animate__fadeInUp">
      <div class="services-grid-glass">
        <div class="service-card-glass">
          <span class="service-icon-bg"><i class="fa fa-laptop-code"></i></span>
          <h3>Web Development</h3>
          <p>
            Custom websites and web apps built with the latest technologies for
            performance and scalability.
          </p>
        </div>
        <div class="service-card-glass">
          <span class="service-icon-bg"><i class="fa fa-mobile"></i></span>
          <h3>Mobile Apps</h3>
          <p>
            Cross-platform mobile applications for Android and iOS to reach your
            customers everywhere.
          </p>
        </div>
        <div class="service-card-glass">
          <span class="service-icon-bg"><i class="fa fa-paint-brush"></i></span>
          <h3>UI/UX Design</h3>
          <p>
            Beautiful, user-friendly interfaces and experiences that delight
            your users and drive engagement.
          </p>
        </div>
        <div class="service-card-glass">
          <span class="service-icon-bg"><i class="fa fa-cloud"></i></span>
          <h3>Cloud Solutions</h3>
          <p>
            Scalable cloud infrastructure and DevOps services to keep your
            business running smoothly.
          </p>
        </div>
      </div>
      <div class="why-choose animate__animated animate__fadeInUp animate__delay-1s">
        <h2>Why Choose Us?</h2>
        <div class="choose-features">
          <div class="choose-feature">
            <i class="fa fa-star"></i>
            <h4>Proven Expertise</h4>
            <p>Our team brings years of experience and a track record of success.</p>
          </div>
          <div class="choose-feature">
            <i class="fa fa-bolt"></i>
            <h4>Fast Delivery</h4>
            <p>We deliver high-quality solutions on time, every time.</p>
          </div>
          <div class="choose-feature">
            <i class="fa fa-thumbs-up"></i>
            <h4>Client Satisfaction</h4>
            <p>We prioritize your needs and ensure you're delighted with the results.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script needed for static UI
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css";

.Services {
  min-height: 100vh;
  background: #f7f8fa;
}
.services-hero {
  position: relative;
  background: linear-gradient(120deg, #4361ee 60%, #4cc9f0 100%);
  color: #fff;
  padding: 3.5rem 1rem 2.5rem 1rem;
  text-align: center;
  overflow: hidden;
}
.services-hero-bg {
  background: url('https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
  opacity: 0.16;
  position: absolute;
  inset: 0;
  z-index: 0;
}
.services-hero-content {
  position: relative;
  z-index: 1;
}
.services-title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 0.5rem;
  font-weight: 800;
  letter-spacing: 1px;
}
.services-subtitle {
  color: #e0e7ff;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  opacity: 0.97;
}
.cta-btn {
  background: #ffbe0b;
  color: #222;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 2.1rem;
  font-weight: 700;
  font-size: 1.08rem;
  box-shadow: 0 4px 16px rgba(255, 190, 11, 0.13);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  margin-top: 1rem;
}
.cta-btn:hover {
  background: #ffd60a;
  color: #4361ee;
  transform: translateY(-2px) scale(1.04);
}
.services-page {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  text-align: center;
}
.services-grid-glass {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.2rem;
  margin-bottom: 2.5rem;
}
.service-card-glass {
  background: rgba(255,255,255,0.85);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(67, 97, 238, 0.13);
  padding: 2.2rem 1.2rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  backdrop-filter: blur(2.5px);
}
.service-card-glass:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 12px 36px rgba(67, 97, 238, 0.18);
  background: rgba(255,255,255,0.97);
}
.service-icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4361ee 60%, #4cc9f0 100%);
  color: #fff;
  font-size: 2.2rem;
  margin-bottom: 1.1rem;
  box-shadow: 0 2px 8px rgba(67, 97, 238, 0.13);
}
.service-card-glass h3 {
  font-size: 1.25rem;
  margin-bottom: 0.7rem;
  color: #4361ee;
  font-weight: 700;
}
.service-card-glass p {
  color: #444;
  font-size: 1rem;
  margin: 0;
}
.why-choose {
  margin-top: 2.5rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.08);
  padding: 2.2rem 1.2rem 1.2rem 1.2rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.why-choose h2 {
  color: #4361ee;
  font-size: 1.4rem;
  margin-bottom: 1.7rem;
  font-weight: 700;
}
.choose-features {
  display: flex;
  gap: 2.2rem;
  justify-content: center;
  flex-wrap: wrap;
}
.choose-feature {
  background: #f4f6fb;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(67, 97, 238, 0.06);
  padding: 1.2rem 1rem 1rem 1rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.choose-feature i {
  font-size: 1.7rem;
  color: #ffbe0b;
  margin-bottom: 0.7rem;
}
.choose-feature h4 {
  margin-bottom: 0.5rem;
  color: #4361ee;
  font-size: 1.08rem;
  font-weight: 700;
}
.choose-feature p {
  color: #444;
  font-size: 0.98rem;
  margin: 0;
}
@media (max-width: 900px) {
  .services-page {
    width: 100vw;
    padding: 1.2rem 0.5rem;
  }
  .services-grid-glass {
    gap: 1.2rem;
  }
  .why-choose {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
  }
}
@media (max-width: 700px) {
  .services-title {
    font-size: 1.6rem;
  }
  .services-grid-glass {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
  .service-card-glass {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
  }
  .service-icon-bg {
    font-size: 1.5rem;
    width: 48px;
    height: 48px;
  }
  .choose-features {
    flex-direction: column;
    gap: 1.2rem;
  }
  .choose-feature {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }
}
</style>
