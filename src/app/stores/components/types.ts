import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export type ComponentList = {
    [
        key: string
    ]: Types.Objects.NumberObject<Types.Component.AnyComponentModel>;
};

export type GenericList = {
    [key: string]: number[];
};
