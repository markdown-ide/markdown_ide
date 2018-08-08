import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import Project from '../pages/Project';
import Edit from '../pages/Edit';

Vue.use(Router);

const routes = [
  {
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
  {
    path: '/projects/:repository/:branch/:path(.*)?',
    name: 'Project',
    component: Project,
  },
  {
    path: '/edit/:repository?/:branch?/:path(.*)?',
    name: 'Edit',
    component: Edit,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
