import * as Models from '@/entities/models';

export type ComponentDTO = {
    id: number;
};

export const toModel = function (dto: ComponentDTO) {
    return new Models.Component(dto);
};
