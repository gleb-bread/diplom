import { router } from './router';
import { initChooks } from './chooks';

const initRouter = function () {
    initChooks(router);

    return { Router: router };
};

export const { Router } = initRouter();
