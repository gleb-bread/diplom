import { useUserStore } from "@/app/stores/user";
import { Helper } from "@/shared/helpers";

export const checkAuth = async function () {
  const token = Helper.CookieAPI.getCookie('token');
  const userStore = useUserStore();
  
  console.log(token);

  if (token) {
    userStore.setAuthToken(token);
  }
};
