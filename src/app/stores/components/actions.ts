import { initState } from './state';
import { Helper } from '@/shared/helpers';
import * as Services from '@/entities/services';
import { Env } from '@/shared/env';
import * as StoreHelper from './helper';
import { useProjectElements } from '../projectElements';
import { useProjectStore } from '../project';
import * as Models from '@/entities/models';
import * as Types from '@/shared/types';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setComponents = async function (publicId: string | null = null) {
        const service = new Services.Page();
        const projectElements = useProjectElements();

        const pagePublicId = projectElements.getSelectPage;

        const page = projectElements.getElements[pagePublicId];

        const response = await service.getComponents(page?.id);

        if (response.status) {
            state.components.value[pagePublicId] = response.data.entities;
            state.genericList.value[pagePublicId] = response.data.genericList;
        }
    };

    const pushNewElement = async function (id: string | null = null) {
        state.lastIndexNewComponent.value -= 1;

        const pageId =
            id ?? Number(Helper.CookieAPI.getCookie(Env.Cookie.page));

        const newElement = StoreHelper.getNewElement(state);

        state.components.value[pageId][newElement.id] = newElement;

        state.genericList.value[pageId].push(newElement.id);

        setFocusComponent(newElement.id);
    };

    const saveUpdateComponent = function (id: number) {
        const pageStore = useProjectElements();

        const pageId =
            pageStore.getSelectPage ??
            Helper.CookieAPI.getCookie(Env.Cookie.page);

        const component: Models.TextComponent | null =
            state.components.value[pageId][id];

        if (!component) {
            console.error('Component not exist!');
            return;
        }

        if (id < 0) {
            saveUpdateNewComponent(component);
        } else {
            saveUpdates(component);
        }
    };

    const saveUpdateNewComponent = async function (
        component: Types.Component.AnyComponentModel
    ) {
        const id = component.id;

        if (state.componentMap.value[id] === undefined) {
            const service = new Services.Page();

            const response = await service.createComponent(component);

            if (!response.result) {
                console.log('Error at created component!');
                return;
            }

            state.componentMap.value[id] = response.data.id;

            const requestComponent = createRequestComponent(component);

            saveUpdates(requestComponent);
        } else {
            const requestComponent = createRequestComponent(component);

            saveUpdates(requestComponent);
        }
    };

    const createRequestComponent = function (
        component: Types.Component.AnyComponentModel
    ) {
        const requestComponent: Types.Component.AnyComponentModel =
            Object.create(Object.getPrototypeOf(component));
        Object.assign(requestComponent, component);
        const componentId = state.componentMap.value[component.id];

        requestComponent.id = componentId;

        return requestComponent;
    };

    const saveUpdates = async function (
        component: Types.Component.AnyComponentModel
    ) {
        const service = new Services.Component();
        const response = await service.update(component);
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
        const projectElementsStore = useProjectElements();

        const pageId = projectElementsStore.getSelectPage ?? 0;

        const page = projectElementsStore.getElements[pageId];

        return `${page.hash}-${componentId}`;
    };

    return {
        setComponents,
        pushNewElement,
        setFocusComponent,
        getComponentHashById,
        disableFocusComponent,
        restoreFocusComponent,
        saveUpdateComponent,
    };
};
