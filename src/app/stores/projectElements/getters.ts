import { computed } from 'vue';
import { initState } from './state';

export const initGetters = function (state: ReturnType<typeof initState>) {
    const getElements = computed(() => state.elements.value);

    //Компонентные геттеры
    const getGenericList = computed(() => state.genericList.value);
    const getSelectPage = computed(() => state.selectPage.value);

    return { getElements, getGenericList, getSelectPage };
};
