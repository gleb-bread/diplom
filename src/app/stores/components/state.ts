import { ref } from 'vue';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';
import * as ComponentStoreTypes from './types';
import { Helper } from '@/shared/helpers';
import { Env } from '@/shared/env';

export const initState = function () {
    const components = ref<ComponentStoreTypes.ComponentList>({});

    //Компонентные переменные
    const genericList = ref<ComponentStoreTypes.GenericList>({});
    const componentMap = ref<Record<number, number>>({});

    const lastIndexNewComponent = ref(0);
    const focusComponent = ref<null | number>(null);

    return {
        components,
        genericList,
        lastIndexNewComponent,
        focusComponent,
        componentMap,
    };
};
