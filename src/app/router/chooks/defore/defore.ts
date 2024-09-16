import { router } from "../../router";
import { useUserStore } from "@/app/stores/user";
import { RoutersNames } from "../../routersNames.enum.d";

export const initBeforeChook = function (Router: typeof router) {
  checkAuthToken(Router);
};

function checkAuthToken(Router: typeof router) {
  Router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const token = userStore.getAuthToken;

    if (to.matched.some((record) => record.meta.requiresAuth) && !token) {
      next({ name: RoutersNames.REG });
    } else {
      next();
    }
  });
}
