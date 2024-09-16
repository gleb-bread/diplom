import reg from "@/pages/reg.vue";
import home from "@/pages/home.vue";

export const initPages = function () {
  return {
    reg: import("@/pages/reg.vue"),
    home: import("@/pages/home.vue"),
  };
};
