import { ref } from 'vue';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';
import * as StoreTemplates from './template';

export const initState = function () {
    const project = ref<Models.Project | null>(null);
    const newProjectElement = ref<Models.ProjectCreateElement>(
        StoreTemplates.createNewProjectElement()
    );

    return { project, newProjectElement };
};
