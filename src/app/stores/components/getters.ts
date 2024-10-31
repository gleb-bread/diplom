import { computed } from 'vue';
import { initState } from './state';

export const initGetters = function (state: ReturnType<typeof initState>) {
    const getComponents = computed(() => state.components.value);

    //Компонентные геттеры
    const getGenericList = computed(() => state.genericList.value);
    const getSelectPage = computed(() => state.selectPage.value);

    return { getComponents, getGenericList, getSelectPage };
};
