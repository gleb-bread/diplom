import { initState } from './state';
import { Helper } from '@/shared/helpers';
import * as Services from '@/entities/services';
import { Env } from '@/shared/env';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setPages = async function (projectId: number | null = null) {
        const service = new Services.Project();

        const projId =
            projectId ?? Number(Helper.CookieAPI.getCookie(Env.Cookie.project));

        service.getPages(projId).then((response) => {
            state.pages.value[projId] = response.data.entities;
            state.genericList.value[projId] = response.data.genericList;
            Helper.UrlAPI.addParamsInURL({
                page: state.pages.value[projId][state.selectPage.value].hash,
            });
        });
    };

    return { setPages };
};
