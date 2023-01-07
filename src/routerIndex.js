import { createWebHistory,createWebHashHistory, createRouter } from "vue-router";

import AboutMe from       "./views/AboutMe.vue";
import Atelier from       "./views/Atelier.vue";
import Blog from          "./views/Blog.vue";
import Professional from  "./views/Professional.vue";
import Gastronomy from    "./views/Gastronomy.vue";
import Photos from        "./views/Photos.vue";
import NotFound from      "./views/NotFound.vue";

import FemmeMariee from       "./components/articles/cinema/UneFemmeMariee.vue";
import Fassbinder from        "./components/articles/cinema/Fassbinder.vue";
import Site from              "./components/articles/tech/Site.vue";
import DangerousLiaisons from "./components/articles/books/DangerousLiaisons.vue";

//var repo = 'darealesteves'
const routes = [
  { path: '/', redirect: '/professional' },
  { path: '/atelier'       , redirect: '/atelier' },
  {
    path: "/aboutme/",
    name: "About Me",
    component: AboutMe
  },
  {
    path: "/professional/",
    name: "Professional",
    component: Professional
  },
  {
    path: "/blog/",
    name: "Blog",
    component: Blog
  },
  {
    path: "/atelier/",
    name: "Atelier",
    component: Atelier,
  },
  {
    path: "/blog/cinema/Fassbinder",
    name: "Fassbinder",
    component: Fassbinder
  },
  {
    path: "/blog/cinema/FemmeMariee",
    name: "FemmeMariee",
    component: FemmeMariee
  },
  {
    path: "/blog/tech/Site",
    name: "Tech",
    component: Site
  },
  {
    path: "/blog/gastronomy",
    name: "Gastronomy",
    component: Gastronomy
  },
  {
    path: "/blog/photos",
    name: "Photos",
    component: Photos
  },
  {
    path: "/blog/books/DangerousLiaisons",
    name: "DangerousLiaisons",
    component: DangerousLiaisons
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound
  } 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { //Necessario para fazer scroll ate ao inicio da pagina quando mudo de rota
    window.scrollTo(0,0);
  }
});

export default router;