<template>
  <div class="signin">
    <div class="signin-container">
      <h2>Sign Up</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" required />
        </div>
        <div class="form-group">
          <label for="password">Choose Password</label>
          <div style="position: relative">
            <input
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              id="password"
              required
              minlength="6"
            />
            <span
              @click="togglePassword"
              style="
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
              "
              aria-label="Toggle password visibility"
            >
              <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
            </span>
          </div>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <div style="position: relative">
            <input
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              id="confirmPassword"
              required
              minlength="6"
            />
            <span
              @click="toggleConfirmPassword"
              style="
                position: absolute;
                right: 8px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
              "
              aria-label="Toggle confirm password visibility"
            >
              <i
                :class="showConfirmPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"
              ></i>
            </span>
          </div>
        </div>
        <div class="form-group agreement">
          <input v-model="agreed" type="checkbox" id="agreement" required />
          <label for="agreement" class="agreement-label">
            I agree to the <a href="#" target="_blank">Terms & Conditions</a>
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <!-- Bootstrap Alert -->
      <transition name="fade">
        <div
          v-if="showAlert"
          class="alert alert-success custom-alert"
          role="alert"
        >
          Signed up as <strong>{{ email }}</strong
          >! <span class="timer">{{ alertSeconds }}</span
          >s
        </div>
      </transition>
      <transition name="fade">
        <div
          v-if="showError"
          class="alert alert-danger custom-alert"
          role="alert"
          style="background: #f8d7da; color: #842029"
        >
          {{ errorMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      agreed: false,
      showPassword: false,
      showConfirmPassword: false,
      showAlert: false,
      alertSeconds: 3,
      alertTimer: null,
      alertInterval: null,
      showError: false,
      errorMessage: "",
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    toggleConfirmPassword() {
      this.showConfirmPassword = !this.showConfirmPassword;
    },
    onSubmit() {
      // Validation
      if (this.password !== this.confirmPassword) {
        this.showError = true;
        this.errorMessage = "Passwords do not match!";
        setTimeout(() => (this.showError = false), 2500);
        return;
      }
      if (!this.agreed) {
        this.showError = true;
        this.errorMessage = "You must agree to the Terms & Conditions.";
        setTimeout(() => (this.showError = false), 2500);
        return;
      }

      this.showAlert = true;
      this.alertSeconds = 3;

      // Clear any previous timers
      clearTimeout(this.alertTimer);
      clearInterval(this.alertInterval);

      // Countdown for alert
      this.alertInterval = setInterval(() => {
        if (this.alertSeconds > 1) {
          this.alertSeconds--;
        }
      }, 1000);

      // Hide alert after 3 seconds
      this.alertTimer = setTimeout(() => {
        this.showAlert = false;
        clearInterval(this.alertInterval);
      }, 3000);
    },
  },
  beforeDestroy() {
    clearTimeout(this.alertTimer);
    clearInterval(this.alertInterval);
  },
};
</script>

<style scoped>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";

input[type="password"],
input[type="text"]#password,
input[type="text"]#confirmPassword,
input[type="password"]#confirmPassword {
  width: 100%;
  padding: 8px 10px;
  padding-right: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: medium;
  box-sizing: border-box;
}

.signin {
  height: 546px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signin-container {
  width: 400px;
  padding: 32px 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
}
h2 {
  text-align: center;
  margin-bottom: 24px;
}
.form-group {
  margin-bottom: 18px;
}
label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
}
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: medium;
}
.agreement {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}
.agreement-label {
  margin-left: 8px;
  font-weight: 400;
  font-size: 0.97em;
}
button[type="submit"] {
  width: 100%;
  padding: 10px 0;
  background: #388e3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
button[type="submit"]:hover {
  background: #357a38;
}

/* Bootstrap alert custom position and animation */
.custom-alert {
  position: fixed;
  bottom: 32px;
  right: 32px;
  min-width: 260px;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s, transform 0.5s;
  animation: slideIn 0.5s;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.timer {
  font-weight: bold;
  margin-left: 4px;
}
</style>
