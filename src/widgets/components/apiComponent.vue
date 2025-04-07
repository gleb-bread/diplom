<script lang="ts" setup>
import WrapperComponent from './WrapperComponent.vue';
import type { Props } from './props';
import { computed } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import apiComponent from './ApiComponent/apiHeaderComponent.vue';
import * as Models from '@/entities/models';
import apiHeaderComponent from './ApiComponent/apiHeaderComponent.vue';
import apiMethodComponent from './ApiComponent/apiMethodComponent.vue';
import apiUrlComponent from './ApiComponent/apiUrlComponent.vue';
import apiParamsComponent from './ApiComponent/apiParamsComponent.vue';
import apiHeadersComponent from './ApiComponent/apiHeadersComponent.vue';
import apiCookieComponent from './ApiComponent/apiCookieComponent.vue';

const props = defineProps<Props>();

const componentStore = useComponentStore();

const component = computed(
    () =>
        <Models.ApiComponent>(
            componentStore.getComponents[props.pageId][props.componentId]
        )
);
</script>

<template>
    <wrapper-component v-bind="props">
        <template #default="{ isActive }">
            <v-card
                class="border-sm"
                :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
                :elevation="0"
            >
                <apiHeaderComponent v-bind="props" />

                <!-- Форма запроса -->
                <v-card-text>
                    <v-row class="mb-2">
                        <apiMethodComponent v-bind="props" />
                        <apiUrlComponent v-bind="props" />
                    </v-row>

                    <!-- Параметры, Заголовки, Cookies -->
                    <v-expansion-panels :multiple="true">
                        <apiParamsComponent v-bind="props" />

                        <apiHeadersComponent v-bind="props" />

                        <apiCookieComponent v-bind="props" />
                    </v-expansion-panels>

                    <!-- Кнопка отправки -->
                    <v-btn density="compact" color="primary" class="mt-4">
                        Отправить
                    </v-btn>
                </v-card-text>
            </v-card>
        </template>
    </wrapper-component>
</template>
