import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Pokedex",
    name: "PokedexView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pokedex.vue"),
  },
  {
    path: "/Bakery",
    name: "BakingPage",
    component: () =>
      import(/* webpackChunkName: "baking" */ "../views/Baking.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
