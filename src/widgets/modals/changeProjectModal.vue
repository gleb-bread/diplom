<script lang="ts" setup>
import { computed, ref } from 'vue';
import modalWrapper from '../modal/modalWrapper.vue';
import { useModalsStore } from '@/app/stores/modals';
import textField from '../fields/outlined/textField.vue';
import { useProjectStore } from '@/app/stores/project';

const modalsStore = useModalsStore();
const projectStore = useProjectStore();

const newName = ref<string | null>(null);

const getModelValue = computed({
    get() {
        return modalsStore.getInstant('changeProject');
    },
    set(v: boolean) {
        modalsStore.setInstant('changeProject', v);
    },
});

const getProject = computed(
    () => projectStore.getProjects[projectStore.getSelectProject ?? 0]
);

const getName = computed({
    get() {
        if (newName.value === null) newName.value = getProject.value?.name;

        return newName.value;
    },
    set(v: string) {
        newName.value = v;
    },
});

const closeModal = function () {
    projectStore.resetSelectProject();
    newName.value = null;
    modalsStore.setInstant('changeProject', false);
};

const updateProject = async function () {
    if (getProject.value) {
        getProject.value.name = <string>newName.value;
        await projectStore.updateProject(getProject.value);
    }
    closeModal();
};

const deleteProjectOpen = function () {
    modalsStore.setInstant('deleteProject', true);
};
</script>

<template>
    <modalWrapper
        v-model:model-value="getModelValue"
        :close-modal="closeModal"
        title="Изменить детали"
    >
        <textField label="Название проекта" v-model:model-value="getName" />
        <template #actions>
            <VBtn
                :color="$STYLE_VARIBLES.COLOR.ERROR"
                @click.stop="deleteProjectOpen"
            >
                Удалить
            </VBtn>
            <VBtn @click.stop="updateProject">Сохранить</VBtn>
        </template>
    </modalWrapper>
</template>
