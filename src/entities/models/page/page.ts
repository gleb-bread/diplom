import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export class Page extends Models.Model<DTOs.Page.PageDTO> {
    private _id: number;
    private _type: null;
    private _private: boolean;
    private _archive: boolean;
    private _user_id: number;
    private _hash: string;
    private _project_id: number;
    private _name: string;
    private _created_at: string | null;
    private _updated_at: string | null;

    constructor(dto: DTOs.Page.PageDTO) {
        super();

        this._id = dto.id;
        this._type = dto.type;
        this._private = dto.private;
        this._archive = dto.archive;
        this._user_id = dto.user_id;
        this._hash = dto.hash;
        this._project_id = dto.project_id;
        this._name = dto.name;
        this._created_at = dto.created_at;
        this._updated_at = dto.updated_at;
    }
    public getDTO(): DTOs.Page.PageDTO {
        return {
            id: this._id,
            type: this._type,
            private: this._private,
            archive: this._archive,
            user_id: this._user_id,
            hash: this._hash,
            project_id: this._project_id,
            name: this._name,
            created_at: this._created_at,
            updated_at: this._updated_at,
        };
    }

    public get id() {
        return this._id;
    }
    public get type() {
        return this._type;
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
    public get hash() {
        return this._hash;
    }
    public get project_id() {
        return this._project_id;
    }
    public get name() {
        return this._name;
    }
    public get created_at() {
        return this._created_at;
    }
    public get updated_at() {
        return this._updated_at;
    }
}
