<script lang="ts" setup>
import WrapperComponent from './WrapperComponent.vue';
import type { Props } from './props';
import { computed } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import textAreaComponent from './TextComponent/textAreaComponent.vue';
import * as Models from '@/entities/models';

const props = defineProps<Props>();

const componentStore = useComponentStore();

const component = computed(
    () =>
        <Models.TextComponent>(
            componentStore.getComponents[props.pageId][props.componentId]
        )
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
