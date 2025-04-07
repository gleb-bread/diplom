<script lang="ts" setup>
import type { Props } from '../props';
import { computed, defineComponent } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import * as Models from '@/entities/models';

const nameComponent = 'apiResponseComponent';

defineComponent({ name: nameComponent });

const props = defineProps<Props>();

const componentStore = useComponentStore();

const component = computed(
    () =>
        <Models.ApiComponent>(
            componentStore.getComponents[props.pageId]?.[props.componentId]
        )
);

// Вычисляем отображаемый ответ
const response = computed(() => {
    if (component.value?.response === null) {
        return 'Нажмите кнопку "Отправить" для проверки API';
    }
    // Предполагаем, что response — это JSON-строка, парсим ее
    try {
        const parsedResponse = component.value.response;
        return JSON.stringify(parsedResponse, null, 2); // Красивое форматирование JSON
    } catch (e) {
        return component.value.response; // Если не JSON, выводим как есть
    }
});
</script>

<template>
    <v-expansion-panel
        :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
        title="Ответ API"
    >
        <v-expansion-panel-text class="bg-background">
            <v-card flat>
                <v-card-text>
                    <pre class="response-text">{{ response }}</pre>
                </v-card-text>
            </v-card>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style scoped>
.response-text {
    white-space: pre-wrap; /* Сохраняет форматирование и переносы строк */
    word-break: break-word; /* Переносит длинные строки */
    font-family: monospace; /* Моноширинный шрифт для JSON */
    padding: 8px;
    background-color: #f5f5f5; /* Светлый фон для читаемости */
    border-radius: 4px;
}
</style>
