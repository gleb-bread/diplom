import * as ServiceTypes from '../Service/types';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';

export const getCacheObject = function <
    T extends Types.Project.AnyProjectModels,
    K extends keyof T,
>(array: T[], keyCache: K) {
    return array.reduce(
        (obj, value) => {
            const key = value[keyCache];
            if (
                typeof key === 'string' ||
                typeof key === 'number' ||
                typeof key === 'symbol'
            ) {
                obj[key] = value;

                if (value.type === Types.Project.ElementTypes.FOLDER) {
                    const items = value.items;

                    const models = items.map(
                        Models.ProjectElement.createFromDTO
                    );

                    obj = { ...obj, ...getCacheObject(models, 'public_id') };
                }
            }
            return obj;
        },
        {} as ServiceTypes.ServiceCacheObj<T, K>
    );
};
