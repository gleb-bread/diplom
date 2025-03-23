import { computed } from 'vue';
import { initState } from './state';
import { Helper } from '@/shared/helpers';
import { Env } from '@/shared/env';

export const initGetters = function (state: ReturnType<typeof initState>) {
    const getProject = computed(() => state.project.value);

    const getSelectProject = computed(() =>
        Number(Helper.CookieAPI.getCookie(Env.Cookie.project))
    );

    return { getProject, getSelectProject };
};
