<script lang="ts" setup>
import WrapperComponent from './WrapperComponent.vue';
import type { Props } from './props';
import { computed, defineComponent } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import apiHeaderComponent from './ApiComponent/apiHeaderComponent.vue';
import apiMethodComponent from './ApiComponent/apiMethodComponent.vue';
import apiUrlComponent from './ApiComponent/apiUrlComponent.vue';
import apiParamsComponent from './ApiComponent/apiParamsComponent.vue';
import apiHeadersComponent from './ApiComponent/apiHeadersComponent.vue';
import apiCookieComponent from './ApiComponent/apiCookieComponent.vue';
import { Handlers } from '@/shared/handlers';
import { Actions } from '@/shared/actions';
import { Config } from '@/shared/config';
import * as Types from '@/shared/types';
import * as Models from '@/entities/models';
import apiResponseCompoent from './ApiComponent/apiResponseCompoent.vue';

const nameComponent = 'apiComponent';

defineComponent({ name: nameComponent });

const props = defineProps<Props>();

const config = new Config.Actions.Config(nameComponent);

const componentStore = useComponentStore();

const component = computed(
    () =>
        <Models.ApiComponent>(
            componentStore.getComponents[props.pageId][props.componentId]
        )
);

// Определяем цвет и текст в зависимости от статуса
const statusStyles = computed(() => {
    const status = component.value?.status;

    switch (status) {
        case 'pending':
        case 'in-progress':
            return {
                color: 'yellow',
                text: 'Выполняется',
            };
        case 'failed':
            return {
                color: 'red',
                text: 'Ошибка',
            };
        case 'completed':
            return {
                color: 'green',
                text: 'Успех',
            };
        case null:
        default:
            return {
                color: null, // Без подсветки
                text: null, // Без текста
            };
    }
});

const handlerTestApiComponent = new Handlers.TestApiComponent(component.value);
</script>

<template>
    <wrapper-component v-bind="props">
        <template #default="{ isActive }">
            <v-card
                class="border-sm"
                :color="statusStyles.color || $STYLE_VARIBLES.COLOR.BACKGROUND"
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
                        <apiResponseCompoent v-bind="props" />
                    </v-expansion-panels>

                    <!-- Кнопка отправки и статус -->
                    <div class="d-flex align-center mt-4">
                        <v-btn
                            density="compact"
                            color="primary"
                            class="mr-4"
                            @click.stop="
                                $ACTION_MANAGER.pushAction(
                                    new Actions.Click.ClickAction(
                                        <any>$event,
                                        config,
                                        handlerTestApiComponent
                                    )
                                )
                            "
                        >
                            Отправить
                        </v-btn>
                        <span
                            v-if="statusStyles.text"
                            :style="{ color: statusStyles.color }"
                        >
                            {{ statusStyles.text }}
                        </span>
                    </div>
                </v-card-text>
            </v-card>
        </template>
    </wrapper-component>
</template>
