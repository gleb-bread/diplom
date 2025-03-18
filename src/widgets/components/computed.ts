import { useComponentStore } from '@/app/stores/components';
import { computed } from 'vue';

export const initComputed = function () {
    const componentStore = useComponentStore();

    const getComponent = computed(
        () => (pageId: number, componentId: number) =>
            componentStore.getComponents[pageId][componentId]
    );

    return { getComponent };
};
