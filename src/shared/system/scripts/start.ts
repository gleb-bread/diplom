import * as SystemAuthAPI from '@/shared/system/auth';
import * as SystemLangAPI from '@/shared/system/lang';
import { useUserStore } from '@/app/stores/user';

export const __start__ = async function () {
    const userStore = useUserStore();

    await SystemAuthAPI.checkAuth();
    SystemLangAPI.getLang();

    if (userStore.getAuthToken) {
        await userStore.setUserInfo();
    }
};
