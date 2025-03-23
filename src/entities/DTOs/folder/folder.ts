import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';
import * as Types from '@/shared/types';

export type FolderDTO = DTOs.ProjectElement.ProjectElementDTO & {
    parent_id: null | number;
    type: Types.Project.ElementTypes.FOLDER;
    items: Types.Project.AnyProjectElement[];
};

export const toModel = function (dto: FolderDTO): Models.Folder {
    return new Models.Folder(dto);
};
