import { createWebHashHistory, createRouter } from "vue-router";
import Todos from "@/views/Todos.vue";
import Home from "@/views/Home"


const routes = [
    {
        path: "/todos",
        name: "Todos",
        component: Todos,
    },
    {
        path: "/",
        name: "Home",
        component: Home
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;