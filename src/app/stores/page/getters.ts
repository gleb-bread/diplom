import { computed } from 'vue';
import { initState } from './state';

export const initGetters = function (state: ReturnType<typeof initState>) {
    const getPages = computed(() => state.pages.value);

    //Компонентные геттеры
    const getGenericList = computed(() => state.genericList.value);
    const getSelectPage = computed(() => state.selectPage.value);

    return { getPages, getGenericList, getSelectPage };
};
