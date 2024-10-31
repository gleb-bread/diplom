<script lang="ts" setup>
import { useProjectStore } from '@/app/stores/project';
import { usePageStore } from '@/app/stores/page';
import { computed } from 'vue';
import projectItem from './projectItem.vue';
import pageItem from './pageItem.vue';

const projectStore = useProjectStore();
const pageStore = usePageStore();

const projectsIds = computed(() => projectStore.getGenericList);

const getPages = computed(() => {
    return pageStore.getGenericList[getSelectProject.value];
});

const getSelectProject = computed(() => projectStore.getSelectProject);
</script>

<template>
    <navigation-project>
        <v-list :opened="[getSelectProject]">
            <template v-for="id in projectsIds">
                <v-list-group :value="id">
                    <template #activator>
                        <project-item :item-id="id"></project-item>
                    </template>
                    <template #default>
                        <template v-for="pageId in getPages">
                            <page-item :item-id="pageId"></page-item>
                        </template>
                    </template>
                </v-list-group>
            </template>
        </v-list>
    </navigation-project>
</template>
