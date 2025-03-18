import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';
import * as Types from '@/shared/types';

export type TextComponentDTO = DTOs.Component.ComponentDTO & {
    type: Types.Component.Types.TEXT;
    text: string | null;
    created_at: string | null;
    updated_at: string | null;
};

export const toModel = function (dto: TextComponentDTO) {
    return new Models.TextComponent(dto);
};
