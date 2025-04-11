import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/", component: Home,name:Home}
];

const router = createRouter({
    history: createWebHashHistory(), // Uses hash mode
    routes
});

export default router;
