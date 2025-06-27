import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Services from "../pages/Services.vue";
import Contact  from "../pages/Contact.vue";
import signIn from "../pages/SignIn.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/services", name: "Services", component: Services },
  { path: "/contact", name: "Contact", component: Contact },
  { path: "/signin", name: "SignIn", component: signIn },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
