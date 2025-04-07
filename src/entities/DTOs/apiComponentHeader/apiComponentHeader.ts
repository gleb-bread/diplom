import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';
import * as Types from '@/shared/types';

export type ApiComponentHeaderDTO =
    DTOs.ApiComponentData.ApiComponentDataDTO & {
        type: Types.Component.ApiComponentDataTypes.HEADER;
    };

export const toModel = function (dto: ApiComponentHeaderDTO) {
    return new Models.ApiComponentHeader(dto);
};
