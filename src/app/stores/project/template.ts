import * as Models from '@/entities/models';
import * as Types from '@/shared/types';

export const createNewProjectElement = function () {
    return new Models.ProjectCreateElement({
        folder_id: null,
        project_id: 0,
        type: Types.Project.ElementTypes.PAGE,
    });
};
