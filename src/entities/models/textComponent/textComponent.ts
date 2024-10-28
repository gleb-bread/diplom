import * as DTOs from '@/entities/DTOs';
import * as Models from '@/entities/models';

export class TextComponent extends Models.Model<DTOs.TextComponent.TextComponentDTO> {
    private _id: number;
    private _text: string | null;
    private _page_id: number;
    private _created_at: string | null;
    private _updated_at: string | null;

    constructor(dto: DTOs.TextComponent.TextComponentDTO) {
        super();
        this._id = dto.id;
        this._text = dto.text;
        this._page_id = dto.page_id;
        this._created_at = dto.created_at;
        this._updated_at = dto.updated_at;
    }
    public getDTO(): DTOs.TextComponent.TextComponentDTO {
        return {
            id: this._id,
            text: this._text,
            page_id: this._page_id,
            created_at: this._created_at,
            updated_at: this._updated_at,
        };
    }

    public get id() {
        return this._id;
    }

    public get text() {
        return this._text ?? '';
    }

    public set text(value: string) {
        this._text = value;
    }

    public get page_id() {
        return this._page_id;
    }

    public get created_at() {
        return this._created_at;
    }

    public get updated_at() {
        return this._updated_at;
    }
}
