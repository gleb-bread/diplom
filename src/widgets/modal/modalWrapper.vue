<script lang="ts" setup>
import { computed } from 'vue';
import type { ModalWrapperProps } from './props';

const props = defineProps<ModalWrapperProps>();
const emits = defineEmits<(e: 'update:modelValue', v: boolean) => void>();

const getModelValue = computed({
    get() {
        return props.modelValue;
    },

    set(value: boolean) {
        emits('update:modelValue', value);
    },
});
</script>

<template>
    <v-dialog v-model:model-value="getModelValue" max-width="600">
        <v-card :color="$STYLE_VARIBLES.COLOR.WHITE" :loading="props.loading">
            <v-toolbar class="pr-4" density="compact" :color="'primary'">
                <v-toolbar-title>{{ title }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon @click.stop="closeModal()">mdi-close</v-icon>
            </v-toolbar>
            <v-card-text class="py-0 pt-6">
                <slot></slot>
            </v-card-text>
            <v-card-actions class="px-6 py-0 pb-2">
                <slot name="actions"></slot>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped lang="scss"></style>
