import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';
import * as Types from '@/shared/types';

export class ProjectCreateElement extends Models.Model<DTOs.CreateElementProject.CreateElementProjectDTO> {
    private _type: Types.Project.ElementTypes;
    private _folder_id: null | number = null;
    private _project_id: number;

    constructor(dto: DTOs.CreateElementProject.CreateElementProjectDTO) {
        super();
        this._type = dto.type;
        this._folder_id = dto.folder_id ?? null;
        this._project_id = dto.project_id;
    }
    public getDTO(): DTOs.CreateElementProject.CreateElementProjectDTO {
        return {
            type: this._type,
            folder_id: this._folder_id,
            project_id: this._project_id,
        };
    }

    public get type() {
        return this._type;
    }
    public set type(v: Types.Project.ElementTypes) {
        this._type = v;
    }
    public get folder_id() {
        return this._folder_id;
    }
    public set folder_id(v: number | null) {
        this._folder_id = v;
    }
    public get project_id() {
        return this._project_id;
    }
    public set project_id(v: number) {
        this._project_id = v;
    }
}
