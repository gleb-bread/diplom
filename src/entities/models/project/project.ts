import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export class Project extends Models.Model<DTOs.Project.ProjectDTO> {
    private _id: number;
    private _type: null;
    private _private: boolean;
    private _archive: boolean;
    private _user_id: number;
    private _hash: string;
    private _ref: string;
    private _name: string;
    private _logo: string | null;
    private _created_at: string | null;
    private _updated_at: string | null;

    constructor(dto: DTOs.Project.ProjectDTO) {
        super();

        this._id = dto.id;
        this._type = dto.type;
        this._private = dto.private;
        this._archive = dto.archive;
        this._user_id = dto.user_id;
        this._hash = dto.hash;
        this._ref = dto.ref;
        this._name = dto.name;
        this._logo = dto.logo;
        this._created_at = dto.created_at;
        this._updated_at = dto.updated_at;
    }
    public getDTO(): DTOs.Project.ProjectDTO {
        return {
            id: this._id,
            type: this._type,
            private: this._private,
            archive: this._archive,
            user_id: this._user_id,
            hash: this._hash,
            ref: this._ref,
            name: this._name,
            logo: this._logo,
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

    public set archive(v: boolean) {
        this._archive = v;
    }

    public get user_id() {
        return this._user_id;
    }

    public get hash() {
        return this._hash;
    }

    public get ref() {
        return this._ref;
    }
    public get name() {
        return this._name;
    }

    public set name(v: string) {
        this._name = v;
    }

    public get logo() {
        return this._logo;
    }

    public get created_at() {
        return this._created_at;
    }

    public get updated_at() {
        return this._updated_at;
    }
}
