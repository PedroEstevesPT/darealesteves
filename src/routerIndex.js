import { createWebHistory, createRouter } from "vue-router";
import Blog from "./views/Blog.vue";
import Professional from "./views/Professional.vue";
import Atelier from "./views/Atelier.vue";

import Fassbinder from "./components/articles/cinema/Fassbinder.vue";
import Site from    "./components/articles/tech/Site.vue";

//var repo = 'darealesteves'
const routes = [
  { path: '/darealesteves/', redirect: '/darealesteves/professional' },
  { path: '/atelier', redirect: '/darealesteves/atelier' },

  {
    path: "/darealesteves/professional/",
    name: "Professional",
    component: Professional
  },
  {
    path: "/darealesteves/blog/",
    name: "Blog",
    component: Blog
  },
  {
    path: "/darealesteves/atelier/",
    name: "Atelier",
    component: Atelier,
  },
  {
    path: "/darealesteves/blog/cinema/Fassbinder",
    name: "Fassbinder",
    component: Fassbinder
  },
  {
    path: "/darealesteves/blog/tech/Site",
    name: "Tech",
    component: Site
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;