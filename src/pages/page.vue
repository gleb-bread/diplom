<script lang="ts" setup>
import { usePageStore } from '@/app/stores/page';
import { useComponentStore } from '@/app/stores/components';
import { computed } from 'vue';
import FactoryComponent from '@/widgets/components/FactoryComponent.vue';

const componentStore = useComponentStore();
const pageStore = usePageStore();

const getSelectPage = computed(() => pageStore.getSelectPage);

const getComponentIds = computed(
    () => componentStore.getGenericList[getSelectPage.value]
);

const getComponent = computed(
    () => (id: number) => componentStore.getComponents[getSelectPage.value][id]
);
</script>

<template>
    <v-list :bg-color="$STYLE_VARIBLES.COLOR.BACKGROUND" class="px-2">
        <template v-for="id in getComponentIds">
            <factory-component :component-id="id" :page-id="getSelectPage">
            </factory-component>
        </template>
    </v-list>
</template>
