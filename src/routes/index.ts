import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/HomeView.vue")
  },
  {
    path: "/user",
    name: "User",
    component: () => import("@/views/UserView.vue")
  },
  {
    path: "/image",
    name: "Image",
    component: () => import("@/views/ImageView.vue")
  },
  {
    path: "/counter",
    name: "Counter",
    component: () => import("@/views/CounterView.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/AboutView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
