import { createWebHistory,createWebHashHistory, createRouter } from "vue-router";

import AboutMe from       "./views/AboutMe.vue";
import Atelier from       "./views/Atelier.vue";
import Blog from          "./views/Blog.vue";
import BlogSearch from          "./views/BlogSearch.vue";


import Professional from  "./views/Professional.vue";
import Gastronomy from    "./views/Gastronomy.vue";
import Photos from        "./views/Photos.vue";
import NotFound from      "./views/NotFound.vue";

import BlogCategory from "./components/BlogCategory.vue"

import DangerousLiaisons from     "./components/articles/books/DangerousLiaisons.vue";
import MozartLifeMusic from       "./components/articles/books/MozartLife&Music.vue";

import ApocalypseNow from          "./components/articles/cinema/ApocalypseRedux.vue";
import Fassbinder from             "./components/articles/cinema/Fassbinder.vue";
import Fablemans from              "./components/articles/cinema/Fablemans.vue";
import FemmeMariee from            "./components/articles/cinema/UneFemmeMariee.vue";

import EasterConcert2023 from            "./components/articles/museums/EasterConcert2023.vue";
import CasaFernandoPessoa from            "./components/articles/museums/CasaFernandoPessoa.vue";
import Gulbenkian from                    "./components/articles/museums/Gulbenkian.vue";
import ImpressiveMonetBrilliantKlimt from "./components/articles/museums/ImpressiveMonetBrilliantKlimt.vue";
import MMIPO                         from "./components/articles/museums/MMIPO.vue";

import ETFs                         from "./components/articles/finances/ETFs.vue";
import EuriborTANTAEGSpread         from "./components/articles/finances/EuriborTANTAEGSpread.vue";

import RunningShoes                 from "./components/articles/fitness/RunningShoes.vue";

import Site from                    "./components/articles/tech/Site.vue";
import ORM from                     "./components/articles/tech/ORM.vue";
import Cookies from                 "./components/articles/tech/Cookies.vue";
import Git from                     "./components/articles/tech/Git.vue";
import Docker from                  "./components/articles/tech/Docker.vue";
import DotNetWebAPIAzure from       "./components/articles/tech/DotNetWebAPIAzure.vue";
import DeployDockerFlaskAzure  from "./components/articles/tech/DeployDockerFlaskAzure.vue";
import DynamicsCEWebAPIQueries from "./components/articles/tech/DynamicsCEWebAPIQueries.vue";
import Pages2Static            from  "./components/articles/tech/PagesToAzureStatic.vue";


import Predictions2023 from        "./components/articles/opinions/Predictions2023.vue";


const routes = [
  { path: '/', redirect: '/aboutme' },
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
    component: BlogSearch,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/tech",
    name: "tech",
    component: BlogCategory,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/cinema",
    name: "cinema",
    component: BlogCategory,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/finances",
    name: "finances",
    component: BlogCategory,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/fitness",
    name: "fitness",
    component: BlogCategory,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/books",
    name: "books",
    component: BlogCategory,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/museums",
    name: "museums",
    component: BlogCategory,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/museums/casafernandopessoa",
    name: "Casa Fernando Pessoa",
    component: CasaFernandoPessoa,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/finances/etfs",
    name: "etfs",
    component: ETFs,
    meta: { 
      "availableLangs": ["pt"]
    }
  },
  {
    path: "/blog/finances/euribortantaegspreads",
    name: "Euribor, TAN, TAEG and Spread",
    component: EuriborTANTAEGSpread,
    meta: { 
      "availableLangs": ["pt"]
    }
  },
  {
    path: "/blog/fitness/runningshoes",
    name: "RunningShoes", 
    component: RunningShoes,
    meta: { 
      "availableLangs": ["pt"]
    }
  },
  {
    path: "/blog/museums/gulbenkian",
    name: "Gulbenkian",
    component: Gulbenkian,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/museums/easterconcert2023",
    name: "Easter Concert 2023",
    component: EasterConcert2023,
    meta: { 
      "availableLangs": ["pt"]
    }
  },
  {
    path: "/blog/museums/mmipo",
    name: "MMIPO",
    component: MMIPO,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/museums/impressivemonetbrilliantklimt",
    name: "Impressive Monet & Brilliant Klimt",
    component: ImpressiveMonetBrilliantKlimt,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/music",
    name: "music",
    component: BlogCategory,
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
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/cinema/FemmeMariee",
    name: "FemmeMariee",
    component: FemmeMariee,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/cinema/ApocalypseNow",
    name: "ApocalypseNow",
    component: ApocalypseNow,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/cinema/Fablemans",
    name: "Fablemans",
    component: Fablemans,
    meta: { 
      "availableLangs": ["en","pt"]
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
    path: "/blog/tech/DynamicsCEWebAPIQueries",
    name: "Dynamics CE Web API queries",
    component: DynamicsCEWebAPIQueries,
    meta: { 
      "availableLangs": ["en","pt"]
    }
  },
  {
    path: "/blog/tech/dotnetWebAPIAzure",
    name: "DotNetWebAPIAzure",
    component: DotNetWebAPIAzure,
    meta: { 
      "availableLangs": ["en","pt"]
    }
  },
  {
    path: "/blog/tech/deploydockerflaskazure",
    name: "DeployDockerFlaskAzure",
    component: DeployDockerFlaskAzure,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/tech/pages2static",
    name: "From Github Pages to Azure Static Web Apps",
    component: Pages2Static,
    meta: { 
      "availableLangs": ["pt"]
    }
  },
  {
    path: "/blog/tech/docker",
    name: "Docker",
    component: Docker,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/tech/cookies",
    name: "cookies",
    component: Cookies,
    meta: { 
      "availableLangs": ["en","pt"]
    }
  },
  {
    path: "/blog/tech/orm",
    name: "ORM",
    component: ORM,
    meta: { 
      "availableLangs": ["en"]
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
    path: "/blog/opinions/predictions2023",
    name: "Predictions2023",
    component: Predictions2023,
    meta: { 
      "availableLangs": ["pt","en"]
    }
  },
  {
    path: "/blog/gastronomy",
    name:     "Gastronomy",
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
      "availableLangs": ["en","pt"]
    }
  },
  {
    path: "/blog/books/MozartLifeWork",
    name: "Mozart - Life & Music",
    component: MozartLifeMusic,
    meta: { "availableLangs": ["en","pt"] }
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    meta: { "availableLangs": ["en","pt"] }
  } 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { //Necessario para fazer scroll ate ao inicio da pagina quando mudo de rota
    window.scrollTo(0,0);
  },
  scrollBehavior(to, from, savedPosition) {
    // Scroll to saved position if available
    if (savedPosition) {
      return savedPosition
    }

    // Scroll to hash if present in target route
    if (to.hash) {
      const targetElement = document.querySelector(to.hash)
      if (targetElement) {
        // You can adjust the options for the scrollTo method to change the scrolling behavior
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        })
        return false
      }
    }

    // Otherwise, scroll to top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    return false
  }
});

export default router;