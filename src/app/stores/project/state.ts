import { ref } from 'vue';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export const initState = function () {
    const project = ref<Models.Project | null>(null);

    return { project };
};
