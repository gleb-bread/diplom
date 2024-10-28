import * as Models from '@/entities/models';

export type ProjectDTO = {
    id: number;
    type: null;
    private: boolean;
    archive: boolean;
    user_id: number;
    hash: string;
    ref: string;
    name: string;
    logo: string | null;
    created_at: string | null;
    updated_at: string | null;
};

export const toModel = function (dto: ProjectDTO) {
    return new Models.Project(dto);
};
