 
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from '../components/home-page.vue';
import cartHero from '../components/cart-hero.vue';
import userHero from '../components/user-hero.vue';
import searchHero from '../components/search-hero.vue';
const routes:Array<RouteRecordRaw> =[
	{
		path: '/',
		name: 'homePage',
		component: homePage,
	},
	{
		path:'/cartHero',
		name:'cartHero',
		component: cartHero,
	},
	{
		path:'/userHero',
		name:'userHero',
		component: userHero,
	},
	{
		path:'/searchHero',
		name:'searchHero',
		component: searchHero,
	}
];

const router = createRouter({
	history: createWebHistory( ),
	routes,
});

export default router;