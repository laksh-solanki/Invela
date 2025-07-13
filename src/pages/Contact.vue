<template>
  <div class="Contact">
    <div class="contact-page">
      <h1 class="contact-title">Contact Us</h1>
      <div class="contact-content">
        <div class="contact-info card">
          <h2><i class="fa fa-info-circle"></i> Get in Touch</h2>
          <p>
            We'd love to hear from you! Fill out the form or reach us directly
            at:
          </p>
          <ul>
            <li><i class="fa fa-envelope"></i> lakshsolanki848@gmail.com</li>
            <li><i class="fa fa-phone"></i> +91 9033220744</li>
            <li><i class="fa fa-map-marker"></i> 123 Main St, City, Country</li>
          </ul>
          <div class="map-preview">
            <iframe
              title="Google Map"
              width="100%"
              height="160"
              frameborder="0"
              style="border: 0; border-radius: 10px; margin-top: 1rem"
              src="https://maps.google.com/maps?q=123%20Main%20St&t=&z=13&ie=UTF8&iwloc=&output=embed"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <form class="contact-form card" @submit.prevent="submitContact">
          <div class="form-floating-icon">
            <i class="fa fa-user"></i>
            <input
              v-model="contact.name"
              type="text"
              id="name"
              required
              placeholder="Your Name"
            />
            <label for="name">Your Name</label>
          </div>
          <div class="form-floating-icon">
            <i class="fa fa-envelope"></i>
            <input
              v-model="contact.email"
              type="email"
              id="email"
              required
              placeholder="Your Email"
            />
            <label for="email">Your Email</label>
          </div>
          <div class="form-floating-icon">
            <i class="fa fa-comment"></i>
            <textarea
              v-model="contact.message"
              id="message"
              required
              placeholder="Your Message"
              rows="4"
            ></textarea>
            <label for="message">Your Message</label>
          </div>
          <button class="btn btn-primary" type="submit">
            <i class="fa fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
      <!-- Bootstrap Alert at Bottom Right -->
      <div
        v-if="showAlert"
        :class="['alert', 'alert-success', 'contact-alert', alertAnimation]"
        role="alert"
      >
        <i class="fa fa-check-circle"></i> Thank you! We'll get back to you
        soon.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const contact = ref({
  name: "",
  email: "",
  message: "",
});
const showAlert = ref(false);
const alertAnimation = ref("animate__animated animate__fadeInRight");

function submitContact() {
  showAlert.value = true;
  alertAnimation.value = "animate__animated animate__fadeInRight";
  setTimeout(() => {
    alertAnimation.value = "animate__animated animate__fadeOutRight";
    setTimeout(() => {
      showAlert.value = false;
    }, 700); // match animation duration
    contact.value = { name: "", email: "", message: "" };
  }, 3000); // show for 3s, then animate out
}
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css";

.Contact {
  min-height: 100vh;
  background-color: #000000;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.218) 2px,
    transparent 0
  );
  background-size: 30px 30px;
  background-position: -5px -5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contact-page {
  margin: 0 auto;
  padding: 2.5rem 1rem;
  width: 100%;
  max-width: 1100px;
}
.contact-title {
  text-align: center;
  color: #4361ee;
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.contact-content {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.card {
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 15px 15px 30px #000000, -15px -15px 30px #000000;
  padding: 2.5rem 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-info h2 {
  color: #4361ee;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.contact-info ul {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 0 0;
}
.contact-info li {
  margin-bottom: 0.7rem;
  font-size: 1rem;
  color: #222;
  display: flex;
  align-items: center;
  gap: 8px;
}
.contact-info i {
  color: #4361ee;
}
.map-preview {
  margin-top: 1.2rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(67, 97, 238, 0.1);
}
.contact-form {
  gap: 0.5rem;
}
.form-floating-icon {
  position: relative;
  margin-bottom: 1.3rem;
}
.form-floating-icon i {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #bdbdbd;
  font-size: 1.1em;
  z-index: 2;
}
.form-floating-icon input,
.form-floating-icon textarea {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  background: #f9f9f9;
  transition: border 0.2s;
  resize: none;
}
.form-floating-icon input:focus,
.form-floating-icon textarea:focus {
  border: 1.5px solid #4361ee;
  background: #fff;
  outline: none;
}
.form-floating-icon label {
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 1em;
  pointer-events: none;
  transition: 0.2s;
  background: transparent;
}
.form-floating-icon input:not(:placeholder-shown) + label,
.form-floating-icon input:focus + label,
.form-floating-icon textarea:not(:placeholder-shown) + label,
.form-floating-icon textarea:focus + label {
  top: -12px;
  left: 36px;
  font-size: 0.85em;
  color: #4361ee;
  background: #fff;
  padding: 0 4px;
}
.btn {
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 2, 0.6, 1);
  border: none;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary {
  background: #4361ee;
  color: white;
  box-shadow: 0 4px 6px rgba(67, 97, 238, 0.3);
}
.btn-primary:hover {
  background: #2743a6;
  transform: translateY(-3px);
  box-shadow: 0 10px 15px rgba(67, 97, 238, 0.4);
}
.contact-alert {
  position: fixed;
  bottom: 32px;
  right: 32px;
  min-width: 260px;
  z-index: 9999;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.12);
  animation-duration: 0.7s;
  font-size: 1.1em;
  display: flex;
  align-items: center;
  gap: 8px;
}
@media (max-width: 700px) {
  .contact-content {
    flex-direction: column;
    gap: 1.2rem;
  }
  .contact-info,
  .contact-form {
    max-width: 100vw;
    padding: 1.2rem 0.9rem;
  }
  .contact-title {
    font-size: 1.4rem;
  }
  .contact-alert {
    right: 10px;
    left: 10px;
    bottom: 10px;
    min-width: unset;
    max-width: 95vw;
  }
}
</style>
