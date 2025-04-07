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

const params = computed(() => component.value.params ?? []);

function addParam() {
    params.value.push(
        new Models.ApiComponentParam({
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

function removeParam(index: number) {
    params.value.splice(index, 1);
    componentStore.saveUpdateComponent(props.componentId);
}
</script>

<template>
    <v-expansion-panel
        :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
        title="Параметры"
    >
        <v-expansion-panel-text class="bg-background">
            <div
                v-for="(param, index) in params"
                :key="index"
                class="d-flex align-center mb-2"
            >
                <v-text-field
                    density="compact"
                    v-model="param.key"
                    label="Ключ"
                    variant="outlined"
                    class="mr-2"
                />
                <v-text-field
                    density="compact"
                    v-model="param.value"
                    label="Значение"
                    variant="outlined"
                    class="mr-2"
                />
                <v-btn density="compact" icon @click="removeParam(index)">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </div>
            <v-btn color="primary" density="compact" @click="addParam"
                >Добавить параметр</v-btn
            >
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style scoped></style>
