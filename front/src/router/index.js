import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Projects from '../pages/Projects';
import Edit from '../pages/Edit';
import FilesTree from '../pages/FilesTree';

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
    path: '/projects/:name',
    name: 'ProjectFiles',
    component: FilesTree
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
  },
];

export default new Router({
  mode: 'history',
  routes,
});
