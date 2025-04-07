import * as Models from '@/entities/models';
import { initState } from './state';
import * as Types from '@/shared/types';
import { useProjectElements } from '../projectElements';

export const getNewElement = function (state: ReturnType<typeof initState>) {
    const projectElements = useProjectElements();

    const newElement = new Models.TextComponent({
        created_at: '',
        id: state.lastIndexNewComponent.value,
        page_id:
            projectElements.getElements[projectElements.getSelectPage].id ?? 0,
        text: '',
        updated_at: '',
        component_id: -1,
        type: Types.Component.Types.TEXT,
    });

    return newElement;
};

export const addApiComponentDataInComponent = function (
    component: Types.Component.AnyComponentModel,
    data: Types.Component.AnyApiComponentDataModel
) {
    if (component.type !== Types.Component.Types.API) return;

    switch (data.type) {
        case Types.Component.ApiComponentDataTypes.COOKIE: {
            component.cookies.push(data);
            break;
        }

        case Types.Component.ApiComponentDataTypes.HEADER: {
            component.headers.push(data);
            break;
        }

        case Types.Component.ApiComponentDataTypes.PARAM: {
            component.params.push(data);
            break;
        }

        default: {
            console.error('Undefined ApiComponentData');
        }
    }
};

export const deleteApiComponentDataInComponent = function (
    component: Types.Component.AnyComponentModel,
    data: Types.Component.AnyApiComponentDataModel
) {
    if (component.type !== Types.Component.Types.API) return;

    switch (data.type) {
        case Types.Component.ApiComponentDataTypes.COOKIE: {
            component.cookies = component.cookies.filter(
                (cookie) => cookie.id !== data.id
            );
            break;
        }

        case Types.Component.ApiComponentDataTypes.HEADER: {
            component.headers = component.headers.filter(
                (cookie) => cookie.id !== data.id
            );
            break;
        }

        case Types.Component.ApiComponentDataTypes.PARAM: {
            component.params = component.params.filter(
                (cookie) => cookie.id !== data.id
            );
            break;
        }

        default: {
            console.error('Undefined ApiComponentData');
        }
    }
};

export const updateApiComponentDataInComponent = function (
    component: Types.Component.AnyComponentModel,
    data: Types.Component.AnyApiComponentDataModel
) {
    if (component.type !== Types.Component.Types.API) return;

    switch (data.type) {
        case Types.Component.ApiComponentDataTypes.COOKIE: {
            const componentDataIndex = component.cookies.findIndex(
                (cookie) => cookie.id === data.id
            );

            if (componentDataIndex !== -1) {
                component.cookies[componentDataIndex] = data;
            }

            break;
        }

        case Types.Component.ApiComponentDataTypes.HEADER: {
            const componentDataIndex = component.headers.findIndex(
                (header) => header.id === data.id
            );
            if (componentDataIndex !== -1) {
                component.headers[componentDataIndex] = data;
            }
            break;
        }

        case Types.Component.ApiComponentDataTypes.PARAM: {
            const componentDataIndex = component.params.findIndex(
                (param) => param.id === data.id
            );
            if (componentDataIndex !== -1) {
                component.params[componentDataIndex] = data;
            }
            break;
        }

        default: {
            console.error('Undefined ApiComponentData');
        }
    }
};
