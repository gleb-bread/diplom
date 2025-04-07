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

// Урл компонента
const url = computed({
    get() {
        return component.value.url ?? '';
    },
    set(v: string) {
        component.value.url = v;
        componentStore.saveUpdateComponent(props.componentId);
    },
});

// Валидация URL
function isValidUrl(value: string): boolean {
    try {
        new URL(value);
        return true;
    } catch (_) {
        return false;
    }
}
</script>

<template>
    <v-col cols="9">
        <v-text-field
            v-model="url"
            label="URL"
            variant="outlined"
            :density="'compact'"
            hide-details
            :rules="[
                (v) => !!v || 'URL обязателен',
                (v) => isValidUrl(v) || 'Некорректный URL',
            ]"
        />
    </v-col>
</template>

<style scoped></style>
