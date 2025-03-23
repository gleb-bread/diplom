import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';
import * as Types from '@/shared/types';

export class ProjectElement extends Models.Model<DTOs.ProjectElement.ProjectElementDTO> {
    private _id: number;
    private _name: string;
    private _private: boolean;
    private _archive: boolean;
    private _user_id: number;
    private _project_id: number;
    private _hash: string;
    private _created_at: string;
    private _updated_at: string;

    public static createFromDTO(dto: Types.Project.AnyProjectElement) {
        switch (dto.type) {
            case Types.Project.ElementTypes.FOLDER:
                return new Models.Folder(dto);
            case Types.Project.ElementTypes.PAGE:
                return new Models.Page(dto);
            default:
                throw new Error('Undifined component!');
        }
    }

    constructor(dto: DTOs.ProjectElement.ProjectElementDTO) {
        super();

        this._id = dto.id;
        this._name = dto.name;
        this._private = dto.private;
        this._archive = dto.archive;
        this._user_id = dto.user_id;
        this._project_id = dto.project_id;
        this._hash = dto.hash;
        this._created_at = dto.created_at;
        this._updated_at = dto.updated_at;
    }
    public getDTO(): DTOs.ProjectElement.ProjectElementDTO {
        return {
            id: this._id,
            name: this._name,
            private: this._private,
            archive: this._archive,
            user_id: this._user_id,
            project_id: this._project_id,
            hash: this._hash,
            created_at: this._created_at,
            updated_at: this._updated_at,
        };
    }

    public get id() {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get private() {
        return this._private;
    }

    public get archive() {
        return this._archive;
    }

    public get user_id() {
        return this._user_id;
    }

    public get project_id() {
        return this._project_id;
    }

    public get hash() {
        return this._hash;
    }

    public get created_at() {
        return this._created_at;
    }

    public get updated_at() {
        return this._updated_at;
    }
}
