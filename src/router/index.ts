 
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import homePage from '../components/home-page.vue';
 import skinsPage from '../components/skins-page.vue'
 import loginPage from '../components/login-form.vue'
 import forgotPassword from '../components/forgot-password.vue'
  import viewS22Ultra from '../components/view-s22-ultra.vue'
  import viewIphone13 from '../components/iphone13-view.vue'
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
	{
		path: '/loginPage',
		name: 'loginPage',
		component: loginPage,
		 
	},
	{
		path: '/forgotPassword',
		name: 'forgotPassword',
		component: forgotPassword,
		 
	},
	{
		path: '/homePage/viewS22Ultra',
		name: 'viewS22Ultra',
		component: viewS22Ultra,
		 
	},
	{
		path: '/homePage/viewIphone13',
		name: 'viewIphone13',
		component: viewIphone13,
		 
	},
 

];

const router = createRouter({
	history: createWebHistory( ),
	routes,
});

export default router;