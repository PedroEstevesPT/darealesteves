import { createWebHistory, createRouter } from "vue-router";
import Blog from "./views/Blog.vue";
import Professional from "./views/Professional.vue";
import Atelier from "./views/Atelier.vue";

import Fassbinder from "./components/articles/cinema/Fassbinder.vue";

const routes = [
  {
    path: "/",
    name: "Professional",
    component: Professional

  },
  {
    path: "/professional",
    name: "Professional",
    component: Professional

  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/atelier",
    name: "Atelier",
    component: Atelier,
  },
  {
    path: "/blog/cinema/Fassbinder",
    name: "Fassbinder",
    component: Fassbinder
  } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;