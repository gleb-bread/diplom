<script lang="ts" setup>
import type { Props } from './props';
import { useComponentStore } from '@/app/stores/components';
import WrapperComponent from './WrapperComponent.vue';
import { computed } from 'vue';

const props = defineProps<Props>();
const componentStore = useComponentStore();

const component = computed(
    () => componentStore.getComponents[props.pageId][props.componentId]
);
</script>

<template>
    <wrapper-component>{{ component }}</wrapper-component>
</template>
