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
        <template #append>
            <v-menu>
                <template #activator="{ props }">
                    <VBtn v-bind="props" size="30" variant="text">
                        <VIcon>mdi-plus</VIcon>
                    </VBtn>
                </template>

                <NavigatorCard :elevation="1">
                    <NavigatorList>
                        <v-list-item>
                            <template #prepend>
                                <div class="mr-2">
                                    <v-icon>mdi-list-box-outline</v-icon>
                                </div>
                            </template>
                            <template #title>
                                <div class="font-xs">Создать страницу</div>
                            </template>
                        </v-list-item>
                        <v-list-item>
                            <template #prepend>
                                <div class="mr-2">
                                    <v-icon>mdi-folder-outline</v-icon>
                                </div>
                            </template>
                            <template #title>
                                <div class="font-xs">Создать папку</div>
                            </template>
                        </v-list-item>
                    </NavigatorList>
                </NavigatorCard>
            </v-menu>
        </template>
        <template #title>
            <span class="font-xs no-select">{{ getTitle(itemId) }} </span>
        </template>
    </v-list-item>
</template>
