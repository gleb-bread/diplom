import * as DTOs from '@/entities/DTOs';
import { Component } from '../component';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export class ApiComponentParam extends Models.Model<DTOs.ApiComponentParam.ApiComponentParamDTO> {
    private _id: number;
    private _api_component_id: number;
    private _key: string;
    private _value: string;
    private _created_at: string | null;
    private _updated_at: string | null;

    constructor(dto: DTOs.ApiComponentParam.ApiComponentParamDTO) {
        super();
        this._id = dto.id;
        this._api_component_id = dto.api_component_id;
        this._key = dto.key;
        this._value = dto.value;
        this._created_at = dto.created_at;
        this._updated_at = dto.updated_at;
    }
    public getDTO(): DTOs.ApiComponentParam.ApiComponentParamDTO {
        return {
            id: this._id,
            api_component_id: this._api_component_id,
            key: this._key,
            value: this._value,
            created_at: this._created_at,
            updated_at: this._updated_at,
        };
    }

    public get id() {
        return this._id;
    }
    public get api_component_id() {
        return this._api_component_id;
    }
    public get key() {
        return this._key;
    }
    public get value() {
        return this._value;
    }
    public get created_at() {
        return this._created_at;
    }
    public get updated_at() {
        return this._updated_at;
    }
}
