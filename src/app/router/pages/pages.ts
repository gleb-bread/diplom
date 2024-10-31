export const initPages = function () {
    return {
        reg: import('@/pages/reg.vue'),
        page: import('@/pages/page.vue'),
        login: import('@/pages/login.vue'),
    };
};
