import * as Models from '@/entities/models';
import * as DTOs from '@/entities/DTOs';

export type TextComponentDTO = DTOs.Component.ComponentDTO & {
    text: string | null;
    page_id: number;
    created_at: string | null;
    updated_at: string | null;
};

export const toModel = function (dto: TextComponentDTO) {
    return new Models.TextComponent(dto);
};
