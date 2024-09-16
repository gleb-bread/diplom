import { useUserStore } from "@/app/stores/user";

export const checkAuth = function () {
  const token = localStorage.getItem("authToken");
  const userStore = useUserStore();

  if (token) {
    userStore.setAuthToken(token);
  }
};
