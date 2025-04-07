import * as DTOs from '@/entities/DTOs';
import { Component } from '../component';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export class ApiComponentData extends Models.Model<DTOs.ApiComponentData.ApiComponentDataDTO> {
    private _id: number;
    private _api_component_id: number;
    private _key: string;
    private _value: string;
    private _created_at: string | null;
    private _updated_at: string | null;

    constructor(dto: DTOs.ApiComponentData.ApiComponentDataDTO) {
        super();
        this._id = dto.id;
        this._api_component_id = dto.api_component_id;
        this._key = dto.key;
        this._value = dto.value;
        this._created_at = dto.created_at;
        this._updated_at = dto.updated_at;
    }

    public static createFromDTO(
        dto: Types.Component.AnyApiComponentDataDTO
    ): Types.Component.AnyApiComponentDataModel {
        switch (dto.type) {
            case Types.Component.ApiComponentDataTypes.COOKIE:
                return new Models.ApiComponentCookie(dto);
            case Types.Component.ApiComponentDataTypes.HEADER:
                return new Models.ApiComponentHeader(dto);
            case Types.Component.ApiComponentDataTypes.PARAM:
                return new Models.ApiComponentParam(dto);
            default:
                throw new Error('Undifined api component data!');
        }
    }

    public getDTO(): DTOs.ApiComponentData.ApiComponentDataDTO {
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
    public set id(v: number) {
        this._id = v;
    }
    public get api_component_id() {
        return this._api_component_id;
    }
    public set api_component_id(v: number) {
        this._api_component_id = v;
    }
    public get key() {
        return this._key;
    }
    public set key(v: string) {
        this._key = v;
    }
    public get value() {
        return this._value;
    }
    public set value(v: string) {
        this._value = v;
    }
    public get created_at() {
        return this._created_at;
    }
    public get updated_at() {
        return this._updated_at;
    }
}
