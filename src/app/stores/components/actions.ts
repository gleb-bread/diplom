import { initState } from './state';
import { Helper } from '@/shared/helpers';
import * as Services from '@/entities/services';
import { Env } from '@/shared/env';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setComponents = async function (id: number | null = null) {
        const service = new Services.Page();

        const pageId =
            id ?? Number(Helper.CookieAPI.getCookie(Env.Cookie.page));

        service.getComponents(pageId).then((response) => {
            state.components.value[pageId] = response.data.entities;
            state.genericList.value[pageId] = response.data.genericList;
        });
    };

    return { setComponents };
};
