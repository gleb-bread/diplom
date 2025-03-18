<script lang="ts" setup>
import type { Props } from './props';
import { useComponentStore } from '@/app/stores/components';
import WrapperComponent from './WrapperComponent.vue';
import { computed } from 'vue';
import { Helper } from '@/shared/helpers';
import * as Types from '@/shared/types';
import textComponent from './textComponent.vue';

const props = defineProps<Props>();
const componentStore = useComponentStore();

const component = computed(
    () => componentStore.getComponents[props.pageId][props.componentId]
);
</script>

<template>
    <template v-if="component.type === Types.Component.Types.TEXT">
        <textComponent
            :page-id="props.pageId"
            :component-id="props.componentId"
        >
        </textComponent>
    </template>
</template>
