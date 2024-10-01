import * as ServiceTypes from './types';
import * as ARepositoryTypes from '@/entities/repositories/ARepository/types';

export class Service {
    protected getCacheObject<T, K extends keyof T>(array: T[], keyCache: K) {
        return array.reduce((obj, value) => {
            const key = value[keyCache];
            if (
                typeof key === 'string' ||
                typeof key === 'number' ||
                typeof key === 'symbol'
            ) {
                obj[key] = value;
            }
            return obj;
        }, {} as ServiceTypes.ServiceCacheObj<T, K>);
    }

    protected getIndexList<T, K extends keyof T>(array: T[], keyCache: K) {
        return array.reduce((list, value) => {
            const key = value[keyCache];
            list.push(key);
            return list;
        }, [] as Array<T[K]>);
    }

    protected validateRequest<T>(payload: ServiceTypes.ValidatePayload<T>) {
        try {
            if (!(payload.response.result && payload.response.response)) {
                console.error(payload.response);
                payload.error(payload.response);
            } else {
                payload.success(
                    payload.response as unknown as ARepositoryTypes.ResponseSuccessPayload<T>
                );
            }
        } catch (err) {
            console.error('Validation error:', err);
            payload.error({
                status: 400,
                result: false,
                response: null,
            });
        } finally {
            if (payload.finally) {
                payload.finally(payload.response);
            }
        }
    }
}
