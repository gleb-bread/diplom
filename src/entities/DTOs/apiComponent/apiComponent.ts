import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';
import * as Types from '@/shared/types';

export type ApiComponentDTO = DTOs.Component.ComponentDTO & {
    type: Types.Component.Types.API;
    name: string | null;
    method: string | null;
    url: string | null;
    cookies: DTOs.ApiComponentCookie.ApiComponentCookieDTO[];
    headers: DTOs.ApiComponentHeader.ApiComponentHeaderDTO[];
    params: DTOs.ApiComponentParam.ApiComponentParamDTO[];
    created_at: string | null;
    updated_at: string | null;
};

export const toModel = function (dto: ApiComponentDTO) {
    return new Models.ApiComponent(dto);
};
