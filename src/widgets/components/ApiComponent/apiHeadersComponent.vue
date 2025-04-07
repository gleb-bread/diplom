<script lang="ts" setup>
import type { Props } from '../props';
import { computed, defineComponent } from 'vue';
import { useComponentStore } from '@/app/stores/components';
import * as Models from '@/entities/models';
import { Handlers } from '@/shared/handlers';
import { Actions } from '@/shared/actions';
import { Config } from '@/shared/config';
import * as Types from '@/shared/types';

const nameComponent = 'apiHeadersComponent';

defineComponent({ name: nameComponent });

const props = defineProps<Props>();

const componentStore = useComponentStore();

const config = new Config.Actions.Config(nameComponent);

const component = computed(
    () =>
        <Models.ApiComponent>(
            componentStore.getComponents[props.pageId]?.[props.componentId]
        )
);

const headers = computed(() => component.value.headers ?? []);

const handlerAddApiComponentHeader = new Handlers.CreateNewApiCompnentData(
    component.value.component_id,
    Types.Component.ApiComponentDataTypes.HEADER
);

const handlerDeleteApiCompoentHeader = (Header: Models.ApiComponentHeader) => {
    return new Handlers.DeleteApiComponentData(
        component.value.component_id,
        Header
    );
};

const handlerUpdateApiComponentHeader = (Header: Models.ApiComponentHeader) => {
    return new Handlers.UpdateApiComponentData(
        component.value.component_id,
        Header
    );
};

const updateHeaderKey = async function (
    Header: Models.ApiComponentHeader,
    event: string
) {
    Header.key = event;
    handlerUpdateApiComponentHeader(Header).__handle();
};

const updateHeaderValue = async function (
    Header: Models.ApiComponentHeader,
    event: string
) {
    Header.value = event;
    handlerUpdateApiComponentHeader(Header).__handle();
};
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
                    :model-value="header.key"
                    @update:model-value="updateHeaderKey(header, $event)"
                    label="Ключ"
                    variant="outlined"
                    density="compact"
                    class="mr-2"
                />
                <v-text-field
                    :model-value="header.value"
                    @update:model-value="updateHeaderValue(header, $event)"
                    label="Значение"
                    variant="outlined"
                    density="compact"
                    class="mr-2"
                />
                <v-btn
                    density="compact"
                    icon
                    :color="$STYLE_VARIBLES.COLOR.BACKGROUND"
                    @click.stop="
                        $ACTION_MANAGER.pushAction(
                            new Actions.Click.ClickAction(
                                <any>$event,
                                config,
                                handlerDeleteApiCompoentHeader(header)
                            )
                        )
                    "
                >
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
            </div>
            <v-btn
                color="primary"
                density="compact"
                @click.stop="
                    $ACTION_MANAGER.pushAction(
                        new Actions.Click.ClickAction(
                            <any>$event,
                            config,
                            handlerAddApiComponentHeader
                        )
                    )
                "
            >
                Добавить заголовок
            </v-btn>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style scoped></style>
