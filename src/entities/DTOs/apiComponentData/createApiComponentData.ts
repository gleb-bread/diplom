import * as Models from '@/entities/models';
import * as Types from '@/shared/types';

export type CreateApiComponentDataDTO = {
    api_component_id: number;
    type: (typeof Types.Component.ApiComponentDataTypes)[keyof typeof Types.Component.ApiComponentDataTypes];
};

export const toModel = function (dto: CreateApiComponentDataDTO) {
    return new Models.CreateApiComponentData(dto);
};
