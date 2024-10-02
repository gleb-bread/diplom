import { useUserStore } from "@/app/stores/user";
import { Helper } from "@/shared/helpers";

export const checkAuth = async function () {
  const cachedResponse = await Helper.CacheAPI.getCacheData('token', '/');
  const userStore = useUserStore();

  const token = await cachedResponse?.text();

  if (token) {
    userStore.setAuthToken(token);
  }
};
