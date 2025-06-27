<template>
  <div class="contact-page">
    <h1 class="contact-title">Contact Us</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>Get in Touch</h2>
        <p>
          We'd love to hear from you! Fill out the form or reach us directly at:
        </p>
        <ul>
          <li><i class="fas fa-envelope"></i> hello@example.com</li>
          <li><i class="fas fa-phone"></i> +1 234 567 8901</li>
          <li>
            <i class="fas fa-map-marker-alt"></i> 123 Main St, City, Country
          </li>
        </ul>
      </div>
      <form class="contact-form" @submit.prevent="submitContact">
        <input
          v-model="contact.name"
          type="text"
          placeholder="Your Name"
          required
        />
        <input
          v-model="contact.email"
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          v-model="contact.message"
          placeholder="Your Message"
          required
        ></textarea>
        <button class="btn btn-primary" type="submit">
          <i class="fas fa-paper-plane"></i> Send Message
        </button>
      </form>
    </div>
    <!-- Bootstrap Alert at Bottom Right -->
    <div
      v-if="showAlert"
      :class="['alert', 'alert-success', 'contact-alert', alertAnimation]"
      role="alert"
    >
      Thank you! We'll get back to you soon.
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

.contact-page {
  margin: 0 auto;
  padding: 2.5rem 1rem;
}

.contact-title {
  text-align: center;
  color: var(--primary, #4361ee);
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

.contact-info,
.contact-form {
  flex: 1 1 380px;
  max-width: 650px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.08);
  padding: 2.5rem 2rem; /* Increased padding for a more spacious look */
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-info h2 {
  color: var(--primary, #4361ee);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
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
  color: var(--primary, #4361ee);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #e0e0e0;
  margin-bottom: 14px;
  border-radius: 8px;
  font-size: 1rem;
  resize: none;
}

.contact-form textarea {
  min-height: 90px;
}

.contact-form button {
  align-self: flex-end;
}

.contact-alert {
  position: fixed;
  bottom: 32px;
  right: 32px;
  min-width: 260px;
  z-index: 9999;
  box-shadow: 0 4px 24px rgba(67, 97, 238, 0.12);
  animation-duration: 0.7s;
}

/* Responsive */
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
