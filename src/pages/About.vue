<template>
  <div class="About futuristic-bg">
    <section class="futuristic-hero animate__animated animate__fadeInDown">
      <div class="futuristic-hero-content">
        <h1>
          <span class="gradient-text">Welcome to the Future</span>
        </h1>
        <p>
          Discover our vision for tomorrow. We blend technology, creativity, and
          innovation to shape a smarter world.
        </p>
        <a href="/Contact" class="futuristic-btn">
          <i class="fa fa-paper-plane"></i> Connect With Us
        </a>
      </div>
      <div class="futuristic-hero-art">
        <img
          src="https://assets-global.website-files.com/5e9aa66fd6b2c51d6b9e3c6b/63e3e2e2b1c1b2b2b2b2b2b2_futuristic-illustration.svg"
          alt="Futuristic Art"
        />
      </div>
    </section>

    <section class="futuristic-cards animate__animated animate__fadeInUp">
      <div class="futuristic-card">
        <div class="card-icon"><i class="fa fa-robot"></i></div>
        <h3>AI Driven</h3>
        <p>
          Harnessing artificial intelligence for smarter solutions and seamless
          automation.
        </p>
      </div>
      <div class="futuristic-card">
        <div class="card-icon"><i class="fa fa-globe"></i></div>
        <h3>Global Impact</h3>
        <p>
          Connecting ideas and people worldwide for a truly borderless
          experience.
        </p>
      </div>
      <div class="futuristic-card">
        <div class="card-icon"><i class="fa fa-cloud"></i></div>
        <h3>Cloud Powered</h3>
        <p>
          Scalable, secure, and always available—our cloud infrastructure powers
          the future.
        </p>
      </div>
      <div class="futuristic-card">
        <div class="card-icon"><i class="fa fa-bolt"></i></div>
        <h3>Instant Innovation</h3>
        <p>
          Rapid prototyping and deployment to keep you ahead in a fast-changing
          world.
        </p>
      </div>
    </section>

    <section
      class="futuristic-timeline animate__animated animate__fadeInUp animate__delay-1s"
    >
      <h2 class="gradient-text">Our Journey to Tomorrow</h2>
      <div class="timeline-steps">
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-year">2025</span>
            <span class="timeline-desc"
              >Quantum computing integration begins.</span
            >
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-year">2027</span>
            <span class="timeline-desc"
              >AI-powered virtual assistants for every user.</span
            >
          </div>
        </div>
        <div class="timeline-step">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <span class="timeline-year">2030</span>
            <span class="timeline-desc">Global smart city network launch.</span>
          </div>
        </div>
      </div>
    </section>

    <section
      class="futuristic-cta animate__animated animate__fadeInUp animate__delay-2s"
    >
      <div class="cta-content">
        <h2>Ready to join the future?</h2>
        <p>
          Be part of our journey and experience the next evolution in digital
          innovation.
        </p>
        <a href="/Contact" class="futuristic-btn-alt">
          <i class="fa fa-arrow-right"></i> Get Started
        </a>
      </div>
    </section>
    <swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }"
      :pagination="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(img, i) in [
          '/src/assets/photo/certificate_page-0001.jpg',
          'https://swiperjs.com/demos/images/nature-2.jpg',
          'https://swiperjs.com/demos/images/nature-3.jpg',
          'https://swiperjs.com/demos/images/nature-4.jpg',
          'https://swiperjs.com/demos/images/nature-5.jpg',
          'https://swiperjs.com/demos/images/nature-6.jpg',
          'https://swiperjs.com/demos/images/nature-7.jpg',
          'https://swiperjs.com/demos/images/nature-8.jpg',
          'https://swiperjs.com/demos/images/nature-9.jpg',
        ]"
        :key="i"
      >
        <img :src="img" @click="openModal(img)" style="cursor: pointer" />
      </swiper-slide>
    </swiper>

    <!-- Modal for full screen image -->
    <div v-if="showModal" class="image-modal" @click.self="closeModal">
      <img :src="modalImg" class="modal-img" />
      <button class="modal-close" @click="closeModal">&times;</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [EffectCoverflow, Pagination];
    const showModal = ref(false);
    const modalImg = ref("");

    function openModal(imgSrc) {
      modalImg.value = imgSrc;
      showModal.value = true;
    }
    function closeModal() {
      showModal.value = false;
      modalImg.value = "";
    }

    return { modules, showModal, modalImg, openModal, closeModal };
  },
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css";

.futuristic-bg {
  background: radial-gradient(ellipse at top left, #1a1a2e 60%, #16213e 100%);
  min-height: 100vh;
  padding-bottom: 3rem;
}

.futuristic-hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem 2rem 2rem 2rem;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.futuristic-hero-content {
  max-width: 500px;
  z-index: 2;
}

.futuristic-hero-content h1 {
  font-size: 2.8rem;
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

.futuristic-hero-content p {
  font-size: 1.18rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
}

.futuristic-btn {
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

.futuristic-btn:hover {
  background: linear-gradient(90deg, #43e97b 0%, #38f9d7 100%);
  color: #16213e;
  transform: translateY(-2px) scale(1.04);
}

.futuristic-hero-art {
  flex: 1;
  min-width: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.futuristic-hero-art img {
  max-width: 380px;
  width: 100%;
  filter: drop-shadow(0 8px 32px #00f2fe55);
  border-radius: 24px;
}

.futuristic-cards {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: 3rem auto 0 auto;
  padding: 0 1rem;
}

.futuristic-card {
  background: linear-gradient(120deg, #23234e 60%, #1a1a2e 100%);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(79, 172, 254, 0.08);
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  color: #e0e0e0;
}

.futuristic-card:hover {
  transform: translateY(-8px) scale(1.04);
  box-shadow: 0 8px 32px #00f2fe33;
}

.card-icon {
  font-size: 2.5em;
  color: #00f2fe;
  margin-bottom: 1rem;
}

.futuristic-card h3 {
  margin: 0.5rem 0 0.2rem 0;
  font-size: 1.18rem;
  color: #4facfe;
  font-weight: 700;
}

.futuristic-card p {
  color: #e0e0e0;
  font-size: 0.98rem;
  margin: 0;
  text-align: center;
}

.futuristic-timeline {
  max-width: 900px;
  margin: 4rem auto 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

.futuristic-timeline h2 {
  font-size: 1.5rem;
  margin-bottom: 2.2rem;
  font-weight: 700;
}

.timeline-steps {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.2rem;
  margin: 0 auto;
  max-width: 420px;
  position: relative;
}

.timeline-step {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  position: relative;
  z-index: 1;
}

.timeline-dot {
  width: 22px;
  height: 22px;
  background: linear-gradient(90deg, #00f2fe 0%, #4facfe 100%);
  border-radius: 50%;
  box-shadow: 0 2px 8px #00f2fe55;
  margin-right: 0.5rem;
  position: relative;
  z-index: 2;
}

.timeline-content {
  text-align: left;
  flex: 1;
  color: #e0e0e0;
  background: #23234e;
  border-radius: 10px;
  padding: 0.7rem 1.2rem;
  font-size: 1.05rem;
  font-weight: 500;
  box-shadow: 0 2px 8px #00f2fe22;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.timeline-year {
  color: #00f2fe;
  font-weight: 700;
  font-size: 1.08rem;
}

.timeline-desc {
  font-size: 0.98rem;
}

.futuristic-cta {
  max-width: 700px;
  margin: 4rem auto 2rem auto;
  padding: 0 1rem;
  text-align: center;
}

.cta-content {
  background: linear-gradient(120deg, #00f2fe 60%, #4facfe 100%);
  color: #16213e;
  border-radius: 18px;
  padding: 2rem 1.2rem;
  box-shadow: 0 4px 24px #00f2fe22;
}

.cta-content h2 {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 0.7rem;
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}

.futuristic-btn-alt {
  background: #23234e;
  color: #00f2fe;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 2.1rem;
  font-weight: 700;
  font-size: 1.08rem;
  box-shadow: 0 4px 16px #00f2fe13;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  text-decoration: none;
  display: inline-block;
}

.futuristic-btn-alt:hover {
  background: #00f2fe;
  color: #23234e;
  transform: translateY(-2px) scale(1.04);
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7); /* transparent dark */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeIn 0.3s;
}

.modal-img {
  max-width: 80vw;
  max-height: 80vh;
  border-radius: 18px;
  box-shadow: 0 8px 32px #00f2fe55;
}

.modal-close {
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 2.5rem;
  color: #fff;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10000;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 900px) {
  .futuristic-hero {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem 1rem 1rem 1rem;
  }

  .futuristic-hero-art img {
    max-width: 260px;
  }

  .futuristic-cards {
    gap: 1rem;
  }

  .futuristic-card {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }

  .timeline-steps {
    max-width: 100vw;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .cta-content {
    padding: 1.5rem 1.2rem;
  }
}

#app {
  height: 100%;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
