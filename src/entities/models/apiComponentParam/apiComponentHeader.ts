import * as DTOs from '@/entities/DTOs';
import { Component } from '../component';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';
import { ApiComponentData } from '@/entities/models';

export class ApiComponentParam extends ApiComponentData {
    private _type: Types.Component.ApiComponentDataTypes.PARAM;

    constructor(dto: DTOs.ApiComponentParam.ApiComponentParamDTO) {
        super(dto);

        this._type = dto.type;
    }
    public getDTO(): DTOs.ApiComponentParam.ApiComponentParamDTO {
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
