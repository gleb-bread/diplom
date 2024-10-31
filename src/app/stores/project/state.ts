import { ref } from 'vue';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export const initState = function () {
    const projects = ref<Types.Objects.NumberObject<Models.Project>>({});

    //Компонентные переменные
    const genericList = ref<number[]>([]);

    return { projects, genericList };
};
