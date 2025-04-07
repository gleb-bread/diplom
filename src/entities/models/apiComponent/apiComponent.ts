import * as DTOs from '@/entities/DTOs';
import { Component } from '../component';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export class ApiComponent extends Component {
    private _type: Types.Component.Types.API;
    private _name: string | null;
    private _method: string | null;
    private _url: string | null;
    private _created_at: string | null;
    private _updated_at: string | null;
    private _status: Types.Component.ApiComponentStatuses | null;
    private _response: JSON | null;
    private _cookies: Models.ApiComponentCookie[];
    private _headers: Models.ApiComponentHeader[];
    private _params: Models.ApiComponentParam[];

    constructor(dto: DTOs.ApiComponent.ApiComponentDTO) {
        super(dto);
        this._type = dto.type;
        this._name = dto.name;
        this._method = dto.method;
        this._url = dto.url;
        this._created_at = dto.created_at;
        this._updated_at = dto.updated_at;
        this._cookies = dto.cookies.map(DTOs.ApiComponentCookie.toModel);
        this._headers = dto.headers.map(DTOs.ApiComponentHeader.toModel);
        this._params = dto.params.map(DTOs.ApiComponentParam.toModel);
        this._status = dto.status;
        this._response = dto.response ? JSON.parse(dto.response) : null;
    }
    public getDTO(): DTOs.ApiComponent.ApiComponentDTO {
        const parentDTO = super.getDTO();

        return {
            ...parentDTO,
            type: this._type,
            name: this._name,
            method: this._method,
            url: this._url,
            cookies: this._cookies.map((item) => item.getDTO()),
            headers: this._headers.map((item) => item.getDTO()),
            params: this._params.map((item) => item.getDTO()),
            created_at: this._created_at,
            updated_at: this._updated_at,
            status: this._status,
            response: this._response ? JSON.stringify(this._response) : null,
        };
    }

    public get type() {
        return this._type;
    }
    public get name() {
        return this._name;
    }
    public set name(v: string | null) {
        this._name = v;
    }
    public get method() {
        return this._method;
    }
    public set method(v: string | null) {
        this._method = v;
    }
    public get url() {
        return this._url;
    }
    public set url(v: string | null) {
        this._url = v;
    }
    public get created_at() {
        return this._created_at;
    }
    public get updated_at() {
        return this._updated_at;
    }
    public get cookies() {
        return this._cookies;
    }
    public set cookies(v: Models.ApiComponentCookie[]) {
        this._cookies = v;
    }
    public get headers() {
        return this._headers;
    }
    public set headers(v: Models.ApiComponentHeader[]) {
        this._headers = v;
    }
    public get params() {
        return this._params;
    }
    public set params(v: Models.ApiComponentParam[]) {
        this._params = v;
    }
    public get status() {
        return this._status;
    }

    public get response() {
        return this._response;
    }
}
