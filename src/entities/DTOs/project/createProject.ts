import * as Models from '@/entities/models';

export type CreateProjectDTO = {
    type: null;
    private: boolean;
    archive: boolean;
    user_id: number;
    name: string;
    logo: string | null;
};

export const toModel = function (dto: CreateProjectDTO) {
    return new Models.CreateProject(dto);
};
