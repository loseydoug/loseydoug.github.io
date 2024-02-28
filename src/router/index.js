import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PokedexView from "../views/Pokedex.vue";
import BakingPage from "../views/Baking.vue"
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
    component: PokedexView
  },
  {
    path: "/Bakery",
    name: "BakingPage",
    component: BakingPage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
