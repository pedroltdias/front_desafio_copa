import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TeamsView from "../views/TeamsView.vue";
import MatchesView from "../views/MatchesView.vue";
import PlayersView from "../views/PlayersView.vue";




const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "matches",
		component: MatchesView
	},
	{
		path: "/teams",
		name: "teams",
		component: TeamsView
	},
	{
		path: "/players",
		name: "players",
		component: PlayersView
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})

export default router;