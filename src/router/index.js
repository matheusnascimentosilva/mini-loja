import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import CartPage from '@/views/CartPage.vue';

const routes = [
  { path: '/home', component: HomePage },
  { path: '/cart', component: CartPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
