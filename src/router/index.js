import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import OrderLayout from "../views/orders/OrderLayout.vue";
import {useAuthSore} from "../stores/auth.js";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path: '/',
            name: 'auth',
            beforeEnter: (to, from, next) => {
                const auth = useAuthSore();
                if (auth.isAuthenticated()) {
                    next('/orders');
                } else {
                    next();
                }
            },
            component: () => import('../views/auth/AuthLayout.vue'),
            children: [
                {
                    path: 'registro',
                    name: 'register',
                    beforeEnter: (to, from, next) => {
                        const auth = useAuthSore();
                        if (auth.isAuthenticated()) {
                            next('/');
                        } else {
                            next();
                        }
                    },
                    component: () => import('../views/auth/RegisterView.vue')
                },
                {
                    path: 'login',
                    name: 'login',
                    beforeEnter: (to, from, next) => {
                        const auth = useAuthSore();
                        if (auth.isAuthenticated()) {
                            next('/orders');
                        } else {
                            next();
                        }
                    },
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
                },
                {
                    path: ':id/detalles-order',
                    component: () => import('../views/orders/EditOrderLayout.vue'),
                    children: [
                        {
                            path: '',
                            name: 'show-order',
                            component: () => import('../views/orders/ShowOrderView.vue')
                        }
                    ]
                }
            ]
        }
    ]
});

export default router;