import * as DTOs from '@/entities/DTOs';
import { Component } from '../component';
import * as Types from '@/shared/types';
import { ApiComponentData } from '@/entities/models';

export class ApiComponentHeader extends ApiComponentData {
    private _type: Types.Component.ApiComponentDataTypes.HEADER;

    constructor(dto: DTOs.ApiComponentHeader.ApiComponentHeaderDTO) {
        super(dto);

        this._type = dto.type;
    }
    public getDTO(): DTOs.ApiComponentHeader.ApiComponentHeaderDTO {
        const parentDTO = super.getDTO();

        return {
            ...parentDTO,
            type: this._type,
        };
    }

    public get type() {
        return this._type;
    }
}
