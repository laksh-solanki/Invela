import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Services from "@/pages/Services.vue";
import Contact from "@/pages/Contact.vue";
import Login from "@/pages/Login.vue";
import signIn from "@/pages/SignIn.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/About", name: "About", component: About },
  { path: "/Services", name: "Services", component: Services },
  { path: "/Contact", name: "Contact", component: Contact },
  { path: "/Login", name: "Login", component: Login },
  { path: "/SignIn", name: "SignIn", component: signIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
