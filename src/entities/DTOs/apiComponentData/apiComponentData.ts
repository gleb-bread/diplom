import * as Models from '@/entities/models';

export type ApiComponentDataDTO = {
    id: number;
    api_component_id: number;
    key: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
};

export const toModel = function (dto: ApiComponentDataDTO) {
    return new Models.ApiComponentData(dto);
};
