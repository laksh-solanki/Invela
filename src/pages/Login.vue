<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      // Handle login logic here (no PHP)
      alert(`Email: ${this.email}\nPassword: ${this.password}`);
    }
  }
};
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 60px auto;
  padding: 32px 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
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
}
button[type="submit"] {
  width: 100%;
  padding: 10px 0;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
button[type="submit"]:hover {
  background: #1565c0;
}
</style>