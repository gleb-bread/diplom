import * as DTOs from '@/entities/DTOs';
import { Component } from '../component';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export class CreateApiComponentData extends Models.Model<DTOs.CreateApiComponentData.CreateApiComponentDataDTO> {
    private _api_component_id: number;
    private _type: Types.Component.AllTypesValuesApiComponentData;

    constructor(dto: DTOs.CreateApiComponentData.CreateApiComponentDataDTO) {
        super();

        this._api_component_id = dto.api_component_id;
        this._type = dto.type;
    }

    public getDTO(): DTOs.CreateApiComponentData.CreateApiComponentDataDTO {
        return {
            api_component_id: this._api_component_id,
            type: this._type,
        };
    }

    public get api_component_id() {
        return this._api_component_id;
    }

    public set api_component_id(v: number) {
        this._api_component_id = v;
    }

    public get type() {
        return this._type;
    }

    public set type(v: Types.Component.AllTypesValuesApiComponentData) {
        this._type = v;
    }
}
