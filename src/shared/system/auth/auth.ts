import { useUserStore } from '@/app/stores/user';
import { Helper } from '@/shared/helpers';
import { Env } from '@/shared/env';

export const checkAuth = async function () {
    const token = Helper.CookieAPI.getCookie(Env.Cookie.token);
    const userStore = useUserStore();

    if (token) {
        userStore.setAuthToken(token);
    }
};
