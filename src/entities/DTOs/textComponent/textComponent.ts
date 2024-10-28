import * as Models from '@/entities/models';

export type TextComponentDTO = {
    id: number;
    text: string | null;
    page_id: number;
    created_at: string | null;
    updated_at: string | null;
};

export const toModel = function (dto: TextComponentDTO) {
    return new Models.TextComponent(dto);
};
