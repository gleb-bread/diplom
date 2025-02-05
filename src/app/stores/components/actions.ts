import { initState } from './state';
import { Helper } from '@/shared/helpers';
import * as Services from '@/entities/services';
import { Env } from '@/shared/env';
import * as StoreHelper from './helper';
import { usePageStore } from '../page';
import { useProjectStore } from '../project';

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

    const pushNewElement = async function (id: number | null = null) {
        state.lastIndexNewComponent.value -= 1;

        const pageId =
            id ?? Number(Helper.CookieAPI.getCookie(Env.Cookie.page));

        const newElement = StoreHelper.getNewElement(state);

        state.components.value[pageId][newElement.id] = newElement;

        state.genericList.value[pageId].push(newElement.id);

        setFocusComponent(newElement.id);
    };

    const setFocusComponent = function (id: number) {
        state.focusComponent.value = id;
    };

    const restoreFocusComponent = function () {
        state.focusComponent.value = null;
    };

    const disableFocusComponent = function () {
        state.focusComponent.value = null;
    };

    const getComponentHashById = function (componentId: number) {
        const pageStore = usePageStore();
        const projectStore = useProjectStore();

        const pageId = pageStore.getSelectPage ?? 0;

        const projectId = projectStore.getSelectProject;
        const page = pageStore.getPages[projectId][pageId];

        return `${page.hash}-${componentId}`;
    };

    return {
        setComponents,
        pushNewElement,
        setFocusComponent,
        getComponentHashById,
        disableFocusComponent,
        restoreFocusComponent,
    };
};
