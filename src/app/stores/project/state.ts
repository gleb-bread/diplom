import { ref } from 'vue';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';
import * as StoreTemplates from './template';

export const initState = function () {
    const project = ref<Models.Project | null>(null);
    const genericList = ref<number[]>([]);
    const projects = ref<Types.Objects.NumberObject<Models.Project>>({});
    const newProjectElement = ref<Models.ProjectCreateElement>(
        StoreTemplates.createNewProjectElement()
    );

    const newProject = ref<Models.CreateProject>(
        StoreTemplates.createNewProject()
    );

    const selectProject = ref<number | null>(null);

    return {
        project,
        newProjectElement,
        genericList,
        projects,
        newProject,
        selectProject,
    };
};
