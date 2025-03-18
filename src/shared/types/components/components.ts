import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export type AnyComponentDTO = DTOs.TextComponent.TextComponentDTO;

export type AnyComponentModel = Models.TextComponent;

export enum Types {
    TEXT = 'text',
}
