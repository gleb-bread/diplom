import { initState } from './state';
import { Helper } from '@/shared/helpers';
import * as Services from '@/entities/services';
import { Env } from '@/shared/env';
import * as Types from '@/shared/types';
import { useComponentStore } from '../components';

export const initActions = function (state: ReturnType<typeof initState>) {
    const componentStore = useComponentStore();

    const setStructure = async function (projectId: number | null = null) {
        const service = new Services.Project();

        const projId =
            projectId ?? Number(Helper.CookieAPI.getCookie(Env.Cookie.project));

        const response = await service.getStructure(projId);

        if (response.status) {
            state.elements.value = response.data.entities;
            state.genericList.value = response.data.genericList;
            if (state.elements.value[state.selectPage.value]?.hash)
                Helper.UrlAPI.addParamsInURL({
                    page: state.elements.value[state.selectPage.value].hash,
                });
        }
    };

    const setGenericList = function (list: string[]) {
        state.genericList.value = list;
    };

    const setSelectPage = async function (
        page: Types.Project.AnyProjectModels
    ) {
        if (page.type !== Types.Project.ElementTypes.PAGE) return;

        state.selectPage.value = page.public_id;

        Helper.UrlAPI.addParamsInURL({
            page: state.elements.value[state.selectPage.value].hash,
        });

        Helper.CookieAPI.setCookie(
            Env.Cookie.page,
            String(page.public_id),
            14,
            {
                path: '/',
                sameSite: 'Strict',
            }
        );

        componentStore.resetComponentMap();

        await componentStore.setComponents();
    };

    return { setStructure, setGenericList, setSelectPage };
};
