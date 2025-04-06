import { ref } from 'vue';
import * as Types from '@/shared/types';
import * as StoreTypes from './types';

export const initState = function () {
    const instant = ref<StoreTypes.Instant>({
        changeProject: false,
        createProject: false,
    });

    return { instant };
};
