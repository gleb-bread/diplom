import { initState } from './state';
import { Helper } from '@/shared/helpers';
import * as Types from '@/shared/types';
import * as Services from '@/entities/services';
import { Env } from '@/shared/env';
import * as StoreTemplates from './template';
import { useProjectElements } from '../projectElements';
import { StoreHelper } from './helper';
import type { UnwrapRef } from 'vue';

export const initActions = function (state: ReturnType<typeof initState>) {
    const {
        addProjectElementInGenericList,
        updateProjectElement,
        deleteProjectElement,
    } = StoreHelper(state);

    const projectElements = useProjectElements();

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
        folderId: string | null = null
    ) {
        const service = new Services.Project();

        const project = state.project.value;

        state.newProjectElement.value.type = type;
        state.newProjectElement.value.project_id = project?.id ?? 0;

        if (folderId) {
            const folder = projectElements.getElements[folderId];
            state.newProjectElement.value.folder_id = folder.id;
        }

        const response = await service.createProjectElement(
            state.newProjectElement.value
        );

        if (response.result) {
            const element = response.data;

            addProjectElementInGenericList(element);

            restoreNewProjectElement();
        }
    };

    const updateElement = async function (
        element:
            | Types.Project.AnyProjectModels
            | UnwrapRef<Types.Project.AnyProjectModels>
    ) {
        const service = new Services.Project();

        const response = await service.updateProjectElement(element);

        if (response.result) {
            const element = response.data;

            updateProjectElement(element);
        }
    };

    const deleteElement = async function (
        element:
            | Types.Project.AnyProjectModels
            | UnwrapRef<Types.Project.AnyProjectModels>
    ) {
        const service = new Services.Project();

        const response = await service.deleteProjectElement(element);

        if (response.result) {
            deleteProjectElement(element);
        }
    };

    const restoreNewProjectElement = function () {
        state.newProjectElement.value =
            StoreTemplates.createNewProjectElement();
    };

    return { setProject, createElement, updateElement, deleteElement };
};
