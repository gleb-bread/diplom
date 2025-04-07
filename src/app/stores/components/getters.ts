import { computed } from 'vue';
import { initState } from './state';
import { initActions } from './actions';

export const initGetters = function (state: ReturnType<typeof initState>) {
    const Actions = initActions(state);

    const getComponents = computed(() => state.components.value);

    //Компонентные геттеры
    const getGenericList = computed(() => state.genericList.value);

    const getFocusComponentHash = computed(() => {
        const componentId = state.focusComponent.value ?? 0;

        return Actions.getComponentHashById(componentId);
    });

    return {
        getComponents,
        getGenericList,
        getFocusComponentHash,
    };
};
