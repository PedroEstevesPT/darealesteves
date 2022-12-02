import { createWebHistory, createRouter } from "vue-router";
import Blog from "./views/Blog.vue";
import Professional from "./views/Professional.vue";
import Atelier from "./views/Atelier.vue";

import Fassbender from "./components/articles/cinema/Fassbender.vue";

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
    path: "/blog/cinema/Fassbender",
    name: "Fassbender",
    component: Fassbender
  } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;