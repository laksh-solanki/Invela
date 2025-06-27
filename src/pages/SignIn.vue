<!-- filepath: c:\Users\Hitesh\3D Objects\newly\my-app\src\components\SignIn.vue -->
<template>
  <div class="signin-container">
    <el-card class="signin-card" shadow="hover">
      <section>
        <h2 class="signin-title">Sign In</h2>
        <el-form
          :model="form"
          :rules="rules"
          ref="formRef"
          label-position="top"
        >
          <el-form-item label="Email" prop="email">
            <el-input v-model="form.email" placeholder="Enter your email" />
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="Enter your password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" style="width: 100%"
              >Sign In</el-button
            >
          </el-form-item>
        </el-form>
        <div class="signin-content">
          <el-divider />
          <p>
            Welcome back! Please sign in to access your account and explore new
            features.
          </p>
        </div>
      </section>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const formRef = ref();
const form = reactive({
  email: "",
  password: "",
});

const rules = {
  email: [
    { required: true, message: "Email is required", trigger: "blur" },
    {
      type: "email",
      message: "Please enter a valid email",
      trigger: ["blur", "change"],
    },
  ],
  password: [
    { required: true, message: "Password is required", trigger: "blur" },
    {
      min: 6,
      message: "Password must be at least 6 characters",
      trigger: "blur",
    },
  ],
};

async function onSubmit() {
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        const response = await fetch(
          "http://localhost/my-app-backend/login.php",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: form.email,
              password: form.password,
            }),
          }
        );
        const data = await response.json();
        if (data.success) {
          alert("Sign in successful!");
        } else {
          alert(data.message || "Sign in failed!");
        }
      } catch (error) {
        alert("Error connecting to server.");
      }
    }
  });
}
</script>

<style scoped>
.signin-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #f0f4ff 0%, #e0e7ff 100%);
}
.signin-card {
  width: 380px;
  padding: 32px 24px 24px 24px;
  border-radius: 16px;
}
.signin-title {
  text-align: center;
  margin-bottom: 24px;
  font-weight: 700;
  color: #409eff;
}
.signin-content {
  margin-top: 24px;
  text-align: center;
  color: #666;
  font-size: 1rem;
}
</style>
