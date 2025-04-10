import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';
import * as Types from '@/shared/types';
import { TextComponent } from '@/entities/models';
import { ApiComponent } from '@/entities/models';

export class Component extends Models.Model<DTOs.Component.ComponentDTO> {
    private _id: number;
    private _page_id: number;
    private _component_id: number;

    constructor(dto: DTOs.Component.ComponentDTO) {
        super();
        this._id = dto.id;
        this._page_id = dto.page_id;
        this._component_id = dto.component_id;
    }
    public getDTO(): DTOs.Component.ComponentDTO {
        return {
            id: this._id,
            page_id: this._page_id,
            component_id: this._component_id,
        };
    }

    public static createFromDTO(dto: Types.Component.AnyComponentDTO) {
        switch (dto.type) {
            case Types.Component.Types.TEXT:
                return new TextComponent(dto);
            case Types.Component.Types.API:
                return new ApiComponent(dto);
            default:
                throw new Error('Undifined component!');
        }
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get page_id() {
        return this._page_id;
    }

    public get component_id() {
        return this._component_id;
    }

    public set component_id(v: number) {
        this._component_id = v;
    }
}
