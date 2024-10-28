import * as Models from '@/entities/models';

export type PageDTO = {
    id: number;
    type: null;
    private: boolean;
    archive: boolean;
    user_id: number;
    hash: string;
    project_id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
};

export const toModel = function (dto: PageDTO) {
    return new Models.Page(dto);
};
