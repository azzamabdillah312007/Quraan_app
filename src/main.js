import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import "./style.css";
import App from "./App.vue";

const routes = [
  { path: "/", component: () => import("./views/list-surah.vue") },
  { path: "/detail/:id", component: () => import("./views/detail-surah.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
