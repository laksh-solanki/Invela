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
          <div class="card-social">
            <span>Social</span>
            <a class="social-link" href="#">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 461.001 461.001"
                xml:space="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      style="fill: #f61c0d"
                      d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
            <a class="social-link" href="https://github.com/laksh-solanki">
              <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            class="h-8 w-8 text-dark"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            ></path>
          </svg>
            </a>
            <a class="social-link" href="#">
              <svg
                viewBox="0 -28.5 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path
                      d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                      fill="#5865F2"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
            <a class="social-link" href="#">
              <svg
                fill="#000000"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M488.1 414.7V303.4L300.9 428l83.6 55.8zm254.1 137.7v-79.8l-59.8 39.9zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm278 533c0 1.1-.1 2.1-.2 3.1 0 .4-.1.7-.2 1a14.16 14.16 0 0 1-.8 3.2c-.2.6-.4 1.2-.6 1.7-.2.4-.4.8-.5 1.2-.3.5-.5 1.1-.8 1.6-.2.4-.4.7-.7 1.1-.3.5-.7 1-1 1.5-.3.4-.5.7-.8 1-.4.4-.8.9-1.2 1.3-.3.3-.6.6-1 .9-.4.4-.9.8-1.4 1.1-.4.3-.7.6-1.1.8-.1.1-.3.2-.4.3L525.2 786c-4 2.7-8.6 4-13.2 4-4.7 0-9.3-1.4-13.3-4L244.6 616.9c-.1-.1-.3-.2-.4-.3l-1.1-.8c-.5-.4-.9-.7-1.3-1.1-.3-.3-.6-.6-1-.9-.4-.4-.8-.8-1.2-1.3a7 7 0 0 1-.8-1c-.4-.5-.7-1-1-1.5-.2-.4-.5-.7-.7-1.1-.3-.5-.6-1.1-.8-1.6-.2-.4-.4-.8-.5-1.2-.2-.6-.4-1.2-.6-1.7-.1-.4-.3-.8-.4-1.2-.2-.7-.3-1.3-.4-2-.1-.3-.1-.7-.2-1-.1-1-.2-2.1-.2-3.1V427.9c0-1 .1-2.1.2-3.1.1-.3.1-.7.2-1a14.16 14.16 0 0 1 .8-3.2c.2-.6.4-1.2.6-1.7.2-.4.4-.8.5-1.2.2-.5.5-1.1.8-1.6.2-.4.4-.7.7-1.1.6-.9 1.2-1.7 1.8-2.5.4-.4.8-.9 1.2-1.3.3-.3.6-.6 1-.9.4-.4.9-.8 1.3-1.1.4-.3.7-.6 1.1-.8.1-.1.3-.2.4-.3L498.7 239c8-5.3 18.5-5.3 26.5 0l254.1 169.1c.1.1.3.2.4.3l1.1.8 1.4 1.1c.3.3.6.6 1 .9.4.4.8.8 1.2 1.3.7.8 1.3 1.6 1.8 2.5.2.4.5.7.7 1.1.3.5.6 1 .8 1.6.2.4.4.8.5 1.2.2.6.4 1.2.6 1.7.1.4.3.8.4 1.2.2.7.3 1.3.4 2 .1.3.1.7.2 1 .1 1 .2 2.1.2 3.1V597zm-254.1 13.3v111.3L723.1 597l-83.6-55.8zM281.8 472.6v79.8l59.8-39.9zM512 456.1l-84.5 56.4 84.5 56.4 84.5-56.4zM723.1 428L535.9 303.4v111.3l103.6 69.1zM384.5 541.2L300.9 597l187.2 124.6V610.3l-103.6-69.1z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
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

.card-social svg {
  height: 25px;
}

.card-social {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e7e7e7;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  height: 50px;
  border-radius: 10px;
  margin-top: 1.5rem;
  width: 235px;
}

.card-social::before,
.card-social::after {
  position: absolute;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  transition: 0.25s linear;
  z-index: 1;
}

.card-social::before {
  content: "";
  left: 0;
  justify-content: flex-end;
  background-color: #4d60b6;
}

.card-social::after {
  content: "";
  right: 0;
  justify-content: flex-start;
  background-color: #4453a6;
}

.card-social:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.card-social:hover span {
  opacity: 0;
  z-index: -3;
}

.card-social:hover::before {
  opacity: 0.5;
  transform: translateY(-100%);
}

.card-social:hover::after {
  opacity: 0.5;
  transform: translateY(100%);
}

.card-social span {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: whitesmoke;
  font-family: "Fira Mono", monospace;
  font-size: 24px;
  font-weight: 700;
  opacity: 1;
  transition: opacity 0.25s;
  z-index: 2;
}

.card-social .social-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
  height: 100%;
  color: whitesmoke;
  font-size: 24px;
  text-decoration: none;
  transition: 0.25s;
}

.card-social .social-link svg {
  text-shadow: 1px 1px rgba(31, 74, 121, 0.7);
  transform: scale(1);
}

.card-social .social-link:hover {
  background-color: rgba(249, 244, 255, 0.774);
  animation: bounce_613 0.4s linear;
}

@keyframes bounce_613 {
  40% {
    transform: scale(1.4);
  }

  60% {
    transform: scale(0.8);
  }

  80% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
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
