 
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from '../components/home-page.vue';
 import skinsPage from '../components/skins-page.vue'
 
const routes:Array<RouteRecordRaw> =[
	{
		path: '/',
		name: 'homePage',
		component: homePage,
	},
	{
		path: '/skinsPage',
		name: 'skinsPage',
		component: skinsPage,
		 
	},

];

const router = createRouter({
	history: createWebHistory( ),
	routes,
});

export default router;