import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';
import * as Types from '@/shared/types';

export type ApiComponentCookieDTO =
    DTOs.ApiComponentData.ApiComponentDataDTO & {
        type: Types.Component.ApiComponentDataTypes.COOKIE;
    };

export const toModel = function (dto: ApiComponentCookieDTO) {
    return new Models.ApiComponentCookie(dto);
};
