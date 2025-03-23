import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export type ProjectElementDTO = {
    id: number;
    name: string;
    private: boolean;
    archive: boolean;
    user_id: number;
    project_id: number;
    hash: string;
    created_at: string;
    updated_at: string;
};

export const toModel = function (
    dto: ProjectElementDTO
): Models.ProjectElement {
    return new Models.ProjectElement(dto);
};
