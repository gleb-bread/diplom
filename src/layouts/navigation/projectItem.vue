<script lang="ts" setup>
import type { ItemProps } from './props';
import { useProjectStore } from '@/app/stores/project';
import { computed } from 'vue';

const props = defineProps<ItemProps>();
const projectStore = useProjectStore();

const getTitle = computed(
    () => (idProj: number) => projectStore.getProjects[idProj].name
);
</script>

<template>
    <v-list-item>
        <template #prepend>
            <div class="mr-2">
                <v-icon>mdi-archive-outline</v-icon>
            </div>
        </template>
        <template #append> </template>
        <template #title>
            <span class="font-xs no-select">{{ getTitle(itemId) }} </span>
        </template>
    </v-list-item>
</template>
