<template>
  <div class="Services futuristic-bg">
    <section class="services-hero animate__animated animate__fadeInDown">
      <div class="services-hero-content">
        <h1 class="gradient-text">Our Futuristic Services</h1>
        <p>
          Empowering your business with innovation, technology, and creative
          solutions for tomorrow.
        </p>
        <a href="/Contact" class="cta-btn-alt">
          <i class="fa fa-paper-plane"></i> Get a Free Consultation
        </a>
      </div>
      <div class="services-hero-art">
        <img
          src="https://assets-global.website-files.com/5e9aa66fd6b2c51d6b9e3c6b/63e3e2e2b1c1b2b2b2b2b2b2_futuristic-illustration.svg"
          alt="Futuristic Art"
        />
      </div>
    </section>

    <!-- Futuristic horizontal slider for featured services -->
    <section
      class="services-slider-section animate__animated animate__fadeInUp"
    >
      <h2 class="gradient-text">Featured Services</h2>
      <div class="services-slider-custom">
        <div
          class="service-card-custom"
          v-for="(service, i) in featuredServices"
          :key="i"
        >
          <div class="service-icon-custom"><i :class="service.icon"></i></div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Glass grid for all services -->
    <section
      class="services-grid-section animate__animated animate__fadeInUp animate__delay-1s"
    >
      <h2 class="gradient-text">All Our Services</h2>
      <div class="services-grid-glass">
        <div
          class="service-card-glass"
          v-for="(service, i) in allServices"
          :key="i"
        >
          <span class="service-icon-bg"><i :class="service.icon"></i></span>
          <h3>{{ service.title }}</h3>
          <p>{{ service.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Why Choose Us section -->
    <section
      class="why-choose animate__animated animate__fadeInUp animate__delay-2s"
    >
      <h2 class="gradient-text">Why Choose Us?</h2>
      <div class="choose-features">
        <div
          class="choose-feature"
          v-for="(feature, i) in chooseFeatures"
          :key="i"
        >
          <i :class="feature.icon"></i>
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuredServices = [
  {
    icon: "fa fa-laptop-code",
    title: "Web Development",
    desc: "Next-gen websites and web apps for performance and scalability.",
  },
  {
    icon: "fa fa-mobile",
    title: "Mobile Apps",
    desc: "Cross-platform mobile solutions for Android and iOS.",
  },
  {
    icon: "fa fa-paint-brush",
    title: "UI/UX Design",
    desc: "Beautiful, user-friendly interfaces and experiences.",
  },
  {
    icon: "fa fa-cloud",
    title: "Cloud Solutions",
    desc: "Scalable cloud infrastructure and DevOps services.",
  },
];

const allServices = [
  ...featuredServices,
  {
    icon: "fa fa-robot",
    title: "AI & Automation",
    desc: "Smart automation and AI-powered business solutions.",
  },
  {
    icon: "fa fa-shield-alt",
    title: "Cybersecurity",
    desc: "Protect your data and systems with advanced security.",
  },
  {
    icon: "fa fa-chart-line",
    title: "Digital Marketing",
    desc: "Grow your brand with data-driven marketing strategies.",
  },
  {
    icon: "fa fa-database",
    title: "Data Analytics",
    desc: "Unlock insights and drive decisions with analytics.",
  },
];

const chooseFeatures = [
  {
    icon: "fa fa-star",
    title: "Proven Expertise",
    desc: "Years of experience and a track record of success.",
  },
  {
    icon: "fa fa-bolt",
    title: "Fast Delivery",
    desc: "High-quality solutions delivered on time.",
  },
  {
    icon: "fa fa-thumbs-up",
    title: "Client Satisfaction",
    desc: "Your needs are our top priority.",
  },
  {
    icon: "fa fa-lightbulb-o",
    title: "Innovation",
    desc: "Creative ideas and cutting-edge technology.",
  },
];
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css";

.futuristic-bg {
  background: radial-gradient(ellipse at top left, #161616 60%, #23234e 100%);
  min-height: 100vh;
  padding-bottom: 3rem;
}
.services-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}
.services-hero-content {
  max-width: 500px;
  z-index: 2;
}
.services-hero-content h1 {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 1.2rem;
  letter-spacing: 2px;
}
.gradient-text {
  background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.services-hero-content p {
  font-size: 1.18rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
}
.cta-btn-alt {
  background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
  color: #222;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 2.1rem;
  font-weight: 700;
  font-size: 1.08rem;
  box-shadow: 0 4px 16px rgba(79, 172, 254, 0.13);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  margin-top: 1rem;
  text-decoration: none;
  display: inline-block;
}
.cta-btn-alt:hover {
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  color: #16213e;
  transform: translateY(-2px) scale(1.04);
}
.services-hero-art {
  flex: 1;
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.services-hero-art img {
  max-width: 380px;
  width: 100%;
  filter: drop-shadow(0 8px 32px #00f2fe55);
  border-radius: 24px;
}

/* Futuristic horizontal slider */
.services-slider-section {
  max-width: 1100px;
  margin: 3rem auto 0 auto;
  padding: 0 1rem;
  text-align: center;
}
.services-slider-section h2 {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  font-weight: 800;
}
.services-slider-custom {
  display: flex;
  gap: 2.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  scrollbar-color: #00f2fe #23234e;
}
.service-card-custom {
  min-width: 260px;
  max-width: 280px;
  background: linear-gradient(120deg, #23234e 60%, #1a1a2e 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px #00f2fe22;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  scroll-snap-align: center;
  color: #e0e0e0;
}
.service-card-custom:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px #00f2fe33;
}
.service-icon-custom {
  font-size: 2.2em;
  color: #00f2fe;
  margin-bottom: 1rem;
  background: #23234e;
  border-radius: 50%;
  width: 54px;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px #00f2fe22;
}
.service-card-custom h3 {
  margin: 0.5rem 0 0.2rem 0;
  font-size: 1.18rem;
  color: #4facfe;
  font-weight: 700;
}
.service-card-custom p {
  color: #e0e0e0;
  font-size: 0.98rem;
  margin: 0;
  text-align: center;
}

/* Glass grid for all services */
.services-grid-section {
  max-width: 1100px;
  margin: 3rem auto 0 auto;
  padding: 0 1rem;
  text-align: center;
}
.services-grid-section h2 {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  font-weight: 800;
}
.services-grid-glass {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.2rem;
  margin-bottom: 2.5rem;
}
.service-card-glass {
  background: rgba(255, 255, 255, 0.85);
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
  background: rgba(255, 255, 255, 0.97);
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

/* Why Choose Us section */
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
  padding: 1.3rem;
}
.choose-feature {
  background: #e8e8e9;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(67, 97, 238, 0.06);
  padding: 1.2rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}
.choose-feature:hover {
  margin-top: -2px;
  box-shadow: none;
  background-color: #e0e7ff;
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
  .services-hero {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem 1rem 1rem 1rem;
  }
  .services-hero-art img {
    max-width: 260px;
  }
  .services-slider-custom {
    gap: 1rem;
  }
  .service-card-custom {
    min-width: 180px;
    max-width: 220px;
    padding: 0.5rem;
  }
  .services-grid-glass {
    gap: 1.2rem;
  }
  .why-choose {
    padding: 1.2rem 0.7rem 1rem 0.7rem;
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
