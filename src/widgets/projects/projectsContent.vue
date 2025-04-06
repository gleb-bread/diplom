<script lang="ts" setup>
import { useProjectStore } from '@/app/stores/project';
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import projectItem from './projects/projectItem.vue';
import addProjectItem from './projects/addProjectItem.vue';
import mobileAddProjectItem from './projects/mobileAddProjectItem.vue';
import createProjectModal from '../modals/createProjectModal.vue';
import changeProjectModal from '../modals/changeProjectModal.vue';
import deleteProjectModal from '../modals/deleteProjectModal.vue';

// Initialize store and router
const projectStore = useProjectStore();
const router = useRouter();

// Computed property for project list
const getGenericList = computed(() => projectStore.getGenericList);
</script>

<template>
    <v-container fluid>
        <!-- Project Cards Grid -->
        <v-row>
            <v-col
                v-for="(projectId, index) in getGenericList"
                :key="projectId"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                xl="2"
            >
                <projectItem :project-id="projectId" />
            </v-col>

            <addProjectItem />
        </v-row>

        <mobileAddProjectItem />
    </v-container>
    <createProjectModal />
    <changeProjectModal />
    <deleteProjectModal />
</template>
