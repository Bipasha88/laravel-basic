import { createWebHistory, createRouter } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import Birds from '../birds/Birds.vue';
import Login from '../components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/birds',
    name: 'Birds',
    component: Birds,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
