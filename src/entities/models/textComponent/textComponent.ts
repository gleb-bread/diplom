import * as DTOs from '@/entities/DTOs';
import { Component } from '../component';
import * as Types from '@/shared/types';

export class TextComponent extends Component {
    private _text: string | null;
    private _created_at: string | null;
    private _updated_at: string | null;
    private _type: Types.Component.Types.TEXT;

    constructor(dto: DTOs.TextComponent.TextComponentDTO) {
        super(dto);
        this._text = dto.text;
        this._created_at = dto.created_at;
        this._updated_at = dto.updated_at;
        this._type = dto.type;
    }
    public getDTO(): DTOs.TextComponent.TextComponentDTO {
        const parentDTO = super.getDTO();

        return {
            ...parentDTO,
            type: this._type,
            text: this._text,
            created_at: this._created_at,
            updated_at: this._updated_at,
        };
    }

    public get text() {
        return this._text ?? '';
    }

    public set text(value: string) {
        this._text = value;
    }

    public get created_at() {
        return this._created_at;
    }

    public get updated_at() {
        return this._updated_at;
    }

    public get type() {
        return this._type;
    }
}
