import { ref } from 'vue';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';
import * as PageStoreTypes from './types';
import { Helper } from '@/shared/helpers';
import { Env } from '@/shared/env';

export const initState = function () {
    const pages = ref<PageStoreTypes.PageList>({});

    //Компонентные переменные
    const genericList = ref<PageStoreTypes.GenericList>({});
    const selectPage = ref<number>(
        Number(Helper.CookieAPI.getCookie(Env.Cookie.page) ?? 0)
    );

    return { pages, genericList, selectPage };
};
