<script lang="ts" setup>
import type { ItemProps } from './props';
import { useProjectElements } from '@/app/stores/projectElements';
import { useProjectStore } from '@/app/stores/project';
import { computed } from 'vue';

const props = defineProps<ItemProps>();
const projectElements = useProjectElements();
const projectStore = useProjectStore();

const getTitle = computed(
    () => (idPage: string) =>
        projectElements.getElements[getSelectProject.value][idPage].name
);

const getSelectProject = computed(() => projectStore.getSelectProject);
</script>

<template>
    <v-list-item>
        <template #prepend>
            <div class="mr-2">
                <v-icon>mdi-list-box-outline</v-icon>
            </div>
        </template>
        <template #title>
            <span class="font-xs no-select">{{ getTitle(itemId) }} </span>
        </template>
    </v-list-item>
</template>
