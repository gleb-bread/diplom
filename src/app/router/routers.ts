import { type RouteRecordRaw } from 'vue-router';
import { initPages } from './pages';
import { RoutersNames } from './routersNames.enum.d';
import { LoadingAPI } from './loading';

const Components = initPages();

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: RoutersNames.PAGE,
        component: () => Components.page,
        meta: { requiresAuth: true, layout: 'page' },
        beforeEnter: LoadingAPI.Page.__start__,
    },
    {
        path: '/reg',
        name: RoutersNames.REG,
        component: () => Components.reg,
    },
    {
        path: '/login',
        name: RoutersNames.LOGIN,
        component: () => Components.login,
    },
    {
        path: '/projects',
        name: RoutersNames.PROJECTS,
        meta: { requiresAuth: true },
        component: () => Components.projects,
        beforeEnter: LoadingAPI.Projects.__start__,
    },
    {
        path: '/user',
        name: RoutersNames.USER,
        component: () => Components.user,
    },
];
