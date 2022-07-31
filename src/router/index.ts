 
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from '../components/home-page.vue';
const routes:Array<RouteRecordRaw> =[
	{
		path: '/',
		name: 'homePage',
		component: homePage,
	},
];

const router = createRouter({
	history: createWebHistory( ),
	routes,
});

export default router;