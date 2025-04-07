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
