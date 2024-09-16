export const initPages = function () {
  return {
    reg: import("@/pages/reg.vue"),
    home: import("@/pages/home.vue"),
    login: import("@/pages/login.vue"),
  };
};
