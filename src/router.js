import { createWebHashHistory, createRouter } from "vue-router";
import Home from "@/views/Home"
import Board from "@/components/Board";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/board",
        name: "Board",
        component: Board,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;