import * as DTOs from '@/entities/DTOs';
import { Component } from '../component';
import * as Types from '@/shared/types';
import { ApiComponentData } from '@/entities/models';

export class ApiComponentCookie extends ApiComponentData {
    private _type: Types.Component.ApiComponentDataTypes.COOKIE;

    constructor(dto: DTOs.ApiComponentCookie.ApiComponentCookieDTO) {
        super(dto);

        this._type = dto.type;
    }
    public getDTO(): DTOs.ApiComponentCookie.ApiComponentCookieDTO {
        const parentDTO = super.getDTO();

        return {
            ...parentDTO,
            type: this._type,
        };
    }

    public get type(){
        return this._type;
    }
}
