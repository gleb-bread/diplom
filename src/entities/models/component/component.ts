import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export class Component extends Models.Model<DTOs.Component.ComponentDTO> {
    private _id: number;

    constructor(dto: DTOs.Component.ComponentDTO) {
        super();
        this._id = dto.id;
    }
    public getDTO(): DTOs.Component.ComponentDTO {
        return {
            id: this._id,
        };
    }

    public get id() {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }
}
