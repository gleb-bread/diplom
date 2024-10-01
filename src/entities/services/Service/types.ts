import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';

export type ServiceCacheObj<T, K extends keyof T> = {
    [key in T[K] & (string | number | symbol)]: T;
};

export interface ValidatePayload<T> {
    response: ARepositoryTypes.ResponsePayload<T>;
    success: (response: ARepositoryTypes.ResponseSuccessPayload<T>) => void;
    error: (response: ARepositoryTypes.ResponsePayload<T>) => void;
    finally?: (response: ARepositoryTypes.ResponsePayload<T>) => void;
}

export type Response<T> = {
    data: T;
    status: number;
    result: boolean;
};
