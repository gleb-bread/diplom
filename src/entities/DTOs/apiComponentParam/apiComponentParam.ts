import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';
import * as Types from '@/shared/types';

export type ApiComponentParamDTO = DTOs.ApiComponentData.ApiComponentDataDTO & {
    type: Types.Component.ApiComponentDataTypes.PARAM;
};

export const toModel = function (dto: ApiComponentParamDTO) {
    return new Models.ApiComponentParam(dto);
};
