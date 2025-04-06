<script lang="ts" setup>
import { computed, ref } from 'vue';
import modalQuestion from '../modal/modalQuestion.vue';
import { useModalsStore } from '@/app/stores/modals';
import textField from '../fields/outlined/textField.vue';
import { useProjectStore } from '@/app/stores/project';

const modalsStore = useModalsStore();
const projectStore = useProjectStore();

const getModelValue = computed({
    get() {
        return modalsStore.getInstant('deleteProject');
    },
    set(v: boolean) {
        modalsStore.setInstant('deleteProject', v);
    },
});

const getProject = computed(
    () => projectStore.getProjects[projectStore.getSelectProject ?? 0]
);

const closeModal = function () {
    projectStore.resetSelectProject();
    modalsStore.setInstant('deleteProject', false);
    modalsStore.setInstant('changeProject', false);
};

const deleteProject = async function () {
    if (getProject.value) {
        getProject.value.archive = true;
        await projectStore.updateProject(getProject.value);
    }
    closeModal();
};
</script>

<template>
    <modalQuestion
        v-model:model-value="getModelValue"
        :question="'Вы точно хотите удалить текущий проект?'"
        :close-modal="closeModal"
        :no-click="closeModal"
        :yes-click="deleteProject"
    >
    </modalQuestion>
</template>
