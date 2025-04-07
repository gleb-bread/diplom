import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';
import * as Types from '@/shared/types';

export type ApiComponentCookieDTO = {
    id: number;
    api_component_id: number;
    key: string;
    value: string;
    created_at: string | null;
    updated_at: string | null;
};

export const toModel = function (dto: ApiComponentCookieDTO) {
    return new Models.ApiComponentCookie(dto);
};
