import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';
import * as Types from '@/shared/types';

export type PageDTO = DTOs.ProjectElement.ProjectElementDTO & {
    folder_id: number | null;
    type: Types.Project.ElementTypes.PAGE;
};

export const toModel = function (dto: PageDTO) {
    return new Models.Page(dto);
};
