<script lang="ts" setup>
import type { Props } from './props';
import { useComponentStore } from '@/app/stores/components';
import WrapperComponent from './WrapperComponent.vue';
import { computed } from 'vue';
import { Helper } from '@/shared/helpers';

const props = defineProps<Props>();
const componentStore = useComponentStore();

const component = computed(
    () => componentStore.getComponents[props.pageId][props.componentId]
);
</script>

<template>
    <wrapper-component v-bind="props">
        <template #default="{ isActive }">
            <v-textarea autofocus v-model="component.text" v-if="isActive">
            </v-textarea>
            <div v-else v-html="$MARKDOWN.getHTML(component.text)"></div>
        </template>
    </wrapper-component>
</template>
