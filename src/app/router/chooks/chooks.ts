import { router } from "../router";
import { initBeforeChook } from "./defore";

export const initChooks = function (Router: typeof router) {
  initBeforeChook(Router);
};
