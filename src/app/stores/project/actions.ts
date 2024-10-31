import { initState } from './state';
import type { Languages } from '@/shared/system/lang/type';
import * as UserTemplatesStore from './template';
import { Helper } from '@/shared/helpers';
import * as Services from '@/entities/services';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setProjects = async function () {
        const service = new Services.User();

        service.getProjects().then((response) => {
            state.projects.value = response.data.entities;
            state.genericList.value = response.data.genericList;
        });
    };

    return { setProjects };
};
