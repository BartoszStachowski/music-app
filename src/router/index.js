import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Manage from '@/views/Menage.vue';

const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/about',
		component: About,
	},
	{
		path: '/manage',
		component: Manage,
	},

	// {
	// 	path: '/',
	// 	name: 'Home',
	// 	component: Home,
	// },
	// {
	// 	path: '/about',
	// 	name: 'About',
	// 	component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	// },
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	linkExactActiveClass: 'text-yellow-500',
});

export default router;
