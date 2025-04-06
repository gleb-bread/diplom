import { initState } from './state';
import * as Types from '@/shared/types';
import * as Services from '@/entities/services';
import * as StoreTypes from './types';

export const initActions = function (state: ReturnType<typeof initState>) {
    const setInstant = async function (
        key: keyof StoreTypes.Instant,
        flag: boolean
    ) {
        state.instant.value[key] = flag;
    };

    return { setInstant };
};
