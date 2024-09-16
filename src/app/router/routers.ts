import { type RouteRecordRaw } from "vue-router";
import { initPages } from "./pages";
import { RoutersNames } from "./routersNames.enum.d";

const Components = initPages();

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: RoutersNames.HOME,
    component: () => Components.home,
    meta: { requiresAuth: true },
  },
  {
    path: "/reg",
    name: RoutersNames.REG,
    component: () => Components.reg,
  },
  {
    path: "/login",
    name: RoutersNames.LOGIN,
    component: () => Components.login,
  },
];
