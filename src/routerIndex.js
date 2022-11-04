import { createWebHistory, createRouter } from "vue-router";
import Hobbies from "./components/Hobbies.vue";
import Professional from "./components/Professional.vue";

const routes = [
  {
    path: "/online-cv/",
    name: "Professional",
    component: Professional

  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: Hobbies
  },
  {
    path: "/professional",
    name: "Professional2",
    component: Professional
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;