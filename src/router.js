import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/login.vue'
import Dashboard from './views/dashboard.vue'
import Register from './views/register.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/dashboard",
			name: "dashboard",
			component: Dashboard,
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
		{
			path: "/register",
			name: "register",
			component: Register,
		},
	],
});
