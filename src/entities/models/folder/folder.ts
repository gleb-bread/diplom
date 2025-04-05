import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';
import { ProjectElement } from '@/entities/models/project/projectElement/projectElement';
import * as Types from '@/shared/types';
import { Helper } from '@/shared/helpers';

export class Folder extends ProjectElement {
    private _parent_id: null | number;
    private _type: Types.Project.ElementTypes.FOLDER;
    private _items: Types.Project.AnyProjectModels[];
    private _public_id: string;

    constructor(dto: DTOs.Folder.FolderDTO) {
        super(dto);

        this._parent_id = dto.parent_id;
        this._type = dto.type;
        this._items = dto.items.map((item) =>
            Models.ProjectElement.createFromDTO(item)
        );
        this._public_id = `${dto.type}_${super.id}`;
    }
    public getDTO(): DTOs.Folder.FolderDTO {
        const parentDTO = super.getDTO();

        return {
            ...parentDTO,
            parent_id: this._parent_id,
            type: this._type,
            items: this._items.map((item) => item.getDTO()),
        };
    }

    public get public_id() {
        return this._public_id;
    }

    public get parent_id() {
        return this._parent_id;
    }
    public get type() {
        return this._type;
    }

    public get items() {
        return this._items;
    }

    public get items_generic_list() {
        return Helper.ProjectElementsAPI.getIndexListWithGroupedAlphabeticalSorting(
            this._items,
            'public_id',
            'name'
        );
    }
}
