import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "@/views/Home.vue";
import { compile } from "vue";
import FilmDetail from "@/components/FilmDetail.vue";
import SessionCreate from "@/views/SessionCreate.vue";

const routes = [
    { path: "/login", component: Login },
    { path: "/", component: Home,name:Home},
    {path : "/film/:id",component:FilmDetail,name:FilmDetail},
    {path:"/Session/Create",component:SessionCreate,name:SessionCreate}
];

const router = createRouter({
    history: createWebHashHistory(), // Uses hash mode
    routes
});

export default router;
