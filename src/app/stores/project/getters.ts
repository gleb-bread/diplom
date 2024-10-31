import { computed } from 'vue';
import { initState } from './state';
import { Helper } from '@/shared/helpers';
import { Env } from '@/shared/env';

export const initGetters = function (state: ReturnType<typeof initState>) {
    const getProjects = computed(() => state.projects.value);

    //Компонентные геттеры
    const getGenericList = computed(() => state.genericList.value);

    const getSelectProject = computed(() =>
        Number(Helper.CookieAPI.getCookie(Env.Cookie.project))
    );

    return { getProjects, getGenericList, getSelectProject };
};
