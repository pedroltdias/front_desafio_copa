import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Teams from "../views/Teams.vue";


const routes: RouteRecordRaw[] = [{
	path: "/",
	name: "teams",
	component: Teams
}]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router;