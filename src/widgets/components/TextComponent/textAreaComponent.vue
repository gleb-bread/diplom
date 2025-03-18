<script lang="ts" setup>
import type { Props } from '../props';
import { initComputed } from '../computed';
import { ref, onMounted, watch, nextTick, computed } from 'vue';
import { useComponentStore } from '@/app/stores/components';

const props = defineProps<Props>();

const componentStore = useComponentStore();

const { getComponent } = initComputed();

const component = computed(
    () => componentStore.getComponents[props.pageId][props.componentId]
);

const textareaRef = ref<HTMLTextAreaElement | null>(null);

const text = ref(component.value.text);

const adjustHeight = () => {
    if (textareaRef.value) {
        textareaRef.value.style.height = 'auto';
        textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`;
    }
};

watch(text, () => {
    nextTick(() => adjustHeight());
});

watch(text, (newValue) => {
    component.value.text = newValue;
});

onMounted(() => {
    nextTick(() => {
        adjustHeight();
        textareaRef.value?.focus(); // Фокусируемся на textarea после монтирования
    });
});
</script>

<template>
    <textarea
        ref="textareaRef"
        v-model="text"
        class="dynamic-textarea"
        @input="adjustHeight"
    >
    </textarea>
</template>
