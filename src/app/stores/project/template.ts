import * as Models from '@/entities/models';
import * as Types from '@/shared/types';
import { useUserStore } from '../user';

export const createNewProjectElement = function () {
    return new Models.ProjectCreateElement({
        folder_id: null,
        project_id: 0,
        type: Types.Project.ElementTypes.PAGE,
    });
};

export const createNewProject = function () {
    const userStore = useUserStore();

    return new Models.CreateProject({
        archive: false,
        logo: null,
        name: '',
        private: false,
        type: null,
        user_id: userStore.getUserInfo.id,
    });
};
