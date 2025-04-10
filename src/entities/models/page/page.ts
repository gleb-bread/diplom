import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';
import { ProjectElement } from '@/entities/models/project/projectElement/projectElement';
import * as Types from '@/shared/types';

export class Page extends ProjectElement {
    private _folder_id: number | null;
    private _type: Types.Project.ElementTypes.PAGE;
    private _public_id: string;

    constructor(dto: DTOs.Page.PageDTO) {
        super(dto);

        this._folder_id = dto.folder_id;
        this._type = dto.type;
        this._public_id = `${dto.type}_${super.id}`;
    }
    public getDTO(): DTOs.Page.PageDTO {
        const parentDTO = super.getDTO();

        return {
            ...parentDTO,
            folder_id: this._folder_id,
            type: this._type,
        };
    }

    public get public_id() {
        return this._public_id;
    }

    public get folder_id() {
        return this._folder_id;
    }

    public get type() {
        return this._type;
    }
}
