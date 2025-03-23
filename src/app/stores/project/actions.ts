import { initState } from './state';
import type { Languages } from '@/shared/system/lang/type';
import * as UserTemplatesStore from './template';
import { Helper } from '@/shared/helpers';
import * as Types from '@/shared/types';
import * as Services from '@/entities/services';
import { Env } from '@/shared/env';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setProject = async function () {
        const service = new Services.Project();
        const projectId = Number(
            Helper.CookieAPI.getCookie(Env.Cookie.project) ?? 0
        );

        const response = await service.getProject(projectId);

        if (response.status) {
            state.project.value = response.data;
        }
    };

    const createElement = async function (
        type: Types.Project.ElementTypes,
        folderId: number | null = null
    ) {};

    return { setProject };
};
