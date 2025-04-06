<script lang="ts" setup>
import { computed } from 'vue';
import modalWrapper from '../modal/modalWrapper.vue';
import { useModalsStore } from '@/app/stores/modals';
import textField from '../fields/outlined/textField.vue';
import { useProjectStore } from '@/app/stores/project';
import { useUserStore } from '@/app/stores/user';

const modalsStore = useModalsStore();
const projectStore = useProjectStore();
const userStore = useUserStore();

const getModelValue = computed({
    get() {
        return modalsStore.getInstant('createProject');
    },
    set(v: boolean) {
        modalsStore.setInstant('createProject', v);
    },
});

const getNewProject = computed(() => projectStore.getNewProject);

const closeModal = function () {
    projectStore.resetNewProject();
    modalsStore.setInstant('createProject', false);
};

const createNewProject = async function () {
    getNewProject.value.user_id = userStore.getUserInfo.id;
    await projectStore.createNewProject();
    closeModal();
};
</script>

<template>
    <modalWrapper
        v-model:model-value="getModelValue"
        :close-modal="closeModal"
        title="Создание проекта"
    >
        <textField
            label="Название проекта"
            v-model:model-value="getNewProject.name"
        />
        <template #actions>
            <VBtn @click.stop="createNewProject">Создать</VBtn>
        </template>
    </modalWrapper>
</template>
