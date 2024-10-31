import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export type ComponentList = {
    [key: number]: Types.Objects.NumberObject<Models.TextComponent>;
};

export type GenericList = {
    [key: number]: number[];
};
