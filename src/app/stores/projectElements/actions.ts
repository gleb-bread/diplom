import { initState } from './state';
import { Helper } from '@/shared/helpers';
import * as Services from '@/entities/services';
import { Env } from '@/shared/env';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setStructure = async function (projectId: number | null = null) {
        const service = new Services.Project();

        const projId =
            projectId ?? Number(Helper.CookieAPI.getCookie(Env.Cookie.project));

        const response = await service.getStructure(projId);

        if (response.status) {
            state.elements.value = response.data.entities;
            state.genericList.value = response.data.genericList;
            Helper.UrlAPI.addParamsInURL({
                page: state.elements.value[state.selectPage.value].hash,
            });
        }
    };

    return { setStructure };
};
