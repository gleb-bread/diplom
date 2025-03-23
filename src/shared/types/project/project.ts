import * as DTOs from '@/entities/DTOs';

export enum ElementTypes {
    PAGE = 'page',
    FOLDER = 'folder',
}

export type AnyProjectElement = DTOs.Page.PageDTO | DTOs.Folder.FolderDTO;
