import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export enum ElementTypes {
    PAGE = 'page',
    FOLDER = 'folder',
}

export type AnyProjectElement = DTOs.Page.PageDTO | DTOs.Folder.FolderDTO;

export type AnyProjectModels = Models.Page | Models.Folder;
