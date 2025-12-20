import { comma } from 'postcss/lib/list'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../pages/Home.vue'),
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: () =>
            import ('../pages/pricing.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../pages/About.vue'),
    },
    {
        path : '/contact',
        name : '/Contact',
        component : () => import ('../pages/contact.vue')
    },
    {
        path : '/stores',
        name : '/Stores',
        component : () => import ('../pages/stores.vue')
    },
    {
        path : '/categories',
        name : '/Categories',
        component : () => import ('../pages/categories.vue')
    },
    {
        path : '/privacy',
        name : 'Privacy',
        component : () => import ('../pages/privacy.vue')
    },
    {
        path : '/terms',
        name : 'Terms',
        component : () => import ('../pages/terms.vue')
    },
    {
        path : '/sub-categories/:id/:slug',
        name : 'SubCategories',
        component : () => import ('../pages/sub-categories.vue')
    },
    {
        path : '/store/:id/:slug',
        name : 'StoreDetails',
        component : () => import ('../pages/storeDetails.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router