import { router as Router } from "./router";
import { initChooks } from "./chooks";

const initRouter = function () {
  initChooks(Router);

  return { router: Router };
};

export const { router } = initRouter();
