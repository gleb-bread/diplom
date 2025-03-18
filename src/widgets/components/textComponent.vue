<script lang="ts" setup>
import WrapperComponent from './WrapperComponent.vue';
import type { Props } from './props';
import { computed } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import textAreaComponent from './TextComponent/textAreaComponent.vue';

const props = defineProps<Props>();

const componentStore = useComponentStore();

const component = computed(
    () => componentStore.getComponents[props.pageId][props.componentId]
);
</script>

<template>
    <wrapper-component v-bind="props">
        <template #default="{ isActive }">
            <textAreaComponent
                v-if="isActive"
                :page-id="props.pageId"
                :component-id="props.componentId"
            >
            </textAreaComponent>
            <div v-else v-html="$MARKDOWN.getHTML(component.text)"></div>
        </template>
    </wrapper-component>
</template>

<style scoped>
.dynamic-textarea {
    min-height: 50px;
    width: 100%;
    padding: 8px;
    resize: none; /* Запрещаем изменение размера */
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 14px;

    /* Убираем подсветку при клике */
    outline: none;
    box-shadow: none;
}

.dynamic-textarea:focus {
    outline: none;
    box-shadow: none;
}
</style>
