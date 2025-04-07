<script lang="ts" setup>
import type { Props } from '../props';
import { ref, computed } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import * as Models from '@/entities/models';

const props = defineProps<Props>();

const componentStore = useComponentStore();

const component = computed(
    () =>
        <Models.ApiComponent>(
            componentStore.getComponents[props.pageId]?.[props.componentId]
        )
);

const editing = ref(false);
const editedName = ref('');

const componentName = computed(() => component.value.name ?? 'API Тестер');

function startEditing() {
    editedName.value = componentName.value;
    editing.value = true;
}

function cancelEditing() {
    editing.value = false;
    editedName.value = '';
}

function saveName() {
    component.value.name = editedName.value;
    componentStore.saveUpdateComponent(props.componentId);
    editing.value = false;
    editedName.value = '';
}
</script>

<template>
    <v-card-title>
        <template v-if="editing">
            <div class="edit-wrapper">
                <input
                    v-model="editedName"
                    class="custom-input"
                    @keydown.enter="saveName"
                    @keydown.esc="cancelEditing"
                    @blur="cancelEditing"
                />
                <VBtn
                    variant="text"
                    @click="saveName"
                    density="compact"
                    :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                >
                    <VIcon>mdi-check</VIcon>
                </VBtn>
                <VBtn
                    variant="text"
                    density="compact"
                    @click="cancelEditing"
                    :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                >
                    <VIcon>mdi-close</VIcon>
                </VBtn>
            </div>
        </template>

        <template v-else>
            <span @click="startEditing" style="cursor: pointer">
                {{ componentName }}
                <VBtn
                    density="compact"
                    variant="text"
                    :size="$STYLE_VARIBLES.NAVIGATION.BTN_ICON_SIZE"
                >
                    <VIcon>mdi-pencil</VIcon>
                </VBtn>
            </span>
        </template>
    </v-card-title>
</template>

<style scoped>
.edit-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
}

.custom-input {
    font-size: 1rem;
    padding: 2px 4px;
    border: none;
    border-bottom: 1px solid #ccc;
    background: transparent;
    outline: none;
    min-width: 150px;
}

.custom-input:focus {
    border-bottom-color: #1976d2; /* vuetify primary */
}

button {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1;
    padding: 2px;
}
</style>
