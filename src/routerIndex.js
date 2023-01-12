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
import Git from               "./components/articles/tech/Git.vue";
import DangerousLiaisons from "./components/articles/books/DangerousLiaisons.vue";

//var repo = 'darealesteves'
const routes = [
  { path: '/', redirect: '/professional' },
  { path: '/atelier'       , redirect: '/atelier' },
  {
    path: "/aboutme/",
    name: "About Me",
    component: AboutMe,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/professional/",
    name: "Professional",
    component: Professional,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/",
    name: "Blog",
    component: Blog,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/atelier/",
    name: "Atelier",
    component: Atelier,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/cinema/Fassbinder",
    name: "Fassbinder",
    component: Fassbinder,
    meta: { 
      "availableLangs": ["pt"]
    }
  },
  {
    path: "/blog/cinema/FemmeMariee",
    name: "FemmeMariee",
    component: FemmeMariee,
    meta: { 
      "availableLangs": ["pt"]
    }
  },
  {
    path: "/blog/tech/Site",
    name: "Tech",
    component: Site,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/tech/Git",
    name: "Git",
    component: Git,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/gastronomy",
    name: "Gastronomy",
    component: Gastronomy,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/photos",
    name: "Photos",
    component: Photos,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/books/DangerousLiaisons",
    name: "DangerousLiaisons",
    component: DangerousLiaisons,
    meta: { 
      "availableLangs": ["pt"]
    }
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