import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export type PageList = {
    [key: number]: Types.Objects.NumberObject<Models.Page>;
};

export type GenericList = {
    [key: number]: number[];
};
