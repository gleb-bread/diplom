import { initState } from './state';
import type { Languages } from '@/shared/system/lang/type';
import * as UserTemplatesStore from './template';
import { Helper } from '@/shared/helpers';
import * as Services from '@/entities/services';
import { useRouter } from 'vue-router';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setAuthToken = function (token: string) {
        state.authToken.value = token;
    };

    const setLangToken = function (token: Languages) {
        state.langToken.value = token;
    };

    const addUser = async function () {
        const service = new Services.User();

        const response = await service.addUser(state.newUser.value);
        const router = useRouter();

        if (response.result) {
            state.userInfo.value = response.data.user;
            restoreNewUser();
            Helper.RouterAPI.redirect(router, 'PAGE');
        } else {
            return { success: false, data: {} };
        }
    };

    const setUserInfo = async function () {
        const service = new Services.User();
        const router = useRouter();

        service
            .getUser()
            .then((response) => {
                state.userInfo.value = response.data;
            })
            .catch((response) => {
                Helper.RouterAPI.redirect(router, 'LOGIN');
            });
    };

    const restoreNewUser = function () {
        state.newUser.value = UserTemplatesStore.newUser();
    };

    return { setAuthToken, setLangToken, addUser, setUserInfo };
};
