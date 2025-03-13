import * as RepositoryTypes from './types';
import { AxiosError, type AxiosRequestConfig } from 'axios';
import { type AxiosResponse } from 'axios';
import * as ARepositoryTemplates from './templates';
import axios from 'axios';

export class ARepository {
    private _domen: string;
    private _config: RepositoryTypes.RepositoryConfig = {
        headers: { Accept: 'application/json' },
    };
    constructor(
        private _url: string,
        config?: RepositoryTypes.RepositoryConfig
    ) {
        this._domen =
            process.env.NODE_ENV === 'development'
                ? 'http://localhost:8000'
                : 'https://remfy.ru';

        this._config = { ...this._config, ...config };
    }

    protected async GET<T>() {
        try {
            const config = this.getConfigRequestGet();
            const response = await axios.get<T>(this.getUrl(), config);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error;
            } else {
                console.log('unexpected error: ', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    protected async POST<T>(): Promise<AxiosResponse<T>> {
        try {
            const config = this.getConfig();
            const data = this.getData();
            const response = await axios.post<T>(this.getUrl(), data, config);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error;
            } else {
                console.log('unexpected error: ', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    protected async PATCH<T>(): Promise<AxiosResponse<T>> {
        try {
            const config = this.getConfig();
            const data = this.getData();
            const response = await axios.patch<T>(this.getUrl(), data, config);
            return response;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw error;
            } else {
                console.log('unexpected error: ', error);
                throw new Error('Unexpected error occurred');
            }
        }
    }

    protected async PUT() {
        const config = this.getConfig();
        const data = this.getData();
        return axios.put(this.getUrl(), data, config);
    }

    protected async DELETE() {
        const config = this.getConfigRequestGet();
        return axios.delete(this.getUrl(), config);
    }

    private getUrl() {
        if (this._config?.id && this._config?.path) {
            return `${this._domen}/${this._url}/${this._config.id}/${this._config.path}`;
        } else if (this._config?.id) {
            return `${this._domen}/${this._url}/${this._config.id}`;
        } else if (this._config?.path) {
            return `${this._domen}/${this._url}/${this._config.path}`;
        } else {
            return `${this._domen}/${this._url}`;
        }
    }

    private getConfig(): AxiosRequestConfig {
        if (this._config?.headers) {
            return { headers: this._config.headers } as AxiosRequestConfig;
        } else {
            return {
                headers: {
                    Accept: 'application/json',
                },
            } as AxiosRequestConfig;
        }
    }

    private getConfigRequestGet(): AxiosRequestConfig {
        const configRequest = this.getConfig();
        if (this._config?.payload) {
            configRequest.params = this._config.payload;
        }

        return configRequest;
    }

    private getData() {
        if (this._config?.payload) {
            return this._config.payload;
        } else {
            return {};
        }
    }

    protected get payload() {
        if (!this._config) {
            this._config = {};
        }
        if (!this._config.payload) {
            this._config.payload = {};
        }

        return { ...this._config.payload };
    }

    protected set payload(params: any) {
        if (!this._config) {
            this._config = {};
        }

        if (!this._config.payload) {
            this._config.payload = {};
        }

        this._config.payload = { ...params };
    }

    protected get config(): RepositoryTypes.RepositoryConfig {
        if (!this._config) {
            return {} as RepositoryTypes.RepositoryConfig;
        }

        return { ...this._config };
    }

    protected set config(config: RepositoryTypes.RepositoryConfig) {
        this._config = { ...config };
    }

    protected addParamsInConfig(config: RepositoryTypes.RepositoryConfig) {
        this._config = { ...this._config, ...config };
    }

    protected shallowEqual(
        obj1: Record<string, any>,
        obj2: Record<string, any>
    ): boolean {
        if (obj1 === obj2) {
            return true;
        }

        if (
            typeof obj1 !== 'object' ||
            obj1 === null ||
            typeof obj2 !== 'object' ||
            obj2 === null
        ) {
            return false;
        }

        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        return true;
    }

    protected generateResponse<T>(payload: {
        response?: AxiosResponse<T, any>;
    }): RepositoryTypes.ResponsePayload<T> {
        const result = {
            response: payload.response ?? null,
            ...this.getResultByStatusRequst(payload.response),
        };

        return result;
    }

    protected generateResponseSuccess<T>(payload: {
        response?: AxiosResponse<RepositoryTypes.ServerResponse<T>, any>;
    }): RepositoryTypes.ResponsePayloadSuccess<T> {
        const result = {
            response: payload.response ?? null,
            status: payload.response?.status ?? 200,
            result: true,
        } as RepositoryTypes.ResponsePayloadSuccess<T>;

        return result;
    }

    protected generateResponseError<T = any>(payload: {
        response?: AxiosError<T, any>;
    }): RepositoryTypes.ResponsePayloadError<T> {
        const result = {
            response: payload.response ?? null,
            result: false,
            status: payload.response?.response?.status ?? 400,
        } as RepositoryTypes.ResponsePayloadError<T>;

        return result;
    }

    private getResultByStatusRequst(
        response?: AxiosResponse<any, any> | AxiosError<any, any>
    ) {
        if (response instanceof AxiosError) {
            const status = response?.response?.status ?? 400;

            return {
                status: status,
                result: this.checkResultByStatus(status),
            };
        } else {
            const status = response?.status ?? 400;

            return {
                status: status,
                result: this.checkResultByStatus(status),
            };
        }
    }

    private checkResultByStatus(status: number) {
        if (status != 200) {
            return false;
        } else {
            return true;
        }
    }

    protected get URL() {
        return this._url;
    }

    protected set URL(value: string) {
        this._url = value;
    }
}

export class ARepositorySecurity extends ARepository {
    constructor(url: string, config?: RepositoryTypes.RepositoryConfig) {
        super(url, { ...ARepositoryTemplates.SecurityConfig(), ...config });
    }
}
