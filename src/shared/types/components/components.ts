import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export type AnyComponentDTO =
    | DTOs.TextComponent.TextComponentDTO
    | DTOs.ApiComponent.ApiComponentDTO;

export type AnyComponentModel = Models.TextComponent | Models.ApiComponent;

export enum Types {
    TEXT = 'text',
    API = 'api',
}

export enum ApiComponentDataTypes {
    COOKIE = 'cookie',
    PARAM = 'param',
    HEADER = 'header',
}

export type AnyApiComponentDataDTO =
    | DTOs.ApiComponentCookie.ApiComponentCookieDTO
    | DTOs.ApiComponentHeader.ApiComponentHeaderDTO
    | DTOs.ApiComponentParam.ApiComponentParamDTO;

export type AnyApiComponentDataModel =
    | Models.ApiComponentCookie
    | Models.ApiComponentHeader
    | Models.ApiComponentParam;

export type AllTypesValuesApiComponentData =
    (typeof ApiComponentDataTypes)[keyof typeof ApiComponentDataTypes];
