import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';
import * as Types from '@/shared/types';

export type CreateElementProjectDTO = {
    type: Types.Project.ElementTypes;
    folder_id?: null | number;
    project_id: number;
};

export const toModel = function (
    dto: CreateElementProjectDTO
): Models.ProjectCreateElement {
    return new Models.ProjectCreateElement(dto);
};
