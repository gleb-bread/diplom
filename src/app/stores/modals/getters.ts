import { computed } from 'vue';
import { initState } from './state';
import * as StoreTypes from './types';

export const initGetters = function (state: ReturnType<typeof initState>) {
    const getInstant = computed(
        () => (key: keyof StoreTypes.Instant) => state.instant.value[key]
    );

    return { getInstant };
};
