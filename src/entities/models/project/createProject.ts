import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export class CreateProject extends Models.Model<DTOs.CreateProject.CreateProjectDTO> {
    private _type: null;
    private _private: boolean;
    private _archive: boolean;
    private _user_id: number;
    private _name: string;
    private _logo: string | null;

    constructor(dto: DTOs.CreateProject.CreateProjectDTO) {
        super();

        this._type = dto.type;
        this._private = dto.private;
        this._archive = dto.archive;
        this._user_id = dto.user_id;
        this._name = dto.name;
        this._logo = dto.logo;
    }
    public getDTO(): DTOs.CreateProject.CreateProjectDTO {
        return {
            type: this._type,
            private: this._private,
            archive: this._archive,
            user_id: this._user_id,
            name: this._name,
            logo: this._logo,
        };
    }

    public get type() {
        return this._type;
    }

    public set type(v: null) {
        this._type = v;
    }

    public get private() {
        return this._private;
    }

    public set private(v: boolean) {
        this._private = v;
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

    public set user_id(v: number) {
        this._user_id = v;
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

    public set logo(v: string | null) {
        this._logo = v;
    }
}
