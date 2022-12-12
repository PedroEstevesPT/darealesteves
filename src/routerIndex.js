import { createWebHistory, createRouter } from "vue-router";

import AboutMe from       "./views/AboutMe.vue";
import Atelier from      "./views/Atelier.vue";
import Blog from         "./views/Blog.vue";
import Professional from "./views/Professional.vue";

import Fassbinder from        "./components/articles/cinema/Fassbinder.vue";
import Site from              "./components/articles/tech/Site.vue";
import DangerousLiaisons from "./components/articles/books/DangerousLiaisons.vue";

//var repo = 'darealesteves'
const routes = [
  { path: '/darealesteves/', redirect: '/darealesteves/professional' },
  { path: '/atelier', redirect: '/darealesteves/atelier' },


  {
    path: "/darealesteves/aboutme/",
    name: "About Me",
    component: AboutMe
  },
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
  },
  {
    path: "/darealesteves/blog/books/DangerousLiaisons",
    name: "DangerousLiaisons",
    component: DangerousLiaisons
  }  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;