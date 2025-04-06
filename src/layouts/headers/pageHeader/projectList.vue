<script lang="ts" setup>
import { useProjectStore } from '@/app/stores/project';
import { computed } from 'vue';

const projectStore = useProjectStore();

const getProjects = computed(() => Object.values(projectStore.getProjects));
</script>

<template>
    <v-menu>
        <template #activator="{ props }">
            <v-list-item v-bind="props" class="px-6"> Проекты </v-list-item>
        </template>

        <NavigatorCard>
            <NavigatorList>
                <template v-for="project in getProjects">
                    <v-list-item class="font-xs" @click.stop="">
                        <template #title>
                            <span class="font-xs">{{ project.name }}</span>
                        </template>
                    </v-list-item>
                </template>
            </NavigatorList>
        </NavigatorCard>
    </v-menu>
</template>
