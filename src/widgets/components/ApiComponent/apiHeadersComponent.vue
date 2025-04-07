<script lang="ts" setup>
import type { Props } from '../props';
import { computed } from 'vue';
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

const headers = computed(() => component.value.headers ?? []);

function addHeader() {
    headers.value.push(
        new Models.ApiComponentHeader({
            api_component_id: component.value.id,
            created_at: '',
            id: -1,
            key: '',
            updated_at: '',
            value: '',
        })
    );
    componentStore.saveUpdateComponent(props.componentId);
}

function removeHeader(index: number) {
    headers.value.splice(index, 1);
    componentStore.saveUpdateComponent(props.componentId);
}
</script>

<template>
    <v-expansion-panel
        :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
        title="Заголовки"
    >
        <v-expansion-panel-text class="bg-background">
            <div
                v-for="(header, index) in headers"
                :key="index"
                class="d-flex align-center mb-2"
            >
                <v-text-field
                    v-model="header.key"
                    label="Ключ"
                    variant="outlined"
                    density="compact"
                    class="mr-2"
                />
                <v-text-field
                    v-model="header.value"
                    label="Значение"
                    variant="outlined"
                    density="compact"
                    class="mr-2"
                />
                <v-btn density="compact" icon @click="removeHeader(index)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </div>
            <v-btn color="primary" density="compact" @click="addHeader"
                >Добавить заголовок</v-btn
            >
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style scoped></style>
