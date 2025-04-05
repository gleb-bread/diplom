<script lang="ts" setup>
import { useProjectStore } from '@/app/stores/project';
import { useProjectElements } from '@/app/stores/projectElements';
import { computed, ref } from 'vue';
import projectItem from './projectItem.vue';
import pageItem from './pageItem.vue';
import folderItem from './folderItem.vue';
import * as Types from '@/shared/types';

const projectStore = useProjectStore();
const projectElements = useProjectElements();

const project = computed(() => projectStore.getProject);

const getElements = computed(() => {
    return projectElements.getGenericList;
});

const getElement = computed(
    () => (elementId: string) => projectElements.getElements[elementId]
);

const open = ref<any[]>([]);

const opened = computed({
    get() {
        return open.value;
    },
    set(v: (number | string)[]) {
        open.value = v;
    },
});
</script>

<template>
    <navigation-project>
        <template v-if="project">
            <v-list v-model:opened="opened">
                <v-list-group :value="project.id">
                    <template #activator="{ props }">
                        <project-item v-bind="props"></project-item>
                    </template>
                    <template #default>
                        <template v-for="elementId in getElements">
                            <template
                                v-if="
                                    getElement(elementId).type ==
                                    Types.Project.ElementTypes.PAGE
                                "
                            >
                                <page-item :item-id="elementId"></page-item>
                            </template>
                            <template
                                v-if="
                                    getElement(elementId).type ==
                                    Types.Project.ElementTypes.FOLDER
                                "
                            >
                                <folderItem :item-id="elementId"></folderItem>
                            </template>
                        </template>
                    </template>
                </v-list-group>
            </v-list>
        </template>
    </navigation-project>
</template>
