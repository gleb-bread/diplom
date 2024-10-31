import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';
import * as Types from '@/shared/types';

export type ServiceCacheObj<T, K extends keyof T> = {
    [key in T[K] & (string | number | symbol)]: T;
};

export interface ValidatePayload<T, E> {
    response:
        | ARepositoryTypes.ResponsePayloadSuccess<T>
        | ARepositoryTypes.ResponsePayloadError<E>;
    success: (response: ARepositoryTypes.ResponseSuccessPayload<T>) => void;
    error: (response: ARepositoryTypes.ResponsePayloadError<E>) => void;
    finally?: (
        response:
            | ARepositoryTypes.ResponsePayloadSuccess<T>
            | ARepositoryTypes.ResponsePayloadError<E>
    ) => void;
}

export type Response<T> = {
    data: T;
    status: number;
    result: boolean;
};

export type GenericList<T> = {
    genericList: number[];
    entities: Types.Objects.NumberObject<T>;
};
