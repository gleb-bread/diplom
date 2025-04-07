<script lang="ts" setup>
import type { Props } from '../props';
import { ref, computed, watch } from 'vue';
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

// Все REST-методы
const httpMethods = [
    'GET',
    'POST',
    'PUT',
    'PATCH',
    'DELETE',
    'OPTIONS',
    'HEAD',
];

// Метод компонента, по умолчанию — GET
const method = computed({
    get() {
        return component.value.method ?? 'GET';
    },
    set(v: string) {
        component.value.method = v;
        componentStore.saveUpdateComponent(props.componentId);
    },
});
</script>

<template>
    <v-col cols="3">
        <v-select
            class="select-with-background-color"
            v-model="method"
            :items="httpMethods"
            label="Метод"
            variant="outlined"
            :density="'compact'"
            hide-details
        >
        </v-select>
    </v-col>
</template>

<style>
.v-overlay__content.v-select__content .v-list {
    background-color: #e7e8e3;
}
</style>
