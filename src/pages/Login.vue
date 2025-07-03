<template>
  <div class="Login">
    <div class="login-container">
      <h2>Sign In to Your Account</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group input-icon-group">
          <span class="input-icon">
            <i class="fa fa-envelope"></i>
          </span>
          <input v-model="email" type="email" id="email" placeholder="Email" required />
        </div>
        <div class="form-group input-icon-group">
          <span class="input-icon">
            <i class="fa fa-lock"></i>
          </span>
          <input v-model="password" :type="showPassword ? 'text' : 'password'" id="password" placeholder="Password"
            required />
          <span @click="togglePassword" class="toggle-password" aria-label="Toggle password visibility">
            <i :class="showPassword ? 'fa fa-eye-slash' : 'fa fa-eye'"></i>
          </span>
        </div>
        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe" /> Remember Me
          </label>
          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>
        <button type="submit" class="btn-primary">Login</button>
        <div class="divider"><span>or</span></div>
        <div class="social-login">
          <button type="button" class="btn-social google" @click="onGoogleLogin">
            <i class="fa fa-google"></i> Sign in with Google
          </button>
          <button type="button" class="btn-social facebook" @click="onFacebookLogin">
            <i class="fa fa-facebook"></i> Sign in with Facebook
          </button>
        </div>
      </form>
      <!-- Bootstrap Alert -->
      <transition name="fade">
        <div v-if="showAlert" class="alert alert-success custom-alert" role="alert">
          Logged in as <strong>{{ email }}</strong>! <span class="timer">{{ alertSeconds }}</span>s
        </div>
      </transition>
      <transition name="fade">
        <div v-if="showError" class="alert alert-danger custom-alert" role="alert"
          style="background: #f8d7da; color: #842029">
          {{ errorMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      showAlert: false,
      alertSeconds: 3,
      alertTimer: null,
      alertInterval: null,
      showError: false,
      errorMessage: "",
      rememberMe: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    onSubmit() {
      if (!this.email || !this.password) {
        this.showError = true;
        this.errorMessage = "Please enter both email and password.";
        setTimeout(() => (this.showError = false), 2500);
        return;
      }
      this.showAlert = true;
      this.alertSeconds = 3;
      clearTimeout(this.alertTimer);
      clearInterval(this.alertInterval);
      this.alertInterval = setInterval(() => {
        if (this.alertSeconds > 1) {
          this.alertSeconds--;
        }
      }, 1000);
      this.alertTimer = setTimeout(() => {
        this.showAlert = false;
        clearInterval(this.alertInterval);
      }, 3000);
    },
    onGoogleLogin() {
      // Placeholder for Google login logic
      alert("Google login clicked!");
    },
    onFacebookLogin() {
      // Placeholder for Facebook login logic
      alert("Facebook login clicked!");
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
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

.Login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f6fb;
}

.login-container {
  width: 100%;
  max-width: 400px;
  padding: 36px 28px 32px 28px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  position: relative;
}

h2 {
  text-align: center;
  margin-bottom: 28px;
  font-weight: 700;
  color: #222;
}

.form-group {
  margin-bottom: 18px;
  position: relative;
}

.input-icon-group {
  display: flex;
  align-items: center;
  position: relative;
}

.input-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #bdbdbd;
  font-size: 1.1em;
  z-index: 2;
}

input[type="email"],
input[type="password"],
input[type="text"]#password {
  width: 100%;
  padding: 10px 10px 10px 38px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 1em;
  background: #f9f9f9;
  transition: border 0.2s;
}

input[type="email"]:focus,
input[type="password"]:focus,
input[type="text"]#password:focus {
  border: 1.5px solid #1976d2;
  background: #fff;
  outline: none;
}

.toggle-password {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #bdbdbd;
  font-size: 1.1em;
  z-index: 2;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.remember-me {
  font-size: 0.97em;
  color: #555;
  display: flex;
  align-items: center;
  gap: 6px;
}

.forgot-password {
  font-size: 0.97em;
  color: #1976d2;
  text-decoration: none;
  transition: color 0.2s;
}

.forgot-password:hover {
  color: #0d47a1;
  text-decoration: underline;
}

.btn-primary {
  width: 100%;
  padding: 12px 0;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1.08em;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #1565c0;
}

.divider {
  display: flex;
  align-items: center;
  text-align: center;
  margin: 18px 0 12px 0;
}

.divider span {
  flex: 1;
  border-bottom: 1px solid #e0e0e0;
  margin: 0 10px;
  color: #aaa;
  font-size: 0.95em;
  position: relative;
  top: 2px;
}

.social-login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-social {
  width: 100%;
  padding: 10px 0;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.btn-social.google {
  background: #fff;
  color: #db4437;
  border: 1px solid #db4437;
}

.btn-social.google:hover {
  background: #db4437;
  color: #fff;
}

.btn-social.facebook {
  background: #fff;
  color: #1877f3;
  border: 1px solid #1877f3;
}

.btn-social.facebook:hover {
  background: #1877f3;
  color: #fff;
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
  margin-left: 8px;
}

@media (max-width: 500px) {
  .login-container {
    max-width: 95vw;
    padding: 18px 6vw 18px 6vw;
  }
}
</style>
