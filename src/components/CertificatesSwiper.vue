<template>
  <div class="certificates-swiper">
    <!-- Swiper container -->
    <swiper
      :modules="modules"
      :effect="'creative'"
      :creativeEffect="creativeEffect"
      :grabCursor="true"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :keyboard="{ enabled: true }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      class="swiper-container"
    >
      <swiper-slide v-for="(cert, index) in certificates" :key="index">
        <div class="certificate-card" @click="openModal(cert.image)">
          <img
            :src="cert.image"
            :alt="cert.title"
            class="certificate-image"
            @click="openModal(cert.image)"
            style="cursor: pointer"
          />
          <div class="certificate-overlay">
            <h3 class="certificate-title">{{ cert.title }}</h3>
            <p class="certificate-issuer">{{ cert.issuer }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Navigation buttons -->
    <div class="swiper-navigation">
      <button class="swiper-button-prev"></button>
      <div class="swiper-pagination"></div>
      <button class="swiper-button-next"></button>
    </div>

    <!-- Modal for full screen image -->
    <transition name="fade">
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <img :src="selectedImage" alt="Certificate Full View" />
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectCreative, Keyboard, Navigation } from "swiper/modules"; // Add Navigation
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation"; // Import navigation styles
import { ref } from "vue";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const creativeEffect = {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    };

    const showModal = ref(false);
    const selectedImage = ref("");
    function openModal(image) {
      selectedImage.value = image;
      showModal.value = true;
    }
    function closeModal() {
      showModal.value = false;
      selectedImage.value = "";
    }

    return {
      modules: [Autoplay, EffectCreative, Keyboard, Navigation], // Add Navigation
      creativeEffect,
      certificates: [
        {
          image: "/photo/certificate-01.jpg",
          title: "AI Master Class",
          issuer: "AI Academy",
        },
        {
          image: "/photo/certificate-02.jpg",
          title: "Front End Development ",
          issuer: "FrontEnd Masters",
        },
        // Add more certificates
      ],
      showModal,
      selectedImage,
      openModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.certificates-swiper {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.swiper-container {
  height: 560px;
  width: 100%;
}

.certificate-card {
  position: relative;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
  transform: scale(0.95);
  transition: transform 0.5s ease;
}

.certificate-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.certificate-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 30px 20px 20px;
  color: white;
  transform: translateY(100px);
  transition: transform 0.5s ease;
}

.certificate-title {
  font-size: 1.5rem;
  margin-bottom: 5px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease 0.2s;
}

.certificate-issuer {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease 0.3s;
}

/* Hover and active state animations */
.swiper-slide-active .certificate-card {
  transform: scale(1);
}

.swiper-slide-active .certificate-overlay {
  transform: translateY(0);
}

.swiper-slide-active .certificate-title,
.swiper-slide-active .certificate-issuer {
  opacity: 1;
  transform: translateY(0);
}

/* Navigation styles */
.swiper-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.swiper-button-prev,
.swiper-button-next {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #4f46e5;
  color: white;
  border: none;
  position: relative;
  cursor: pointer;
  margin: 0 15px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.swiper-button-prev::after,
.swiper-button-next::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  border-top: 3px solid white;
  border-right: 3px solid white;
}

.swiper-button-prev::after {
  transform: rotate(-135deg);
  left: 19px;
}

.swiper-button-next::after {
  transform: rotate(45deg);
  left: 15px;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  transform: scale(1.1);
  background: #6366f1;
}

.swiper-pagination {
  position: relative;
  width: auto;
  bottom: auto;
  color: #4f46e5;
  font-weight: bold;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(1px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content img {
  max-width: 90vw;
  max-height: 80vh;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s;
}

.close-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

@media (max-width: 900px) {
  .certificate-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
}
</style>
