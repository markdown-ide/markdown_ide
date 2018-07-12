import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
},
{
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard,
},
{
  path: '/projects',
  name: 'Projects',
  component: Projects,
},
];

export default new Router({
  mode: 'history',
  routes,
});
