import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import OrderLayout from "../views/orders/OrderLayout.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path:'/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../views/auth/AuthLayout.vue'),
            children: [
                {
                    path: 'registro',
                    name: 'register',
                    component: () => import('../views/auth/RegisterView.vue')
                },
                {
                    path: 'login',
                    name: 'login',
                    component: () => import('../views/auth/LoginView.vue')
                }
            ]
        },
        {
            path: '/orders',
            name: 'orders',
            component: OrderLayout,
            children: [
                {
                    path: '',
                    name: 'my-orders',
                    component: () => import('../views/orders/OrderDateView.vue')
                },
                {
                    path: 'consulta-id',
                    name: 'search-order-id',
                    component: () => import('../views/orders/OrderSearchIDView.vue')
                }
            ]
        }
    ]
});

export default router;