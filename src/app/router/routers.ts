import { type RouteRecordRaw } from "vue-router";
import { initPages } from "./pages";

const Components = initPages();

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => Components.home,
    meta: { requiresAuth: true },
  },
  {
    path: "/reg",
    name: "Registration",
    component: () => Components.reg,
  },
];
